
import { useState } from 'react';
import { Button, DeletePostModal, EditPostModal, Header, PostCard, PostForm } from '../../components';
import { PageContainer, ContentWrapper, PostList } from './styles';
import { 
  useGetPosts, 
  useCreatePost, 
  useUpdatePost, 
  useDeletePost 
} from '../../api/hooks';

export default function MainPage({ currentUser, onLogout }) {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [content, setContent] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const { data: posts = [], isLoading } = useGetPosts();
  const createPostMutation = useCreatePost();
  const updatePostMutation = useUpdatePost();
  const deletePostMutation = useDeletePost();

  const handleCreatePost = async () => {
    if (!newPostTitle.trim() || !content.trim()) return;

    await createPostMutation.mutateAsync({
      username: currentUser,
      title: newPostTitle,
      content,
    });

    setNewPostTitle('');
    setContent('');
  };

  const handleEditPost = async (post) => {
    setSelectedPost(post);
    setEditModalOpen(true);
  };

  const handleSaveEdit = async (updatedData) => {
    await updatePostMutation.mutateAsync({
      id: selectedPost.id,
      data: {
        title: updatedData.newPostTitle,
        content: updatedData.content,
      },
    });
    setEditModalOpen(false);
    setSelectedPost(null);
  };

  const handleOpenDeleteModal = (post) => {
    setSelectedPost(post);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedPost) return;

    await deletePostMutation.mutateAsync(selectedPost.id);

    setDeleteModalOpen(false);
    setSelectedPost(null);
  };

  if (isLoading) return <div>Carregando...</div>;

  return (
    <PageContainer>
      <Header onLogout={onLogout} />

      <ContentWrapper>
        <PostForm
          title="What’s on your mind?"
          newPostTitle={newPostTitle}
          content={content}
          onTitleChange={setNewPostTitle}
          onContentChange={setContent}
          actions={(
          <Button
            color="primary"
            onClick={handleCreatePost}
            disabled={createPostMutation.isPending}
          >
            {createPostMutation.isPending ? 'Creating' : 'Create'}
          </Button>
        )} />

        <PostList>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              currentUser={currentUser}
              onEdit={(updateData) => handleEditPost(post.id, updateData)}
              onDelete={() => handleOpenDeleteModal(post)}
            />
          ))}
        </PostList>
      </ContentWrapper>
      <EditPostModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        post={selectedPost}
        onSave={handleSaveEdit}
      />
      <DeletePostModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleConfirmDelete}
      />
    </PageContainer>
  );
}

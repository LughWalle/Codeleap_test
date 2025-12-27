
import { useState } from 'react';
import { Button, DeletePostModal, EditPostModal, Header, PostCard, PostForm, SkeletonPostCard } from '../../components';
import { PageContainer, ScrollWrapper, ContentWrapper, PostList } from './styles';
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
        content: updatedData.newContent,
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
  return (
    <PageContainer>
      <Header onLogout={onLogout} />
      <ScrollWrapper>
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
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonPostCard key={index} />
                ))
              : posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                currentUser={currentUser}
                onEdit={() => handleEditPost(post)}
                onDelete={() => handleOpenDeleteModal(post)}
              />
            ))}
          </PostList>
        </ContentWrapper>
      </ScrollWrapper>
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

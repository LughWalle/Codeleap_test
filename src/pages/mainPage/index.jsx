
import { useState } from 'react';
import { Button, Header, PostCard, PostForm } from '../../components';
import { PageContainer, ContentWrapper, PostList } from './styles';
import { 
  useGetPosts, 
  useCreatePost, 
  useUpdatePost, 
  useDeletePost 
} from '../../api/hooks';

export default function MainPage({ currentUser}) {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [content, setContent] = useState('');
  
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

  const handleEditPost = async (id, updatedData) => {
    await updatePostMutation.mutateAsync({ id, data: updatedData });
  };

  const handleDeletePost = async (id) => {
    await deletePostMutation.mutateAsync(id);
  };

  if (isLoading) return <div>Carregando...</div>;

  return (
    <PageContainer>
      <Header />

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
              onDelete={() => handleDeletePost(post.id)}
            />
          ))}
        </PostList>
      </ContentWrapper>
    </PageContainer>
  );
}

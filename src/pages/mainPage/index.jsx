
import { useState } from 'react';
import { Button, Header, PostCard, PostForm } from '../../components';
import { PageContainer, ContentWrapper, PostList } from './styles';

export default function MainPage({
  posts = [],
  currentUser,
  onCreatePost,
  onEditPost,
  onDeletePost,
}) {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [content, setContent] = useState('');
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
            onClick={onCreatePost}
          >
            Create
          </Button>
        )} />

        <PostList>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              currentUser={currentUser}
              onEdit={onEditPost}
              onDelete={onDeletePost}
            />
          ))}
        </PostList>
      </ContentWrapper>
    </PageContainer>
  );
}

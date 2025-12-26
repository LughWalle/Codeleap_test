import { useEffect, useState } from 'react';
import PostForm from '../PostForm';
import { default as Modal } from '../../atoms/Modal';
import Button from '../../atoms/Button';

export default function EditPostModal({
  open,
  onClose,
  post,
  onSave,
}) {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    if (post) {
      setNewPostTitle(post.title);
      setNewContent(post.content);
    }
  }, [post]);

  const handleSave = () => {
    console.log({
      post,
      newPostTitle,
      newContent,
    })
    onSave({
      ...post,
      newPostTitle,
      newContent,
    });
  };

  return (
    <Modal open={open} onClose={onClose} maxWidth='66rem'>
      <PostForm
        title="Edit Post"
        newPostTitle={newPostTitle}
        content={newContent}
        onTitleChange={setNewPostTitle}
        onContentChange={setNewContent}
        actions={(<>
          <Button
            variant='outlined'
            color="inherit"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            color="success"
            onClick={handleSave}
          >
            Save
          </Button>
        </>)}
      />
    </Modal>
  );
}

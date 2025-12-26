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
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      setNewPostTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSave = () => {
    onSave({
      ...post,
      newPostTitle,
      content,
    });
  };

  return (
    <Modal open={open} onClose={onClose} maxWidth='66rem'>
      <PostForm
        title="Edit Post"
        newPostTitle={newPostTitle}
        content={content}
        onTitleChange={setNewPostTitle}
        onContentChange={setContent}
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

import { useEffect, useState } from 'react';
import PostForm from '../PostForm';
import { default as Modal } from '../../atoms/Modal';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import { Box } from '@mui/material';

export default function DeletePostModal({
  open,
  onClose,
  onDelete,
}) {

  const handleDelete = () => {
    onDelete();
  };

  return (
    <Modal open={open} onClose={onClose} maxWidth='66rem'>
      <Card
        title="Are you sure you want to delete this item?"
      >
        <Box display="flex" justifyContent="flex-end" gap="1.6rem">
          <Button
            variant='outlined'
            color="inherit"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            color="warning"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}

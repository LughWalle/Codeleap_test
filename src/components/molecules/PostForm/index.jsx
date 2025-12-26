import { Box, Button, TextField } from '@mui/material';
import Card from '../../atoms/Card';
import FormField from '../FormField';

export default function PostForm({
  newPostTitle,
  title,
  content,
  onTitleChange,
  onContentChange,
  actions
}) {
  return (
    <Card title={title}>
        <FormField
          label="Title"
          value={newPostTitle}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Hello world"
        />
        <FormField
          label="Content"
          multiline
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          rows={4}
          placeholder="Content here"
        />
        <Box
          display="flex"
          justifyContent="flex-end"
          gap={(theme) => `${theme.custom.spacing.md}rem`}
        >
          {actions && actions}
        </Box>
    </Card>
  );
}

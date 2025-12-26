import { Typography, Box } from '@mui/material';
import EditIcon from '../../../assets/icons/icon-edit.svg?react';
import DeleteIcon from '../../../assets/icons/icon-trash.svg?react';
import Card from '../../atoms/Card';
import { formatTime } from '../../../utils'
import { PostCardActions } from './styles';

export default function PostCard({
  post,
  currentUser,
  onEdit,
  onDelete,
}) {
  const isOwner = post.username === currentUser;

  const headerActions = isOwner && (
    <Box display="flex" gap={(theme) => `${theme.custom.spacing.lg}rem`}>
      <PostCardActions onClick={() => onDelete(post)}>
        <DeleteIcon />
      </PostCardActions>

      <PostCardActions onClick={() => onEdit(post)}>
        <EditIcon />
      </PostCardActions>
    </Box>
  );

  return (
    <Card
      title={post.title}
      variant="primary"
      headerActions={headerActions}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        marginBottom={(theme) => `${theme.custom.spacing.sm}rem`}
      >
        <Typography variant="body2">@{post.username}</Typography>
        <Typography variant="body2">
          {formatTime(post.created_datetime)}
        </Typography>
      </Box>

      <Typography variant="body1" marginTop={(theme) => `${theme.custom.spacing.sm}rem`}>
        {post.content}
      </Typography>
    </Card>
  );
}

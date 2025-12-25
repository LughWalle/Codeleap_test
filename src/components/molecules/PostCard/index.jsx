import { Typography, IconButton, Box, Divider } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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
    <Box display="flex" gap={(theme) => theme.custom.spacing.xs}>
      <PostCardActions onClick={() => onDelete(post)}>
        <DeleteOutlineIcon fontSize="inherit" />
      </PostCardActions>

      <PostCardActions onClick={() => onEdit(post)}>
        <EditOutlinedIcon fontSize="inherit" />
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
        marginBottom={(theme) => theme.custom.spacing.sm}
      >
        <Typography variant="body2">@{post.username}</Typography>
        <Typography variant="body2">
          {formatTime(post.created_datetime)}
        </Typography>
      </Box>

      <Typography variant="body1" marginTop={(theme) => theme.custom.spacing.sm}>
        {post.content}
      </Typography>
    </Card>
  );
}

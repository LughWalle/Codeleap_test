import { Box, Skeleton } from '@mui/material';
import Card from '../../atoms/Card';

export default function SkeletonPostCard() {

  return (
    <Card
      title={<Skeleton width="20%" height={32} />}
      variant="primary"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        marginBottom={(theme) => `${theme.spacing.sm}rem`}
      >
        <Skeleton variant="text" width="60%" height={22} />
        <Skeleton variant="text" width="30%" height={14} />
      </Box>

        <Skeleton variant="rectangular" height={80} />
    </Card>
  );
}

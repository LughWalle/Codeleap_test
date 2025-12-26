import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const PostCardActions = styled(IconButton)(({ theme }) => ({
  width: 30,
  height: 30,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > svg': {
    width: 'inherit',
    height: 'inherit',
    color: theme.palette.primary.contrastText
  },
  
}))
import styled from 'styled-components';
import MuiButton from '@mui/material/Button';

export const StyledButton = styled(MuiButton)(({ theme, width }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  height: 32,
  fontWeight: 700,
  fontSize: '1.6rem',
  width: width || '12rem',
  minWidth: 111
}));

import styled from 'styled-components';
import MuiButton from '@mui/material/Button';

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: 8,
  height: 32,
  fontWeight: 700,
  fontSize: '1.6rem',
  minWidth: 111
}));

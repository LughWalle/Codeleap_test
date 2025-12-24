import styled from 'styled-components';
import MuiButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: 8,
  height: 32,
  fontWeight: 700,
  fontSize: 16,
  minWidth: 111
}));

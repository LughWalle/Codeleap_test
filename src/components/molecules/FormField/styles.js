import { FormLabel as MuiFormLabel } from '@mui/material';
import styled from 'styled-components';

export const FormLabel = styled(MuiFormLabel)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  marginBottom: `${theme.custom.spacing.sm}rem`
}))
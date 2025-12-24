import styled from 'styled-components';
import MuiCard from '@mui/material/Card';

export const CardContainer = styled(MuiCard)`
  border-radius: 1.6rem;
  overflow: hidden;
  text-align: left;
`;

export const CardHeader = styled.div`
  padding: 2.4rem;
  font-weight: 700;
  font-size: 2.2rem;
  background-color: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.palette.primary.main
      : 'transparent'};

  color: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary};
`;

export const CardContent = styled.div`
  padding: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.6;
`;

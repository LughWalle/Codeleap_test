import styled from 'styled-components';
import Box from '@mui/material/Box';

export const OverlayBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: 100%;
  max-width: ${({ $maxwidth }) => $maxwidth};
  margin: auto;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  outline: unset;
`;

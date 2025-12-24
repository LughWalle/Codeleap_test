import styled from 'styled-components';
import Box from '@mui/material/Box';

export const OverlayBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  padding: 3.2rem;
  border-radius: 1.6rem;
  width: 100%;
  max-width: ${({ maxwidth }) => maxwidth};

  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  outline: none;
`;

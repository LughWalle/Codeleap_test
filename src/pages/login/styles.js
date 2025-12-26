import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => `${theme.custom.spacing.lg}rem`};
`;

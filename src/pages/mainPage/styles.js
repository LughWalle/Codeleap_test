import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.main`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.custom.spacing.lg}rem;

  padding: ${({ theme }) => theme.custom.spacing.lg}rem;
`;

export const PostList = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.custom.spacing.lg}rem;
`;

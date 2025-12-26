import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

export const ScrollWrapper = styled.main`
  flex: 1;
  overflow-y: auto;
  width: 100%;
`;


export const ContentWrapper = styled.main`
  max-width: 80rem;
  margin: auto;
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

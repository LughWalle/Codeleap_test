import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};

  padding: 2.7rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
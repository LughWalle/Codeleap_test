import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${({ theme }) => theme.spacing(3)};

  background: ${({ theme }) => theme.palette.background.paper};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  transition:
    background-color ${({ theme }) => theme.motion.duration.normal}ms
      ${({ theme }) => theme.motion.easing.standard},
    border-color ${({ theme }) => theme.motion.duration.normal}ms
      ${({ theme }) => theme.motion.easing.standard};
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;

  strong {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

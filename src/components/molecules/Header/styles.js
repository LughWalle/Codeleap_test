import styled from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => ({
    width: '100%',
    height: '64px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: theme.spacing(0, 3),

    background: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,

    transition:
      `backgroundcolor ${theme.motion.duration.normal}ms
        ${theme.motion.easing.standard},
      border-color ${theme.motion.duration.normal}ms
        ${theme.motion.easing.standard}`,
  })}
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

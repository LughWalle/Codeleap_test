import styled from 'styled-components';

export const DialWrapper = styled.button`
  position: relative;
  width: 64px;
  height: 64px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const StyledDial = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  transform-origin: center;
  will-change: transform;

  transition: transform ${({ theme }) => theme.motion.slow}
    cubic-bezier(0.16, 1, 0.3, 1);

  background: ${({ $colors }) => `
    conic-gradient(
      ${$colors
        .map(
          (c, i) =>
            `${c} ${(i * 100) / $colors.length}% ${((i + 1) * 100) / $colors.length}%`
        )
        .join(',')}
    )
  `};

  box-shadow: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? `
        0 0 20px ${theme.palette.primary.main}55,
        inset 0 0 12px rgba(255,255,255,0.08)
      `
      : `
        0 6px 14px rgba(0,0,0,0.18),
        inset 0 1px 2px rgba(255,255,255,0.6)
      `};
`;

export const Pointer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid ${({ theme }) => theme.palette.text.primary};
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  z-index: 3;
  padding: 4px 8px;
  border-radius: 6px;

  font-size: 1.2rem;
  white-space: nowrap;

  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};

  box-shadow: 0 4px 10px rgba(0,0,0,.18);

  opacity: 0;
  pointer-events: none;

  transition:
    opacity ${({ theme }) => theme.motion.fast},
    transform ${({ theme }) => theme.motion.fast};

  ${DialWrapper}:hover &,
  ${DialWrapper}:focus-visible & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

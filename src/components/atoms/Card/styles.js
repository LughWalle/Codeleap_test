import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey[500]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  overflow: hidden;
  text-align: left;
`;

export const CardHeader = styled.div`
  min-height: 7rem;
  background-color: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.palette.primary.main
      : 'transparent'};

  color: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary};
  padding: ${({ theme }) => theme.custom.spacing.lg}px;
  box-sizing: border-box;
`;

export const CardTitle = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;
`;

export const CardHeaderActions = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: ${({ theme }) => theme.custom.spacing.lg}px;
`;
export const CardHeaderContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 2.2rem;
  justify-content: space-between;
  // gap: ${({ theme }) => theme.custom.spacing.lg}px;
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.custom.spacing.md}px;
  font-size: 1.4rem;
  line-height: 1.6;
`;

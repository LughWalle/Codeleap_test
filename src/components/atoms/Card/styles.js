import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey[500]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  overflow: hidden;
  text-align: left;
  min-height: ${({ $fixedHeight }) => ($fixedHeight ? $fixedHeight : 'fit-content')};
`;

export const CardHeader = styled.div`
  ${({ theme, $variant }) => {
    const isPrimary = $variant === 'primary';

    return `
      min-height: ${
        isPrimary ? '7rem' : 'unset'
      };
      box-sizing: border-box;

      background-color: ${
        isPrimary ? theme.palette.primary.main : 'transparent'
      };

      color: ${
        isPrimary
          ? theme.palette.primary.contrastText
          : theme.palette.text.primary
      };

      padding: ${
        isPrimary
          ? `${theme.custom.spacing.lg}rem`
          : `${theme.custom.spacing.lg}rem ${theme.custom.spacing.lg}rem 0`
      };
    `;
  }}
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
  gap: ${({ theme }) => theme.custom.spacing.lg}rem;
`;
export const CardHeaderContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 2.2rem;
  justify-content: space-between;
  `;
  
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.custom.spacing.lg}rem;
  padding: ${({ theme }) => theme.custom.spacing.lg}rem;
  font-size: 1.4rem;
  line-height: 1.6;
`;

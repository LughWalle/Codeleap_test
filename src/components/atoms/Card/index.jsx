import { CardContainer, CardHeader, CardContent, CardHeaderContent, CardHeaderActions, CardTitle } from './styles';

export default function Card({
  title,
  variant = 'default',
  headerActions,
  children,
  fixedHeight,
  gap,
  ...rest
}) {
  return (
    <CardContainer $fixedHeight={fixedHeight} {...rest}>
      {title && (
        <CardHeader $variant={variant}>
          <CardHeaderContent>
            <CardTitle>{title}</CardTitle>

            {headerActions && (
              <CardHeaderActions>{headerActions}</CardHeaderActions>
            )}
          </CardHeaderContent>
        </CardHeader>
      )}

      <CardContent $gap={gap}>
        {children}
      </CardContent>
    </CardContainer>
  );
}

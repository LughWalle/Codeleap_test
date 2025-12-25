import { CardContainer, CardHeader, CardContent, CardHeaderContent, CardHeaderActions, CardTitle } from './styles';

export default function Card({
  title,
  variant = 'default',
  headerActions,
  children,
}) {
  return (
    <CardContainer>
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

      <CardContent>
        {children}
      </CardContent>
    </CardContainer>
  );
}

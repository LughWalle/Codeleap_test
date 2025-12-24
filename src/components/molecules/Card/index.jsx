import { CardContainer, CardHeader, CardContent } from './styles';

export default function Card({
  title,
  variant = 'default',
  children,
}) {
  return (
    <CardContainer>
      {title && (
        <CardHeader $variant={variant}>
          {title}
        </CardHeader>
      )}

      <CardContent>
        {children}
      </CardContent>
    </CardContainer>
  );
}

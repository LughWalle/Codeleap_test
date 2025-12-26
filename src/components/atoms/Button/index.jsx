import { StyledButton } from './styles';

export default function Button({ children, ...props }) {
  return <StyledButton variant='contained' {...props}>{children}</StyledButton>;
}

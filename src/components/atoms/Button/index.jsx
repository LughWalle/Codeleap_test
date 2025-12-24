import { StyledButton } from './style';

export default function Button({ children, ...props }) {
  return <StyledButton variant='contained' {...props}>{children}</StyledButton>;
}

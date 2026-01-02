import { HeaderContainer, Brand, Actions } from './styles';
import { ThemeDial } from '../../atoms/ThemeDial';

export default function Header() {
  return (
    <HeaderContainer as="header">
      <Brand>
        <strong>Lucival</strong>
        <span>Design System</span>
      </Brand>

      <Actions>
        <ThemeDial />
      </Actions>
    </HeaderContainer>
  );
}

import { Typography } from '@mui/material';
import { HeaderActions, HeaderContainer } from './styles';
import { useNavigate } from 'react-router';
import Button from '../../atoms/Button';

export default function Header({ onLogout }) {
  return (
    <HeaderContainer>
      <Typography variant="h1">
        CodeLeap Network
      </Typography>
      <HeaderActions>
        <Button onClick={onLogout}>
          LOGOUT
        </Button>
      </HeaderActions>
    </HeaderContainer>
  );
}

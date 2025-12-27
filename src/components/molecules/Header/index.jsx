import { Typography } from '@mui/material';
import { HeaderActions, HeaderContainer } from './styles';
import Button from '../../atoms/Button';
import { USE_MOCK } from '../../../api/client';

export default function Header({ onLogout }) {

  // Clear local storage to reset mock data
  // just show button when using mock api
  const handleClearCache = () => {
    localStorage.clear()
  }
  return (
    <HeaderContainer>
      <Typography variant="h1">
        CodeLeap Network
      </Typography>
      <HeaderActions>
        {USE_MOCK &&
        <Button variant="outlined" color="inherit" width="13rem" onClick={handleClearCache}>
          Clear cache
        </Button>}
        <Button color="warning" onClick={onLogout}>
          LOGOUT
        </Button>
      </HeaderActions>
    </HeaderContainer>
  );
}

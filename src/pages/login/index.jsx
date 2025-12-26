import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Card, FormField, Modal } from '../../components';
import { PageContainer } from './styles';
import { Box } from '@mui/material';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = username.trim();
    if (!name) return;

    onLogin(name);
    localStorage.setItem('username', name);
    navigate('/main', { replace: true });
  };

  return (
    <PageContainer>
      <Modal open={true} maxWidth="50rem">
        <Card title="Welcome to CodeLeap network!" >
          <Box
              component="form"
              onSubmit={handleSubmit}
              display="flex"
              flexDirection="column"
              gap={(theme) => `${theme.custom.spacing.lg}rem`}
            >
            <FormField
              label="Please enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="John doe"
            />
            <Box
              display="flex"
              justifyContent="flex-end"
              gap={(theme) => `${theme.custom.spacing.md}rem`}
            >
              <Button
                type="submit"
                color="primary"
                width="11.1rem"
                disabled={!username.trim()}
              >
                ENTER
              </Button>
            </Box>
          </Box>
        </Card>
      </Modal>
    </PageContainer>
  );
}
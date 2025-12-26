import { Box } from '@mui/material';
import Input from '../../atoms/Input';
import { FormLabel } from './styles';

export default function FormField({ label, ...props }) {
  return (
    <Box display="flex" flexDirection="column">
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
    </Box>
  );
}

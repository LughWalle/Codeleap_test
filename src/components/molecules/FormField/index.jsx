import { Box, FormLabel } from '@mui/material';
import Input from '../../atoms/Input';

export default function FormField({ label, ...props }) {
  return (
    <Box display="flex" flexDirection="column">
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
    </Box>
  );
}

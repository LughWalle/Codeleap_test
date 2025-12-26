import { Modal } from '@mui/material';
import { OverlayBox } from './style';

export default function BaseModal({
  open,
  onClose,
  children,
  maxWidth = '48rem',
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <OverlayBox maxwidth={maxWidth}>
        {children}
      </OverlayBox>
    </Modal>
  );
}

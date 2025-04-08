import { Button } from '@mui/material';

interface BasicButtonProps {
  onClick: () => void;
  id: string;
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function BasicButton({
  onClick,
  id = 'basic-button',
  label = 'Button',
  disabled = false,
  fullWidth = true,
}: BasicButtonProps) {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
      id={id}
      variant={'contained'}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  );
}

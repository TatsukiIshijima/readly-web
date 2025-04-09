import { Button } from '@mui/material';

interface BasicButtonProps {
  onClick: () => void;
  id: string;
  name: string;
  label: string;
  type: BasicButtonType;
  disabled?: boolean;
  fullWidth?: boolean;
}

type BasicButtonType = 'button' | 'submit' | 'reset';

export default function BasicButton({
  onClick,
  id = 'basic-button',
  name = 'basic-button',
  label = 'Button',
  type = 'button',
  disabled = false,
  fullWidth = true,
}: BasicButtonProps) {
  return (
    <Button
      sx={{ textTransform: 'none' }}
      onClick={() => {
        onClick();
      }}
      id={id}
      name={name}
      type={type}
      variant={'contained'}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  );
}

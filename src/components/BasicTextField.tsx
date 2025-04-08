import { TextField } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';

interface BasicTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  id: string;
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  fullWidth: boolean;
  error: boolean;
  errorMessage: string;
}

export default function BasicTextField({
  value,
  onChange,
  id = 'basic-text-filed',
  name = 'basic-text-filed',
  label = '',
  type = 'text',
  fullWidth = true,
  error = false,
  errorMessage = '',
}: BasicTextFieldProps) {
  const shouldShowError = error && errorMessage !== '';
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      type={type}
      variant={'outlined'}
      fullWidth={fullWidth}
      error={error}
      helperText={shouldShowError ? errorMessage : null}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    ></TextField>
  );
}

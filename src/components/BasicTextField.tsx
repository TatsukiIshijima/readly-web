import { TextField } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';

interface BasicTextFieldProps {
  id: string;
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  error: boolean;
  errorMessage: string;
}

export default function BasicTextField({
  id = '',
  name = '',
  label = '',
  type = 'text',
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
      error={error}
      helperText={shouldShowError ? errorMessage : null}
    ></TextField>
  );
}

import { TextField } from '@mui/material';
import React, { HTMLInputTypeAttribute } from 'react';

interface BasicTextFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  error?: boolean;
  errorMessage?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  fullWidth?: boolean;
}

export default function BasicTextField({
  value,
  onChange,
  id = 'basic-text-filed',
  label = '',
  type = 'text',
  error = false,
  errorMessage = '',
  name = 'basic-text-filed',
  autoComplete = 'off',
  autoFocus = true,
  fullWidth = true,
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
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
    ></TextField>
  );
}

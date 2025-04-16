import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';
import { useToggle } from '@/hooks/useToggle';

interface PasswordTextFieldProps {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  error: boolean;
  errorMessage: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  fullWidth?: boolean;
}

export default function PasswordTextField({
  password,
  onChange,
  id = 'password-text-filed',
  name = 'password-text-filed',
  label = 'パスワード',
  autoComplete = 'current-password',
  autoFocus = true,
  fullWidth = true,
  error = false,
  errorMessage = '',
}: PasswordTextFieldProps) {
  const showPassword = useToggle(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl error={error} variant={'outlined'} fullWidth={fullWidth}>
      <InputLabel htmlFor={id} sx={error ? { color: 'error.main' } : undefined}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword.value ? 'text' : 'password'}
        name={name}
        error={error}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        value={password}
        onChange={onChange}
        endAdornment={
          <InputAdornment position={'end'}>
            <IconButton
              aria-label={
                showPassword.value
                  ? 'hide the password'
                  : 'display the password'
              }
              onClick={showPassword.onChange}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge={'end'}
            >
              {showPassword.value ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      ></OutlinedInput>
      {error && errorMessage && (
        <FormHelperText sx={{ color: 'error.main' }}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
}

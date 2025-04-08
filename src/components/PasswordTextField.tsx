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

interface PasswordTextFieldProps {
  password: string;
  onChange: (value: string) => void;
  id: string;
  name: string;
  label: string;
  autoFocus: boolean;
  error: boolean;
  errorMessage: string;
}

export default function PasswordTextField({
  password,
  onChange,
  id = 'outlined-adornment-password',
  name = 'outlined-adornment-password',
  label = 'パスワード',
  autoFocus = true,
  error = false,
  errorMessage = '',
}: PasswordTextFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

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
    <FormControl error={error} variant={'outlined'}>
      <InputLabel htmlFor={id} sx={error ? { color: 'error.main' } : undefined}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? 'text' : 'password'}
        name={name}
        error={error}
        autoFocus={autoFocus}
        value={password}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        endAdornment={
          <InputAdornment position={'end'}>
            <IconButton
              aria-label={
                showPassword ? 'hide the password' : 'display the password'
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge={'end'}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
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

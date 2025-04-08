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

export default function PasswordTextField() {
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
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
    <FormControl>
      <InputLabel htmlFor={'outlined-adornment-password'}>
        パスワード
      </InputLabel>
      <OutlinedInput
        id={'outlined-adornment-password'}
        type={showPassword ? 'text' : 'password'}
        name={'outlined-adornment-password'}
        error={passwordError}
        autoFocus={true}
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
        label={'Password'}
      ></OutlinedInput>
      <FormHelperText sx={{ color: 'error.main' }}>
        {passwordErrorMessage}
      </FormHelperText>
    </FormControl>
  );
}

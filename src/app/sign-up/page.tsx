'use client';

import { Box, Stack, Typography, Link } from '@mui/material';
import React from 'react';
import BasicTextField from '@/components/BasicTextField';
import PasswordTextField from '@/components/PasswordTextField';
import BasicButton from '@/components/BasicButton';
import AuthContainer from '@/components/AuthContainer';
import { useTextField } from '@/hooks/useTextField';

export default function SignUp() {
  const userNameTextField = useTextField('');
  const emailTextField = useTextField('');
  const passwordTextField = useTextField('');
  const [userNameError, setUserNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = validateInputs(
      userNameTextField.value,
      emailTextField.value,
      passwordTextField.value
    );
    if (!isValid) {
      e.preventDefault();
      return;
    }

    const formData = new FormData(e.currentTarget);
    console.log({
      userName: formData.get('username-text-field'),
      email: formData.get('email-text-field'),
      password: formData.get('password-text-field'),
    });
  };

  // TODO:ロジック側に移動
  const validateInputs = (
    userName: string,
    email: string,
    password: string
  ) => {
    let isValid = true;

    if (userName === '') {
      setUserNameError(true);
      isValid = false;
    } else {
      setUserNameError(false);
    }

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (password === '' || password.length < 6) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    return isValid;
  };

  return (
    <AuthContainer>
      <Box display={'flex'} justifyContent={'center'} mb={4}>
        <Typography component={'h1'} variant={'h4'}>
          Readly
        </Typography>
      </Box>
      <Stack
        component={'form'}
        onSubmit={handleSubmit}
        method={'POST'}
        spacing={4}
      >
        <BasicTextField
          value={userNameTextField.value}
          onChange={userNameTextField.onChange}
          id={'username-text-field'}
          label={'User Name'}
          type={'text'}
          error={userNameError}
          errorMessage={userNameError ? '5~30文字 記号は不可' : ''}
          autoComplete={'text'}
          autoFocus={true}
        />
        <BasicTextField
          value={emailTextField.value}
          onChange={emailTextField.onChange}
          id={'email-text-field'}
          label={'Email'}
          type={'email'}
          error={emailError}
          errorMessage={emailError ? '無効なメールアドレスの形式' : ''}
          autoComplete={'email'}
          autoFocus={false}
        />
        <PasswordTextField
          password={passwordTextField.value}
          onChange={passwordTextField.onChange}
          id={'password-text-field'}
          label={'Password'}
          error={passwordError}
          errorMessage={
            passwordError ? '大小英数記号をそれぞれ1文字以上含む8~48文字' : ''
          }
          autoComplete={'password'}
          autoFocus={false}
        />
        <BasicButton
          onClick={() => {
            // do nothing
          }}
          id={'sign-up-button'}
          name={'sign-up-button'}
          label={'Sign Up'}
          type={'submit'}
        />
        <Typography sx={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Link href="/sign-in" variant="body2">
            Sign in
          </Link>
        </Typography>
      </Stack>
    </AuthContainer>
  );
}

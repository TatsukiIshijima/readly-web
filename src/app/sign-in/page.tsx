'use client';

import BasicTextField from '@/components/BasicTextField';
import { Box, Stack, Typography, Link } from '@mui/material';
import PasswordTextField from '@/components/PasswordTextField';
import BasicButton from '@/components/BasicButton';
import React from 'react';
import { SIGN_IN_ATTRIBUTES } from '@/attributes/signInAttributes';
import { COMMON_ATTRIBUTES } from '@/attributes/commonAttributes';
import AuthContainer from '@/components/AuthContainer';

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = validateInputs(email, password);
    if (!isValid) {
      e.preventDefault();
      return;
    }
    const formData = new FormData(e.currentTarget);
    console.log({
      email: formData.get(COMMON_ATTRIBUTES.EMAIL_TEXT_FIELD_NAME),
      password: formData.get(COMMON_ATTRIBUTES.PASSWORD_TEXT_FIELD_NAME),
    });
  };

  // TODO:ロジック側に移動
  const validateInputs = (email: string, password: string) => {
    let isValid = true;

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
          value={email}
          onChange={(v) => {
            handleChangeEmail(v);
          }}
          id={COMMON_ATTRIBUTES.EMAIL_TEXT_FIELD_NAME}
          label={COMMON_ATTRIBUTES.EMAIL_TEXT_FIELD_LABEL}
          type={'email'}
          name={COMMON_ATTRIBUTES.EMAIL_TEXT_FIELD_NAME}
          error={emailError}
          errorMessage={
            emailError ? COMMON_ATTRIBUTES.EMAIL_VALIDATE_ERROR_MESSAGE : ''
          }
          autoComplete={'email'}
          autoFocus={true}
        />
        <PasswordTextField
          password={password}
          onChange={(v) => {
            handleChangePassword(v);
          }}
          id={COMMON_ATTRIBUTES.PASSWORD_TEXT_FIELD_NAME}
          name={COMMON_ATTRIBUTES.PASSWORD_TEXT_FIELD_NAME}
          label={COMMON_ATTRIBUTES.PASSWORD_TEXT_FIELD_LABEL}
          error={passwordError}
          errorMessage={
            passwordError
              ? COMMON_ATTRIBUTES.PASSWORD_VALIDATE_ERROR_MESSAGE
              : ''
          }
          autoFocus={false}
        />
        <BasicButton
          onClick={() => {
            // do nothing
          }}
          id={SIGN_IN_ATTRIBUTES.SIGN_IN_BUTTON_NAME}
          name={SIGN_IN_ATTRIBUTES.SIGN_IN_BUTTON_NAME}
          label={SIGN_IN_ATTRIBUTES.SIGN_IN_BUTTON_LABEL}
          type={'submit'}
        />
        <Typography sx={{ textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <Link href={'/sign-up'} variant={'body2'}>
            Sign Up
          </Link>
        </Typography>
      </Stack>
    </AuthContainer>
  );
}

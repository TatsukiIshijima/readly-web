'use client';

import { Box, Card, Stack, Typography, Link } from '@mui/material';
import React from 'react';
import BasicTextField from '@/components/BasicTextField';
import PasswordTextField from '@/components/PasswordTextField';
import BasicButton from '@/components/BasicButton';
import { COMMON_ATTRIBUTES } from '@/attributes/commonAttributes';
import { SIGN_UP_ATTRIBUTES } from '@/attributes/signUpAttributes';

export default function SignUp() {
  const [userName, setUserName] = React.useState('');
  const [userNameError, setUserNameError] = React.useState(false);
  const [userNameErrorMessage, setUserNameErrorMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const handleChangeUserName = (value: string) => {
    setUserName(value);
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = validateInputs(userName, email, password);
    if (!isValid) {
      e.preventDefault();
      return;
    }

    const formData = new FormData(e.currentTarget);
    console.log({
      userName: formData.get(COMMON_ATTRIBUTES.USERNAME_TEXT_FIELD_NAME),
      email: formData.get(COMMON_ATTRIBUTES.EMAIL_TEXT_FIELD_NAME),
      password: formData.get(COMMON_ATTRIBUTES.PASSWORD_TEXT_FIELD_NAME),
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
      setUserNameErrorMessage(
        COMMON_ATTRIBUTES.USERNAME_VALIDATE_ERROR_MESSAGE
      );
      isValid = false;
    } else {
      setUserNameError(false);
      setUserNameErrorMessage('');
    }

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage(COMMON_ATTRIBUTES.EMAIL_VALIDATE_ERROR_MESSAGE);
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (password === '' || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage(
        COMMON_ATTRIBUTES.PASSWORD_VALIDATE_ERROR_MESSAGE
      );
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100vh'}
      px={2}
    >
      <Card
        variant={'outlined'}
        sx={{ width: '100%', maxWidth: 400, p: { xs: 3, sm: 4 } }}
      >
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
            value={userName}
            onChange={(v) => {
              handleChangeUserName(v);
            }}
            id={COMMON_ATTRIBUTES.USERNAME_TEXT_FIELD_NAME}
            label={COMMON_ATTRIBUTES.USERNAME_TEXT_FIELD_LABEL}
            type={'text'}
            error={userNameError}
            errorMessage={userNameErrorMessage}
            autoComplete={'text'}
            autoFocus={true}
          />
          <BasicTextField
            value={email}
            onChange={(v) => {
              handleChangeEmail(v);
            }}
            id={COMMON_ATTRIBUTES.EMAIL_TEXT_FIELD_NAME}
            label={COMMON_ATTRIBUTES.EMAIL_TEXT_FIELD_LABEL}
            type={'email'}
            error={emailError}
            errorMessage={emailErrorMessage}
            autoComplete={'email'}
            autoFocus={false}
          />
          <PasswordTextField
            password={password}
            onChange={(v) => {
              handleChangePassword(v);
            }}
            id={COMMON_ATTRIBUTES.PASSWORD_TEXT_FIELD_NAME}
            label={COMMON_ATTRIBUTES.PASSWORD_TEXT_FIELD_LABEL}
            error={passwordError}
            errorMessage={passwordErrorMessage}
            autoComplete={'password'}
            autoFocus={false}
          />
          <BasicButton
            onClick={() => {
              // do nothing
            }}
            id={SIGN_UP_ATTRIBUTES.SIGN_UP_BUTTON_NAME}
            name={SIGN_UP_ATTRIBUTES.SIGN_UP_BUTTON_NAME}
            label={SIGN_UP_ATTRIBUTES.SIGN_UP_BUTTON_LABEL}
            type={'submit'}
          />
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link href="/sign-in" variant="body2">
              Sign in
            </Link>
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
}

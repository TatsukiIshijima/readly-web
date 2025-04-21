'use client';

import BasicTextField from '@/components/BasicTextField';
import { Box, Stack, Typography, Link } from '@mui/material';
import PasswordTextField from '@/components/PasswordTextField';
import BasicButton from '@/components/BasicButton';
import AuthContainer from '@/components/AuthContainer';
import React from 'react';
import { useUserRepository } from '@/components/providers/UserRepositoryProvider';
import {
  initialSignInPageState,
  signInPageReducer,
} from '@/libs/reducer/SignInPageReducer';

export default function SignIn() {
  const userRepository = useUserRepository();
  const [state, dispatch] = React.useReducer(
    signInPageReducer,
    initialSignInPageState
  );

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT_EMAIL', value: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT_PASSWORD', value: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = validateInputs(state.email, state.password);
    if (!isValid) {
      e.preventDefault();
      return;
    }
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email-text-field');
    const password = formData.get('password-text-field');
    console.log({
      email: email,
      password: password,
    });
    // 試し
    await userRepository.signIn(
      email?.toString() ?? '',
      password?.toString() ?? ''
    );
  };

  // TODO:ロジック側に移動
  const validateInputs = (email: string, password: string) => {
    let isValid = true;

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      dispatch({
        type: 'VALIDATE_EMAIL',
        error: 'メールアドレスを入力してください',
      });
      isValid = false;
    } else {
      dispatch({
        type: 'VALIDATE_EMAIL',
        error: '',
      });
    }

    if (password === '' || password.length < 6) {
      dispatch({
        type: 'VALIDATE_PASSWORD',
        error: 'パスワードは6文字以上で入力してください',
      });
      isValid = false;
    } else {
      dispatch({
        type: 'VALIDATE_PASSWORD',
        error: '',
      });
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
          value={state.email}
          onChange={handleEmailChange}
          id={'email-text-field'}
          label={'Email'}
          type={'email'}
          name={'email-text-field'}
          error={state.emailValidateErrorMessage !== ''}
          errorMessage={state.emailValidateErrorMessage}
          autoComplete={'email'}
          autoFocus={true}
        />
        <PasswordTextField
          password={state.password}
          onChange={handlePasswordChange}
          id={'password-text-field'}
          name={'password-text-field'}
          label={'Password'}
          error={state.passwordValidateErrorMessage !== ''}
          errorMessage={state.passwordValidateErrorMessage}
          autoFocus={false}
        />
        <BasicButton
          onClick={() => {
            // do nothing
          }}
          id={'sign-in-button'}
          name={'sign-in-button'}
          label={'Sign In'}
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

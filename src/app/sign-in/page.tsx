'use client';

import BasicTextField from '@/components/BasicTextField';
import { Box, Stack, Typography, Link } from '@mui/material';
import PasswordTextField from '@/components/PasswordTextField';
import BasicButton from '@/components/BasicButton';
import AuthContainer from '@/components/AuthContainer';
import React from 'react';
import { useSignInPage } from '@/app/sign-in/hook/useSignInPage';
import { useUserRepository } from '@/components/providers/UserRepositoryProvider';

export default function SignIn() {
  const userRepository = useUserRepository();
  const signInPage = useSignInPage(userRepository);

  return (
    <AuthContainer>
      <Box display={'flex'} justifyContent={'center'} mb={4}>
        <Typography component={'h1'} variant={'h4'}>
          Readly
        </Typography>
      </Box>
      <Stack
        component={'form'}
        onSubmit={signInPage.onSubmit}
        method={'POST'}
        spacing={4}
      >
        <BasicTextField
          value={signInPage.state.email}
          onChange={signInPage.onChangeEmail}
          id={'email-text-field'}
          label={'Email'}
          type={'email'}
          name={'email-text-field'}
          error={signInPage.state.emailValidateErrorMessage !== ''}
          errorMessage={signInPage.state.emailValidateErrorMessage}
          autoComplete={'email'}
          autoFocus={true}
        />
        <PasswordTextField
          password={signInPage.state.password}
          onChange={signInPage.onChangePassword}
          id={'password-text-field'}
          name={'password-text-field'}
          label={'Password'}
          error={signInPage.state.passwordValidateErrorMessage !== ''}
          errorMessage={signInPage.state.passwordValidateErrorMessage}
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

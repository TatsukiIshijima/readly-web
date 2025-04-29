'use client';

import {
  Box,
  Stack,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import React from 'react';
import BasicTextField from '@/components/BasicTextField';
import PasswordTextField from '@/components/PasswordTextField';
import BasicButton from '@/components/BasicButton';
import AuthContainer from '@/components/AuthContainer';
import { useSignUpPage } from '@/app/sign-up/hook/useSignUpPage';

export default function SignUp() {
  const signUpPage = useSignUpPage();

  return (
    <AuthContainer>
      <Box display={'flex'} justifyContent={'center'} mb={4}>
        <Typography component={'h1'} variant={'h4'}>
          Readly
        </Typography>
      </Box>
      <Stack
        component={'form'}
        onSubmit={signUpPage.onSubmit}
        method={'POST'}
        spacing={4}
      >
        <BasicTextField
          value={signUpPage.state.userName}
          onChange={signUpPage.onChangeUserName}
          id={'username-text-field'}
          label={'User Name'}
          type={'text'}
          error={signUpPage.state.userNameValidateErrorMessage !== ''}
          errorMessage={signUpPage.state.userNameValidateErrorMessage}
          autoComplete={'text'}
          autoFocus={true}
        />
        <BasicTextField
          value={signUpPage.state.email}
          onChange={signUpPage.onChangeEmail}
          id={'email-text-field'}
          label={'Email'}
          type={'email'}
          error={signUpPage.state.emailValidateErrorMessage !== ''}
          errorMessage={signUpPage.state.emailValidateErrorMessage}
          autoComplete={'email'}
          autoFocus={false}
        />
        <PasswordTextField
          password={signUpPage.state.password}
          onChange={signUpPage.onChangePassword}
          id={'password-text-field'}
          label={'Password'}
          error={signUpPage.state.passwordValidateErrorMessage !== ''}
          errorMessage={signUpPage.state.passwordValidateErrorMessage}
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
      <Dialog open={signUpPage.state.signUpErrorMessage !== ''}>
        <DialogTitle id={'sign-up-dialog-title'}>{'Sign Up Error'}</DialogTitle>
        <DialogContent id={'sign-up-dialog-content'}>
          {signUpPage.state.signUpErrorMessage}
        </DialogContent>
        <DialogActions>
          <BasicButton
            onClick={signUpPage.onCloseDialog}
            id={'sign-up-dialog-close-button'}
            name={'sign-up-dialog-close-button'}
            label={'Close'}
            type={'button'}
          ></BasicButton>
        </DialogActions>
      </Dialog>
    </AuthContainer>
  );
}

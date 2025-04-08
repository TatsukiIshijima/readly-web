import BasicTextField from '@/components/BasicTextField';
import { Stack } from '@mui/material';
import PasswordTextField from '@/components/PasswordTextField';
import BasicButton from '@/components/BasicButton';
import React from 'react';

export default function SignIn() {
  const emailTextFieldName = 'email-text-field';
  const emailTextFieldLabel = 'メールアドレス';
  const passwordTextFieldName = 'password-text-field';
  const passwordTextFieldLabel = 'パスワード';
  const loginButtonName = 'login-button';
  const loginButtonLabel = 'ログイン';

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (emailError || passwordError) {
      e.preventDefault();
      return;
    }
    const formData = new FormData(e.currentTarget);
    console.log({
      email: formData.get(emailTextFieldName),
      password: formData.get(passwordTextFieldName),
    });
  };

  const handleClick = () => {
    console.log('click login');
    validateInputs();
  };

  const validateInputs = () => {
    let isValid = true;

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('メールアドレスを入力してください');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (password === '' || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('パスワードは6文字以上で入力してください');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Stack component={'form'} onSubmit={handleSubmit} spacing={4}>
      <BasicTextField
        value={email}
        onChange={(v) => {
          handleChangeEmail(v);
        }}
        id={emailTextFieldName}
        label={emailTextFieldLabel}
        type={'email'}
        name={emailTextFieldName}
        error={emailError}
        errorMessage={emailErrorMessage}
        autoComplete={'email'}
        autoFocus={true}
      />
      <PasswordTextField
        password={password}
        onChange={(v) => {
          handleChangePassword(v);
        }}
        id={passwordTextFieldName}
        name={passwordTextFieldName}
        label={passwordTextFieldLabel}
        error={passwordError}
        errorMessage={passwordErrorMessage}
        autoFocus={false}
      />
      <BasicButton
        onClick={() => {
          handleClick();
        }}
        id={loginButtonName}
        name={loginButtonName}
        label={loginButtonLabel}
        type={'submit'}
      />
    </Stack>
  );
}

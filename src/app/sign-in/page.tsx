import BasicTextField from '@/components/BasicTextField';
import { Stack } from '@mui/material';
import PasswordTextField from '@/components/PasswordTextField';
import BasicButton from '@/components/BasicButton';
import React from 'react';
import { SIGN_IN_ATTRIBUTES } from '@/attributes/signInAttributes';

export default function SignIn() {
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
    const isValid = validateInputs(email, password);
    if (!isValid) {
      e.preventDefault();
      return;
    }
    const formData = new FormData(e.currentTarget);
    console.log({
      email: formData.get(SIGN_IN_ATTRIBUTES.EMAIL_TEXT_FIELD_NAME),
      password: formData.get(SIGN_IN_ATTRIBUTES.PASSWORD_TEXT_FIELD_NAME),
    });
  };

  // TODO:ロジック側に移動
  const validateInputs = (email: string, password: string) => {
    let isValid = true;

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage(SIGN_IN_ATTRIBUTES.EMAIL_VALIDATE_ERROR_MESSAGE);
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (password === '' || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage(
        SIGN_IN_ATTRIBUTES.PASSWORD_VALIDATE_ERROR_MESSAGE
      );
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
        id={SIGN_IN_ATTRIBUTES.EMAIL_TEXT_FIELD_NAME}
        label={SIGN_IN_ATTRIBUTES.EMAIL_TEXT_FIELD_LABEL}
        type={'email'}
        name={SIGN_IN_ATTRIBUTES.EMAIL_TEXT_FIELD_NAME}
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
        id={SIGN_IN_ATTRIBUTES.PASSWORD_TEXT_FIELD_NAME}
        name={SIGN_IN_ATTRIBUTES.PASSWORD_TEXT_FIELD_NAME}
        label={SIGN_IN_ATTRIBUTES.PASSWORD_TEXT_FIELD_LABEL}
        error={passwordError}
        errorMessage={passwordErrorMessage}
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
    </Stack>
  );
}

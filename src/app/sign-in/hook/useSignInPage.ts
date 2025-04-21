import {
  initialSignInPageState,
  signInPageReducer,
  SignInPageState,
} from '@/app/sign-in/reducer/SignInPageReducer';
import React from 'react';
import { UserRepository } from '@/libs/repository/UserRepository';

export const useSignInPage = (
  userRepository: UserRepository,
  initState: SignInPageState = initialSignInPageState
) => {
  const [state, dispatch] = React.useReducer(signInPageReducer, initState);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'INPUT_EMAIL', value: e.target.value });
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'INPUT_PASSWORD', value: e.target.value });
  }

  // TODO:ロジック側に移動
  function validateInputs(email: string, password: string) {
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
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    try {
      await userRepository.signIn(
        email?.toString() ?? '',
        password?.toString() ?? ''
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(e);
        dispatch({ type: 'FAILURE_SIGN_IN', error: error.message });
        e.preventDefault();
      }
    }
  }

  return {
    state: state,
    onChangeEmail: handleEmailChange,
    onChangePassword: handlePasswordChange,
    onSubmit: handleSubmit,
  };
};

import { signInPageReducer } from '@/app/sign-in/reducer/SignInPageReducer';
import React from 'react';
import { UserRepository } from '@/libs/repository/UserRepository';
import { SignInRequest } from '@/libs/pb/rpc_sign_in_pb';
import {
  initialSignInPageState,
  SignInPageState,
} from '@/app/sign-in/state/SignInPageState';

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
    e.preventDefault();
    const isValid = validateInputs(state.email, state.password);
    if (!isValid) {
      return;
    }
    try {
      const request: SignInRequest = {
        $typeName: 'pb.SignInRequest',
        email: state.email,
        password: state.password,
      };
      const response = await userRepository.signIn(request);
      console.log(response);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        dispatch({ type: 'FAILURE_SIGN_IN', error: error.message });
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

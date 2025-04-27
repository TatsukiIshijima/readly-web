import { signInPageReducer } from '@/app/sign-in/reducer/SignInPageReducer';
import {
  initialSignInPageState,
  SignInPageState,
} from '@/app/sign-in/state/SignInPageState';
import { SignInPageAction } from '@/app/sign-in/action/SignInPageAction';
import React from 'react';
import { useUserRepository } from '@/components/providers/UserRepositoryProvider';

export const useSignInPage = (
  initState: SignInPageState = initialSignInPageState
) => {
  const [state, dispatch] = React.useReducer(signInPageReducer, initState);
  const userRepository = useUserRepository();
  const action = new SignInPageAction(dispatch, userRepository);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputPassword(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await action.signIn(state.email, state.password);
  }

  return {
    state: state,
    onChangeEmail: handleEmailChange,
    onChangePassword: handlePasswordChange,
    onSubmit: handleSubmit,
  };
};

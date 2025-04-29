import {
  initialSignUpPageState,
  SignUpPageState,
} from '@/app/sign-up/state/SignUpPageState';
import React from 'react';
import { signUpPageReducer } from '@/app/sign-up/reducer/SignUpPageReducer';
import { useUserRepository } from '@/components/providers/UserRepositoryProvider';
import { SignUpPageAction } from '@/app/sign-up/action/SignUpPageAction';

export const useSignUpPage = (
  initState: SignUpPageState = initialSignUpPageState
) => {
  const [state, dispatch] = React.useReducer(signUpPageReducer, initState);
  const userRepository = useUserRepository();
  const action = new SignUpPageAction(dispatch, userRepository);

  function handleUserNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputUserName(e.target.value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputPassword(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await action.signUp(state.userName, state.email, state.password);
  }

  function handleCloseDialog() {
    action.closeDialog();
  }

  return {
    state: state,
    onChangeUserName: handleUserNameChange,
    onChangeEmail: handleEmailChange,
    onChangePassword: handlePasswordChange,
    onSubmit: handleSubmit,
    onCloseDialog: handleCloseDialog,
  };
};

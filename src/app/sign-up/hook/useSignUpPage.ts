import {
  initialSignUpPageState,
  SignUpPageState,
} from '@/app/sign-up/state/SignUpPageState';
import React, { useEffect } from 'react';
import { signUpPageReducer } from '@/app/sign-up/reducer/SignUpPageReducer';
import { useUserRepository } from '@/components/providers/UserRepositoryProvider';
import { SignUpPageAction } from '@/app/sign-up/action/SignUpPageAction';
import { useRouter } from 'next/navigation';

export const useSignUpPage = (
  initState: SignUpPageState = initialSignUpPageState
) => {
  const [state, dispatch] = React.useReducer(signUpPageReducer, initState);
  const userRepository = useUserRepository();
  const router = useRouter();
  const action = new SignUpPageAction(dispatch, userRepository);

  useEffect(() => {
    if (state.isSuccessSignUp) {
      router.push('/book/list');
    }
  }, [state.isSuccessSignUp, router]);

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

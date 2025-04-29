import { signInPageReducer } from '@/app/sign-in/reducer/SignInPageReducer';
import {
  initialSignInPageState,
  SignInPageState,
} from '@/app/sign-in/state/SignInPageState';
import { SignInPageAction } from '@/app/sign-in/action/SignInPageAction';
import React, { useEffect } from 'react';
import { useUserRepository } from '@/components/providers/UserRepositoryProvider';
import { useRouter } from 'next/navigation';

export const useSignInPage = (
  initState: SignInPageState = initialSignInPageState
) => {
  const [state, dispatch] = React.useReducer(signInPageReducer, initState);
  const userRepository = useUserRepository();
  const router = useRouter();
  const action = new SignInPageAction(dispatch, userRepository);

  useEffect(() => {
    if (state.isSuccessSignIn) {
      router.push('/book/list');
    }
  }, [state.isSuccessSignIn, router]);

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

  function handleCloseDialog() {
    action.closeDialog();
  }

  return {
    state: state,
    onChangeEmail: handleEmailChange,
    onChangePassword: handlePasswordChange,
    onSubmit: handleSubmit,
    onCloseDialog: handleCloseDialog,
  };
};

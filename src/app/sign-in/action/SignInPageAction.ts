import { SignInRequest } from '@/libs/pb/rpc_sign_in_pb';
import { UserRepository } from '@/libs/repository/UserRepository';
import React from 'react';

export type SignInPageActionType =
  | { key: 'INPUT_EMAIL'; value: string }
  | { key: 'INPUT_PASSWORD'; value: string }
  | { key: 'VALIDATE_EMAIL'; error: string }
  | { key: 'VALIDATE_PASSWORD'; error: string }
  | { key: 'REQUEST_SIGN_IN' }
  | { key: 'SUCCESS_SIGN_IN' }
  | { key: 'FAILURE_SIGN_IN'; error: string };

export class SignInPageAction {
  private readonly dispatch: React.ActionDispatch<[SignInPageActionType]>;
  private readonly userRepository: UserRepository;

  constructor(
    dispatch: React.ActionDispatch<[SignInPageActionType]>,
    userRepository: UserRepository
  ) {
    this.dispatch = dispatch;
    this.userRepository = userRepository;
  }

  inputEmail(value: string) {
    this.dispatch({ key: 'INPUT_EMAIL', value });
  }

  inputPassword(value: string) {
    this.dispatch({ key: 'INPUT_PASSWORD', value });
  }

  private validateInputs(email: string, password: string) {
    let isValid = true;

    // TODO:バリデーションは共通処理へ移動
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      this.dispatch({
        key: 'VALIDATE_EMAIL',
        error: 'メールアドレスを入力してください',
      });
      isValid = false;
    } else {
      this.dispatch({
        key: 'VALIDATE_EMAIL',
        error: '',
      });
    }

    // TODO:バリデーションは共通処理へ移動
    if (password === '' || password.length < 6) {
      this.dispatch({
        key: 'VALIDATE_PASSWORD',
        error: 'パスワードは6文字以上で入力してください',
      });
      isValid = false;
    } else {
      this.dispatch({
        key: 'VALIDATE_PASSWORD',
        error: '',
      });
    }

    return isValid;
  }

  async signIn(email: string, password: string) {
    const isValid = this.validateInputs(email, password);
    if (!isValid) {
      return;
    }
    this.dispatch({ key: 'REQUEST_SIGN_IN' });
    try {
      const request: SignInRequest = {
        $typeName: 'pb.SignInRequest',
        email,
        password,
      };
      const response = await this.userRepository.signIn(request);
      console.log(response);
      this.dispatch({ key: 'SUCCESS_SIGN_IN' });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        this.dispatch({ key: 'FAILURE_SIGN_IN', error: error.message });
      }
    }
  }
}

import { SignInRequest } from '@/libs/pb/rpc_sign_in_pb';
import { UserRepository } from '@/libs/repository/UserRepository';
import React from 'react';
import { validateEmail, validatePassword } from '@/libs/util/Validate';

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

    if (validateEmail(email)) {
      this.dispatch({
        key: 'VALIDATE_EMAIL',
        error: '',
      });
    } else {
      this.dispatch({
        key: 'VALIDATE_EMAIL',
        error: '無効なメールアドレスの形式',
      });
      isValid = false;
    }

    if (validatePassword(password)) {
      this.dispatch({
        key: 'VALIDATE_PASSWORD',
        error: '',
      });
    } else {
      this.dispatch({
        key: 'VALIDATE_PASSWORD',
        error: '大小英数記号をそれぞれ1文字以上含む8~48文字',
      });
      isValid = false;
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

import { UserRepository } from '@/libs/repository/UserRepository';
import React from 'react';
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from '@/libs/util/Validate';
import { SignUpRequest } from '@/libs/pb/readly/v1/rpc_sign_up_pb';

export type SignUpPageActionType =
  | { key: 'INPUT_USER_NAME'; value: string }
  | { key: 'INPUT_EMAIL'; value: string }
  | { key: 'INPUT_PASSWORD'; value: string }
  | { key: 'VALIDATE_USER_NAME'; error: string }
  | { key: 'VALIDATE_EMAIL'; error: string }
  | { key: 'VALIDATE_PASSWORD'; error: string }
  | { key: 'REQUEST_SIGN_UP' }
  | { key: 'SUCCESS_SIGN_UP' }
  | { key: 'FAILURE_SIGN_UP'; error: string }
  | { key: 'CLOSE_DIALOG' };

export class SignUpPageAction {
  private readonly dispatch: React.ActionDispatch<[SignUpPageActionType]>;
  private readonly userRepository: UserRepository;

  constructor(
    dispatch: React.ActionDispatch<[SignUpPageActionType]>,
    userRepository: UserRepository
  ) {
    this.dispatch = dispatch;
    this.userRepository = userRepository;
  }

  inputUserName(value: string) {
    this.dispatch({ key: 'INPUT_USER_NAME', value });
  }

  inputEmail(value: string) {
    this.dispatch({ key: 'INPUT_EMAIL', value });
  }

  inputPassword(value: string) {
    this.dispatch({ key: 'INPUT_PASSWORD', value });
  }

  private validateInputs(userName: string, email: string, password: string) {
    let isValid = true;

    if (validateUserName(userName)) {
      this.dispatch({
        key: 'VALIDATE_USER_NAME',
        error: '',
      });
    } else {
      this.dispatch({
        key: 'VALIDATE_USER_NAME',
        error: '5~30文字 記号は不可',
      });
      isValid = false;
    }

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

  async signUp(userName: string, email: string, password: string) {
    const isValid = this.validateInputs(userName, email, password);
    if (!isValid) {
      return;
    }
    this.dispatch({ key: 'REQUEST_SIGN_UP' });
    try {
      const request: SignUpRequest = {
        $typeName: 'readly.v1.SignUpRequest',
        name: userName,
        email: email,
        password: password,
      };
      const response = await this.userRepository.signUp(request);
      console.log(response);
      this.dispatch({ key: 'SUCCESS_SIGN_UP' });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        this.dispatch({
          key: 'FAILURE_SIGN_UP',
          error: error.message,
        });
      }
    }
  }

  closeDialog() {
    this.dispatch({ key: 'CLOSE_DIALOG' });
  }
}

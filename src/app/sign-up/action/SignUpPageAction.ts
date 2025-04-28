import { UserRepository } from '@/libs/repository/UserRepository';
import React from 'react';
import { validatePassword, validateUserName } from '@/libs/util/Validate';

export type SignUpPageActionType =
  | { key: 'INPUT_USER_NAME'; value: string }
  | { key: 'INPUT_EMAIL'; value: string }
  | { key: 'INPUT_PASSWORD'; value: string }
  | { key: 'VALIDATE_USER_NAME'; error: string }
  | { key: 'VALIDATE_EMAIL'; error: string }
  | { key: 'VALIDATE_PASSWORD'; error: string }
  | { key: 'REQUEST_SIGN_UP' }
  | { key: 'SUCCESS_SIGN_UP' }
  | { key: 'FAILURE_SIGN_UP'; error: string };

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

    if (validateUserName(email)) {
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
}

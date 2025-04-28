import { UserRepository } from '@/libs/repository/UserRepository';
import React from 'react';

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
}

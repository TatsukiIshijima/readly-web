export type SignUpPageState = {
  userName: string;
  email: string;
  password: string;
  userNameValidateErrorMessage: string;
  emailValidateErrorMessage: string;
  passwordValidateErrorMessage: string;
  isRequesting: boolean;
  signUpErrorMessage: string;
};

export const initialSignUpPageState: SignUpPageState = {
  userName: '',
  email: '',
  password: '',
  userNameValidateErrorMessage: '',
  emailValidateErrorMessage: '',
  passwordValidateErrorMessage: '',
  isRequesting: false,
  signUpErrorMessage: '',
};

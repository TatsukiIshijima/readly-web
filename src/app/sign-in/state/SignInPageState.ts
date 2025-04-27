export type SignInPageState = {
  email: string;
  password: string;
  emailValidateErrorMessage: string;
  passwordValidateErrorMessage: string;
  isRequesting: boolean;
  signInErrorMessage: string;
};

export const initialSignInPageState: SignInPageState = {
  email: '',
  password: '',
  emailValidateErrorMessage: '',
  passwordValidateErrorMessage: '',
  isRequesting: false,
  signInErrorMessage: '',
};

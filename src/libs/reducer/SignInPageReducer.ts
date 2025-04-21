export type SignInPageAction =
  | { type: 'INPUT_EMAIL'; value: string }
  | { type: 'INPUT_PASSWORD'; value: string }
  | { type: 'VALIDATE_EMAIL'; error: string }
  | { type: 'VALIDATE_PASSWORD'; error: string }
  | { type: 'REQUEST_SIGN_IN' }
  | { type: 'SUCCESS_SIGN_IN' }
  | { type: 'FAILURE_SIGN_IN'; error: string };

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

export function signInPageReducer(
  state: SignInPageState,
  action: SignInPageAction
): SignInPageState {
  switch (action.type) {
    case 'INPUT_EMAIL':
      return { ...state, email: action.value };
    case 'INPUT_PASSWORD':
      return { ...state, password: action.value };
    case 'VALIDATE_EMAIL':
      return { ...state, emailValidateErrorMessage: action.error };
    case 'VALIDATE_PASSWORD':
      return { ...state, passwordValidateErrorMessage: action.error };
    case 'REQUEST_SIGN_IN':
      return {
        ...state,
        isRequesting: true,
        signInErrorMessage: '',
      };
    case 'SUCCESS_SIGN_IN':
      return {
        ...state,
        isRequesting: false,
        signInErrorMessage: '',
      };
    case 'FAILURE_SIGN_IN':
      return {
        ...state,
        isRequesting: false,
        signInErrorMessage: action.error,
      };
    default:
      throw Error('Unknown action: ' + action);
  }
}

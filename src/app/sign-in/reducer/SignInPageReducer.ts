import { SignInPageAction } from '@/app/sign-in/action/SignInPageAction';
import { SignInPageState } from '@/app/sign-in/state/SignInPageState';

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

import { SignInPageActionType } from '@/app/sign-in/action/SignInPageAction';
import { SignInPageState } from '@/app/sign-in/state/SignInPageState';

export function signInPageReducer(
  state: SignInPageState,
  action: SignInPageActionType
): SignInPageState {
  switch (action.key) {
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
        isSuccessSignIn: true,
      };
    case 'FAILURE_SIGN_IN':
      return {
        ...state,
        isRequesting: false,
        signInErrorMessage: action.error,
        isSuccessSignIn: false,
      };
    case 'CLOSE_DIALOG':
      return {
        ...state,
        signInErrorMessage: '',
      };
    default:
      throw Error('Unknown action: ' + action);
  }
}

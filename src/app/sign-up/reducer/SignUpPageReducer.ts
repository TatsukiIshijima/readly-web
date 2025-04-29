import { SignUpPageState } from '@/app/sign-up/state/SignUpPageState';
import { SignUpPageActionType } from '@/app/sign-up/action/SignUpPageAction';

export function signUpPageReducer(
  state: SignUpPageState,
  action: SignUpPageActionType
): SignUpPageState {
  switch (action.key) {
    case 'INPUT_USER_NAME':
      return { ...state, userName: action.value };
    case 'INPUT_EMAIL':
      return { ...state, email: action.value };
    case 'INPUT_PASSWORD':
      return { ...state, password: action.value };
    case 'VALIDATE_USER_NAME':
      return { ...state, userNameValidateErrorMessage: action.error };
    case 'VALIDATE_EMAIL':
      return { ...state, emailValidateErrorMessage: action.error };
    case 'VALIDATE_PASSWORD':
      return { ...state, passwordValidateErrorMessage: action.error };
    case 'REQUEST_SIGN_UP':
      return {
        ...state,
        isRequesting: true,
        signUpErrorMessage: '',
      };
    case 'SUCCESS_SIGN_UP':
      return {
        ...state,
        isRequesting: false,
        signUpErrorMessage: '',
        isSuccessSignUp: true,
      };
    case 'FAILURE_SIGN_UP':
      return {
        ...state,
        isRequesting: false,
        signUpErrorMessage: action.error,
        isSuccessSignUp: false,
      };
    case 'CLOSE_DIALOG':
      return {
        ...state,
        signUpErrorMessage: '',
      };
    default:
      throw Error('Unknown action: ' + action);
  }
}

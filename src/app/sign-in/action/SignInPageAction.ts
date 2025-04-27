export type SignInPageAction =
  | { type: 'INPUT_EMAIL'; value: string }
  | { type: 'INPUT_PASSWORD'; value: string }
  | { type: 'VALIDATE_EMAIL'; error: string }
  | { type: 'VALIDATE_PASSWORD'; error: string }
  | { type: 'REQUEST_SIGN_IN' }
  | { type: 'SUCCESS_SIGN_IN' }
  | { type: 'FAILURE_SIGN_IN'; error: string };

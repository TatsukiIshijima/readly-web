import { useSignInPage } from '@/app/sign-in/hook/useSignInPage';
import { act, renderHook } from '@testing-library/react';
import { initialSignInPageState } from '@/app/sign-in/state/SignInPageState';
import React from 'react';
import { AuthApiClientProvider } from '@/components/providers/AuthApiClientProvider';
import { UserRepositoryProvider } from '@/components/providers/UserRepositoryProvider';
import { AuthTokenAccessorProvider } from '@/components/providers/AuthTokenAccessorProvider';
import { ApiClientProvider } from '@/components/providers/ApiClientProvider';

describe('useSignInPage', () => {
  beforeEach(() => {});

  // FIXME:AuthApiClientProviderにoptionで値を渡してFakeAuthApiClientの振る舞いを変えたい
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthTokenAccessorProvider>
      <ApiClientProvider>
        <AuthApiClientProvider>
          <UserRepositoryProvider>{children}</UserRepositoryProvider>
        </AuthApiClientProvider>
      </ApiClientProvider>
    </AuthTokenAccessorProvider>
  );

  test('should initialize with the initial state', () => {
    const state = renderHook(() => useSignInPage(), { wrapper });
    expect(state.result.current.state).toEqual(initialSignInPageState);
  });

  test('should update email state on input change', () => {
    const state = renderHook(() => useSignInPage(), { wrapper });
    act(() => {
      state.result.current.onChangeEmail({
        target: { value: 'test@example.com' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(state.result.current.state.email).toBe('test@example.com');
  });

  test('should update password state on input change', () => {
    const state = renderHook(() => useSignInPage(), { wrapper });
    act(() => {
      state.result.current.onChangePassword({
        target: { value: '1234abcd' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(state.result.current.state.password).toBe('1234abcd');
  });

  test('should handle sign-in', async () => {
    const state = renderHook(() => useSignInPage(), { wrapper });
    act(() => {
      state.result.current.onChangeEmail({
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
      state.result.current.onChangePassword({
        target: { value: '12345' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await state.result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(state.result.current.state.emailValidateErrorMessage).toBe(
      'メールアドレスを入力してください'
    );
    expect(state.result.current.state.passwordValidateErrorMessage).toBe(
      'パスワードは6文字以上で入力してください'
    );
    act(() => {
      state.result.current.onChangeEmail({
        target: { value: 'test@example.com' },
      } as React.ChangeEvent<HTMLInputElement>);
      state.result.current.onChangePassword({
        target: { value: '123456' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await state.result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(state.result.current.state.email).toBe('test@example.com');
    expect(state.result.current.state.password).toBe('123456');
    expect(state.result.current.state.isRequesting).toBe(false);
    expect(state.result.current.state.signInErrorMessage).toBe('');
  });
});

import React from 'react';
import { AuthTokenAccessorProvider } from '@/components/providers/AuthTokenAccessorProvider';
import { ApiClientProvider } from '@/components/providers/ApiClientProvider';
import { AuthApiClientProvider } from '@/components/providers/AuthApiClientProvider';
import { UserRepositoryProvider } from '@/components/providers/UserRepositoryProvider';
import { act, renderHook } from '@testing-library/react';
import { useSignUpPage } from '@/app/sign-up/hook/useSignUpPage';
import { initialSignUpPageState } from '@/app/sign-up/state/SignUpPageState';

describe('useSignUpPage', () => {
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
    const { result } = renderHook(() => useSignUpPage(), { wrapper });
    expect(result.current.state).toEqual(initialSignUpPageState);
  });

  test('should validate userName when submit invalid userName', async () => {
    const { result } = renderHook(() => useSignUpPage(), { wrapper });
    act(() => {
      result.current.onChangeUserName({
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(result.current.state.userName).toBe('test');
    expect(result.current.state.userNameValidateErrorMessage).toBe(
      '5~30文字 記号は不可'
    );
  });

  test('should validate email when submit invalid email', async () => {
    const { result } = renderHook(() => useSignUpPage(), { wrapper });
    act(() => {
      result.current.onChangeEmail({
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(result.current.state.email).toBe('test');
    expect(result.current.state.emailValidateErrorMessage).toBe(
      '無効なメールアドレスの形式'
    );
  });

  test('should validate password when submit invalid password', async () => {
    const { result } = renderHook(() => useSignUpPage(), { wrapper });
    act(() => {
      result.current.onChangePassword({
        target: { value: '1234abcd' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(result.current.state.password).toBe('1234abcd');
    expect(result.current.state.passwordValidateErrorMessage).toBe(
      '大小英数記号をそれぞれ1文字以上含む8~48文字'
    );
  });

  test('should sign-up success when valid userName, email and password', async () => {
    const { result } = renderHook(() => useSignUpPage(), { wrapper });
    act(() => {
      result.current.onChangeUserName({
        target: { value: 'testUser' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.onChangeEmail({
        target: { value: 'test@example.com' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.onChangePassword({
        target: { value: '1234abcD^' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(result.current.state.userName).toBe('testUser');
    expect(result.current.state.email).toBe('test@example.com');
    expect(result.current.state.password).toBe('1234abcD^');
    expect(result.current.state.isRequesting).toBe(false);
    expect(result.current.state.signUpErrorMessage).toBe('');
  });
});

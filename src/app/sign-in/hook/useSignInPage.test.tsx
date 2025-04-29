import { useSignInPage } from '@/app/sign-in/hook/useSignInPage';
import { act, renderHook } from '@testing-library/react';
import { initialSignInPageState } from '@/app/sign-in/state/SignInPageState';
import React from 'react';
import { AuthApiClientProvider } from '@/components/providers/AuthApiClientProvider';
import { UserRepositoryProvider } from '@/components/providers/UserRepositoryProvider';
import { AuthTokenAccessorProvider } from '@/components/providers/AuthTokenAccessorProvider';
import { ApiClientProvider } from '@/components/providers/ApiClientProvider';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('useSignInPage', () => {
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

  const mockPush = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
  });

  beforeEach(() => {});

  test('should initialize with the initial state', () => {
    const { result } = renderHook(() => useSignInPage(), { wrapper });
    expect(result.current.state).toEqual(initialSignInPageState);
  });

  test('should validate email when submit invalid email', async () => {
    const state = renderHook(() => useSignInPage(), { wrapper });
    act(() => {
      state.result.current.onChangeEmail({
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await state.result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(state.result.current.state.email).toBe('test');
    expect(state.result.current.state.emailValidateErrorMessage).toBe(
      '無効なメールアドレスの形式'
    );
  });

  test('should validate password when submit invalid password', async () => {
    const state = renderHook(() => useSignInPage(), { wrapper });
    act(() => {
      state.result.current.onChangePassword({
        target: { value: '1234abcd' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await state.result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(state.result.current.state.password).toBe('1234abcd');
    expect(state.result.current.state.passwordValidateErrorMessage).toBe(
      '大小英数記号をそれぞれ1文字以上含む8~48文字'
    );
  });

  test('should sign-in success when valid email and password', async () => {
    const state = renderHook(() => useSignInPage(), { wrapper });
    act(() => {
      state.result.current.onChangeEmail({
        target: { value: 'test@example.com' },
      } as React.ChangeEvent<HTMLInputElement>);
      state.result.current.onChangePassword({
        target: { value: '1234abcD^' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await state.result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(state.result.current.state.email).toBe('test@example.com');
    expect(state.result.current.state.password).toBe('1234abcD^');
    expect(state.result.current.state.isRequesting).toBe(false);
    expect(state.result.current.state.signInErrorMessage).toBe('');
    expect(state.result.current.state.isSuccessSignIn).toBe(true);
    expect(mockPush).toHaveBeenCalledWith('/book/list');
  });
});

import React from 'react';
import { SelectChangeEvent } from '@mui/material';
import { ApiClientProvider } from '@/components/providers/ApiClientProvider';
import { AuthApiClientProvider } from '@/components/providers/AuthApiClientProvider';
import { BookApiClientProvider } from '@/components/providers/BookApiClientProvider';
import { UserRepositoryProvider } from '@/components/providers/UserRepositoryProvider';
import { BookRepositoryProvider } from '@/components/providers/BookRepositoryProvider';
import { AuthTokenAccessorProvider } from '@/components/providers/AuthTokenAccessorProvider';
import { act, renderHook } from '@testing-library/react';
import { useBookRegisterPage } from '@/app/book/register/hook/useBookRegisterPage';
import { initialBookRegisterPageState } from '@/app/book/register/state/BookRegisterPageState';
import { ReadingStatus } from '@/types/ReadingStatus';

describe('useBookRegisterPage', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthTokenAccessorProvider>
      <ApiClientProvider>
        <AuthApiClientProvider>
          <BookApiClientProvider>
            <UserRepositoryProvider>
              <BookRepositoryProvider>{children}</BookRepositoryProvider>
            </UserRepositoryProvider>
          </BookApiClientProvider>
        </AuthApiClientProvider>
      </ApiClientProvider>
    </AuthTokenAccessorProvider>
  );

  beforeEach(() => {});

  test('should initialize with the initial state', () => {
    const { result } = renderHook(() => useBookRegisterPage(), { wrapper });
    expect(result.current.state).toEqual(initialBookRegisterPageState);
  });

  test('should register success', async () => {
    const state = renderHook(() => useBookRegisterPage(), { wrapper });
    act(() => {
      state.result.current.onChangeTitle({
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
      state.result.current.onChangeGenres({
        target: { value: ['test'] },
      } as SelectChangeEvent<string[]>);
      state.result.current.onChangeReadingStatus({
        target: { value: 'unread' },
      } as SelectChangeEvent<ReadingStatus>);
    });
    await act(async () => {
      await state.result.current.onSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(state.result.current.state.title).toBe('test');
    expect(state.result.current.state.genres).toEqual(['test']);
    expect(state.result.current.state.readingStatus).toBe('unread');
  });
});

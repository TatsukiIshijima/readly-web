'use client';

import { createCtx } from '@/hooks/createCtx';
import { BookApiClient, BookApiClientImpl } from '@/libs/api/BookApiClient';
import { FakeBookApiClientImpl } from '@/libs/api/BookApiClient.fake';
import { useApiClient } from '@/components/providers/ApiClientProvider';
import React from 'react';

export const [useBookApiClient, SetBookApiClientProvider] =
  createCtx<BookApiClient>();

export function BookApiClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiClient = useApiClient();
  const env = process.env;
  const bookApiClient =
    env.NODE_ENV === 'test'
      ? new FakeBookApiClientImpl()
      : new BookApiClientImpl(apiClient);

  return (
    <SetBookApiClientProvider value={bookApiClient}>
      {children}
    </SetBookApiClientProvider>
  );
}

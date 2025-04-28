'use client';

import { createCtx } from '@/hooks/createCtx';
import { AuthApiClient, AuthApiClientImpl } from '@/libs/api/AuthApiClient';
import React from 'react';
import { useApiClient } from '@/components/providers/ApiClientProvider';
import { FakeAuthApiClientImpl } from '@/libs/api/AuthApiClient.fake';

export const [useAuthApiClient, SetAuthApiClientProvider] =
  createCtx<AuthApiClient>();

export function AuthApiClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiClient = useApiClient();
  const env = process.env;
  const authApiClient =
    env.NODE_ENV === 'test'
      ? new FakeAuthApiClientImpl()
      : new AuthApiClientImpl(apiClient);

  return (
    <SetAuthApiClientProvider value={authApiClient}>
      {children}
    </SetAuthApiClientProvider>
  );
}

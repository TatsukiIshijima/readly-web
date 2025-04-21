'use client';

import { createCtx } from '@/hooks/createCtx';
import { ApiClient } from '@/libs/api/ApiClient';
import React from 'react';
import { useAuthTokenAccessor } from '@/components/providers/AuthTokenAccessorProvider';

export const [useApiClient, SetApiClientProvider] = createCtx<ApiClient>();

export function ApiClientProvider({ children }: { children: React.ReactNode }) {
  const authTokenAccessor = useAuthTokenAccessor();
  // TODO: BaseURL変更
  const apiClient = new ApiClient('https://api.example.com', authTokenAccessor);
  return (
    <SetApiClientProvider value={apiClient}>{children}</SetApiClientProvider>
  );
}

'use client';

import React from 'react';
import { createCtx } from '@/hooks/createCtx';
import { AppContainer } from '@/libs/AppContainer';
import { LocalStorageAuthTokenAccessor } from '@/libs/storage/LocalStorageAuthTokenAccessor';
import { ApiClient } from '@/libs/api/ApiClient';

export const [useAppContainer, SetAppContainerProvider] =
  createCtx<AppContainer>();

export default function AppContainerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const authTokenAccessor = new LocalStorageAuthTokenAccessor();
  const apiClient = new ApiClient('https://api.example.com', authTokenAccessor);
  const appContainer = new AppContainer(apiClient);
  return (
    <SetAppContainerProvider value={appContainer}>
      {children}
    </SetAppContainerProvider>
  );
}

'use client';

import { createCtx } from '@/hooks/createCtx';
import { AuthTokenAccessor } from '@/libs/storage/AuthTokenAccessor';
import { LocalStorageAuthTokenAccessor } from '@/libs/storage/LocalStorageAuthTokenAccessor';
import React from 'react';

export const [useAuthTokenAccessor, SetAuthTokenAccessorProvider] =
  createCtx<AuthTokenAccessor>();

export function AuthTokenAccessorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const authTokenAccessor = new LocalStorageAuthTokenAccessor();
  return (
    <SetAuthTokenAccessorProvider value={authTokenAccessor}>
      {children}
    </SetAuthTokenAccessorProvider>
  );
}

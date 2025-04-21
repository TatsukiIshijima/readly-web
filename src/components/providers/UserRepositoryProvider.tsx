'use client';

import { createCtx } from '@/hooks/createCtx';
import {
  UserRepository,
  UserRepositoryImpl,
} from '@/libs/repository/UserRepository';
import React from 'react';
import { useAuthApiClient } from '@/components/providers/AuthApiClientProvider';

export const [useUserRepository, SetUserRepositoryProvider] =
  createCtx<UserRepository>();

export function UserRepositoryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const authApiClient = useAuthApiClient();
  const userRepository = new UserRepositoryImpl(authApiClient);
  return (
    <SetUserRepositoryProvider value={userRepository}>
      {children}
    </SetUserRepositoryProvider>
  );
}

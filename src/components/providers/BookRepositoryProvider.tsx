'use client';

import { createCtx } from '@/hooks/createCtx';
import {
  BookRepository,
  BookRepositoryImpl,
} from '@/libs/repository/BookRepository';
import { useBookApiClient } from '@/components/providers/BookApiClientProvider';
import React from 'react';

export const [useBookRepository, SetBookRepositoryProvider] =
  createCtx<BookRepository>();

export function BookRepositoryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const bookApiClient = useBookApiClient();
  const bookRepository = new BookRepositoryImpl(bookApiClient);
  return (
    <SetBookRepositoryProvider value={bookRepository}>
      {children}
    </SetBookRepositoryProvider>
  );
}

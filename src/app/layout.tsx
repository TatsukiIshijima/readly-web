import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { AuthApiClientProvider } from '@/components/providers/AuthApiClientProvider';
import { AuthTokenAccessorProvider } from '@/components/providers/AuthTokenAccessorProvider';
import { ApiClientProvider } from '@/components/providers/ApiClientProvider';
import { UserRepositoryProvider } from '@/components/providers/UserRepositoryProvider';
import { BookApiClientProvider } from '@/components/providers/BookApiClientProvider';
import { BookRepositoryProvider } from '@/components/providers/BookRepositoryProvider';

export function Root({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}

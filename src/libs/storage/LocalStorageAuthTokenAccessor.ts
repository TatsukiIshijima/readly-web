import { AuthTokenAccessor } from '@/libs/storage/AuthTokenAccessor';

export class LocalStorageAuthTokenAccessor implements AuthTokenAccessor {
  private static readonly AUTH_TOKEN_KEY = 'authToken';

  getAuthToken(): string | null {
    return localStorage.getItem(LocalStorageAuthTokenAccessor.AUTH_TOKEN_KEY);
  }

  setAuthToken(token: string): void {
    localStorage.setItem(LocalStorageAuthTokenAccessor.AUTH_TOKEN_KEY, token);
  }

  clearAuthToken(): void {
    localStorage.removeItem(LocalStorageAuthTokenAccessor.AUTH_TOKEN_KEY);
  }
}

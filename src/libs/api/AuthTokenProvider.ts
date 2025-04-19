interface AuthTokenProvider {
  getAuthToken(): string | null;

  setAuthToken(token: string): void;

  clearAuthToken(): void;
}

class LocalStorageAuthTokenProvider implements AuthTokenProvider {
  private static readonly AUTH_TOKEN_KEY = 'authToken';

  getAuthToken(): string | null {
    return localStorage.getItem(LocalStorageAuthTokenProvider.AUTH_TOKEN_KEY);
  }

  setAuthToken(token: string): void {
    localStorage.setItem(LocalStorageAuthTokenProvider.AUTH_TOKEN_KEY, token);
  }

  clearAuthToken(): void {
    localStorage.removeItem(LocalStorageAuthTokenProvider.AUTH_TOKEN_KEY);
  }
}

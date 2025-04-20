export interface AuthTokenAccessor {
  getAuthToken(): string | null;

  setAuthToken(token: string): void;

  clearAuthToken(): void;
}

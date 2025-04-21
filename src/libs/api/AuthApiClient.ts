import { ApiClient } from '@/libs/api/ApiClient';

export interface AuthApiClient {
  signUp(username: string, email: string, password: string): Promise<void>;

  signIn(username: string, password: string): Promise<void>;
}

export class AuthApiClientImpl implements AuthApiClient {
  private readonly apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async signUp(
    username: string,
    email: string,
    password: string
  ): Promise<void> {
    const body = JSON.stringify({ username, password });
    await this.apiClient.post('/sign-up', body);
  }

  async signIn(username: string, password: string): Promise<void> {
    const body = JSON.stringify({ username, password });
    await this.apiClient.post('/sign-in', body);
  }
}

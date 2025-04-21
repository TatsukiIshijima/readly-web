import { AuthApiClient } from '@/libs/api/AuthApiClient';

export interface UserRepository {
  signUp(username: string, email: string, password: string): Promise<void>;

  signIn(username: string, password: string): Promise<void>;
}

export class UserRepositoryImpl implements UserRepository {
  private readonly authApiClient: AuthApiClient;

  constructor(authApiClient: AuthApiClient) {
    this.authApiClient = authApiClient;
  }

  async signUp(
    username: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.authApiClient.signUp(username, email, password);
  }

  async signIn(username: string, password: string): Promise<void> {
    await this.authApiClient.signIn(username, password);
  }
}

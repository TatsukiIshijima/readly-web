import { ApiClient } from '@/libs/api/ApiClient';
import { SignInRequest, SignInResponse } from '@/libs/pb/rpc_sign_in_pb';
import { SignUpRequest, SignUpResponse } from '@/libs/pb/rpc_sign_up_pb';

export interface AuthApiClient {
  signUp(request: SignUpRequest): Promise<SignUpResponse>;

  signIn(request: SignInRequest): Promise<SignInResponse>;
}

export class AuthApiClientImpl implements AuthApiClient {
  private readonly apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    const body = JSON.stringify(request);
    return await this.apiClient.post<SignUpResponse, string>(
      '/v1/signup',
      body
    );
  }

  async signIn(request: SignInRequest): Promise<SignInResponse> {
    const body = JSON.stringify(request);
    return await this.apiClient.post<SignInResponse, string>(
      '/v1/signin',
      body
    );
  }
}

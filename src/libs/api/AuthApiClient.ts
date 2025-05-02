import { ApiClient } from '@/libs/api/ApiClient';
import {
  SignInRequest,
  SignInResponse,
} from '@/libs/pb/readly/v1/rpc_sign_in_pb';
import {
  SignUpRequest,
  SignUpResponse,
} from '@/libs/pb/readly/v1/rpc_sign_up_pb';

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
    return await this.apiClient.post<SignUpResponse, SignUpRequest>(
      '/v1/signup',
      request
    );
  }

  async signIn(request: SignInRequest): Promise<SignInResponse> {
    return await this.apiClient.post<SignInResponse, SignInRequest>(
      '/v1/signin',
      request
    );
  }
}

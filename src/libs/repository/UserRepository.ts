import { AuthApiClient } from '@/libs/api/AuthApiClient';
import {
  SignUpRequest,
  SignUpResponse,
} from '@/libs/pb/readly/v1/rpc_sign_up_pb';
import {
  SignInRequest,
  SignInResponse,
} from '@/libs/pb/readly/v1/rpc_sign_in_pb';

export interface UserRepository {
  signUp(request: SignUpRequest): Promise<SignUpResponse>;

  signIn(request: SignInRequest): Promise<SignInResponse>;
}

export class UserRepositoryImpl implements UserRepository {
  private readonly authApiClient: AuthApiClient;

  constructor(authApiClient: AuthApiClient) {
    this.authApiClient = authApiClient;
  }

  async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    return await this.authApiClient.signUp(request);
  }

  async signIn(request: SignInRequest): Promise<SignInResponse> {
    return await this.authApiClient.signIn(request);
  }
}

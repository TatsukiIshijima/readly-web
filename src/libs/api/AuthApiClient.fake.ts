import { AuthApiClient } from '@/libs/api/AuthApiClient';
import { SignInRequest, SignInResponse } from '@/libs/pb/rpc_sign_in_pb';
import { SignUpRequest, SignUpResponse } from '@/libs/pb/rpc_sign_up_pb';

export class FakeAuthApiClientImpl implements AuthApiClient {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signIn(request: SignInRequest): Promise<SignInResponse> {
    const response: SignInResponse = {
      $typeName: 'pb.SignInResponse',
      accessToken: 'fakeAccessToken',
      refreshToken: 'fakeRefreshToken',
      userId: BigInt(1),
      name: 'fakeName',
      email: 'fake@example.com',
    };
    return Promise.resolve(response);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    const response: SignUpResponse = {
      $typeName: 'pb.SignUpResponse',
      accessToken: 'fakeAccessToken',
      refreshToken: 'fakeRefreshToken',
      userId: BigInt(1),
      name: 'fakeName',
      email: 'fake@example.com',
    };
    return Promise.resolve(response);
  }
}

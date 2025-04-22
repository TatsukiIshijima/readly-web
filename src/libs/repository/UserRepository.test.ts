// /**
//  * @jest-environment node
//  */
//
// import { ApiClient } from '@/libs/api/ApiClient';
// import { AuthApiClientImpl } from '@/libs/api/AuthApiClient';
// import { SignInRequest } from '@/libs/pb/rpc_sign_in_pb';
// import { AuthTokenAccessor } from '@/libs/storage/AuthTokenAccessor';
// import { UserRepositoryImpl } from '@/libs/repository/UserRepository';
//
// describe('UserRepository', () => {
//   test('success sign in', async () => {
//     class MockAuthTokenAccessor implements AuthTokenAccessor {
//       getAuthToken(): string | null {
//         return 'mocked_token';
//       }
//
//       setAuthToken(token: string): void {
//         console.log('Mocked setAuthToken called with token:', token);
//       }
//
//       clearAuthToken(): void {
//         console.log('Mocked clearAuthToken called');
//       }
//     }
//
//     try {
//       const authTokenAccessor = new MockAuthTokenAccessor();
//       const apiClient = new ApiClient(
//         'http://localhost:8080',
//         authTokenAccessor
//       );
//       const authApiClient = new AuthApiClientImpl(apiClient);
//       const userRepository = new UserRepositoryImpl(authApiClient);
//       const request: SignInRequest = {
//         $typeName: 'pb.SignInRequest',
//         email: 'sample@example.com',
//         password: '1234abcD^',
//       };
//       const response = await userRepository.signIn(request);
//       console.log(response);
//       expect(response).toBeDefined();
//       // TODO:UserIDの方が文字列なので変更したのちチェック
//       expect(response.email).toBe('sample@example.com');
//       expect(response.accessToken !== '').toBe(true);
//       expect(response.refreshToken !== '').toBe(true);
//     } catch (error) {
//       throw new Error(`Error: ${error}`);
//     }
//   });
// });

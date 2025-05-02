import { ApiClient } from '@/libs/api/ApiClient';
import { RegisterBookRequest } from '@/libs/api/request/RegisterBookRequest';
import { Book } from '@/libs/pb/readly/v1/book_pb';
import { RegisterBookRequest as ProtoRegisterBookRequest } from '@/libs/pb/readly/v1/rpc_register_book_pb';

export interface BookApiClient {
  register(request: RegisterBookRequest): Promise<Book>;
}

export class BookApiClientImpl implements BookApiClient {
  private readonly apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async register(request: RegisterBookRequest): Promise<Book> {
    const protoRequest = request.toProto();
    console.log(protoRequest);
    return await this.apiClient.post<Book, ProtoRegisterBookRequest>(
      '/v1/books',
      protoRequest
    );
  }
}

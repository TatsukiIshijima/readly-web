import { ApiClient } from '@/libs/api/ApiClient';
import { RegisterBookRequest } from '@/libs/pb/rpc_register_book_pb';
import { Book } from '@/libs/pb/book_pb';

export interface BookApiClient {
  register(request: RegisterBookRequest): Promise<Book>;
}

export class BookApiClientImpl implements BookApiClient {
  private readonly apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async register(request: RegisterBookRequest): Promise<Book> {
    return await this.apiClient.post<Book, RegisterBookRequest>(
      '/v1/books',
      request
    );
  }
}

import { RegisterBookRequest } from '@/libs/pb/rpc_register_book_pb';
import { Book } from '@/libs/pb/book_pb';
import { BookApiClient } from '@/libs/api/BookApiClient';

export interface BookRepository {
  register(request: RegisterBookRequest): Promise<Book>;
}

export class BookRepositoryImpl implements BookRepository {
  private readonly bookApiClient: BookApiClient;

  constructor(bookApiClient: BookApiClient) {
    this.bookApiClient = bookApiClient;
  }

  async register(request: RegisterBookRequest): Promise<Book> {
    return await this.bookApiClient.register(request);
  }
}

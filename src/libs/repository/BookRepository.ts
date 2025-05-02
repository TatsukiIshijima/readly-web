import { Book } from '@/libs/pb/readly/v1/book_pb';
import { BookApiClient } from '@/libs/api/BookApiClient';
import { RegisterBookRequest } from '@/libs/api/request/RegisterBookRequest';

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

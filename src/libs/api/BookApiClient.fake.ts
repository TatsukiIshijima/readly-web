import { BookApiClient } from '@/libs/api/BookApiClient';
import { Book } from '@/libs/pb/book_pb';
import { RegisterBookRequest } from '@/libs/pb/rpc_register_book_pb';

export class FakeBookApiClientImpl implements BookApiClient {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async register(request: RegisterBookRequest): Promise<Book> {
    const book: Book = {
      $typeName: 'pb.Book',
      id: BigInt(1),
      title: request.title,
      genres: request.genres,
      readingStatus: request.readingStatus,
    };
    return Promise.resolve(book);
  }
}

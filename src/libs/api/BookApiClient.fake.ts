import { BookApiClient } from '@/libs/api/BookApiClient';
import { Book } from '@/libs/pb/book_pb';
import { RegisterBookRequest } from '@/libs/api/request/RegisterBookRequest';
import { readingStatusDomainToProto } from '@/types/ReadingStatus';

export class FakeBookApiClientImpl implements BookApiClient {
  async register(request: RegisterBookRequest): Promise<Book> {
    const book: Book = {
      $typeName: 'pb.Book',
      id: BigInt(1),
      title: request.title,
      genres: request.genres,
      readingStatus: readingStatusDomainToProto(request.readingStatus),
    };
    return Promise.resolve(book);
  }
}

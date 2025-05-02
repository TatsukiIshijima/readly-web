import {
  ReadingStatus,
  readingStatusDomainToProto,
} from '@/types/ReadingStatus';
import { Dayjs } from 'dayjs';
import { RegisterBookRequest as protoRegisterBookRequest } from '@/libs/pb/readly/v1/rpc_register_book_pb';
import { dayjsToProtoDate } from '@/libs/util/DayjsMapper';

export class RegisterBookRequest {
  title: string;
  genres: string[];
  readingStatus: ReadingStatus;
  publishDate: Dayjs | null;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  coverImageUrl?: string;
  author?: string;
  publisher?: string;
  isbn?: string;
  url?: string;

  constructor(
    title: string,
    genres: string[],
    readingStatus: ReadingStatus,
    publishDate: Dayjs | null,
    startDate: Dayjs | null,
    endDate: Dayjs | null,
    coverImageUrl?: string,
    author?: string,
    publisher?: string,
    isbn?: string,
    url?: string
  ) {
    this.title = title;
    this.genres = genres;
    this.readingStatus = readingStatus;
    this.coverImageUrl = coverImageUrl;
    this.author = author;
    this.publisher = publisher;
    this.isbn = isbn;
    this.publishDate = publishDate;
    this.url = url;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  toProto(): protoRegisterBookRequest {
    const publishDate =
      this.publishDate !== null
        ? dayjsToProtoDate(this.publishDate)
        : undefined;
    const startDate =
      this.startDate !== null ? dayjsToProtoDate(this.startDate) : undefined;
    const endDate =
      this.endDate !== null ? dayjsToProtoDate(this.endDate) : undefined;
    return {
      $typeName: 'readly.v1.RegisterBookRequest',
      title: this.title,
      authorName: this.author,
      publisherName: this.publisher,
      isbn: this.isbn,
      publishDate: publishDate,
      url: this.url,
      genres: this.genres,
      readingStatus: readingStatusDomainToProto(this.readingStatus),
      startDate: startDate,
      endDate: endDate,
    };
  }
}

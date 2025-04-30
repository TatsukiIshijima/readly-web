import { ReadingStatus } from '@/libs/pb/reading_status_pb';
import React from 'react';
import { BookRepository } from '@/libs/repository/BookRepository';
import { RegisterBookRequest as protoRegisterBookRequest } from '@/libs/pb/rpc_register_book_pb';
import { Dayjs } from 'dayjs';
import { dayjsToTimestamp } from '@/libs/util/DayjsToTimestamp';

export type BookRegisterActionType =
  | { key: 'INPUT_TITLE'; value: string }
  | { key: 'INPUT_AUTHOR'; value: string }
  | { key: 'INPUT_PUBLISHER'; value: string }
  | { key: 'INPUT_ISBN'; value: string }
  | { key: 'INPUT_PUBLISH_DATE'; value: Dayjs }
  | { key: 'INPUT_URL'; value: string }
  | { key: 'INPUT_GENRES'; value: string[] }
  | { key: 'INPUT_READING_STATUS'; value: ReadingStatus }
  | { key: 'INPUT_START_DATE'; value: Dayjs }
  | { key: 'INPUT_END_DATE'; value: Dayjs }
  | { key: 'INPUT_FILE'; value: File }
  | { key: 'REQUEST_REGISTER_BOOK' }
  | { key: 'SUCCESS_REGISTER_BOOK' }
  | { key: 'FAILURE_REGISTER_BOOK'; error: string };

export class BookRegisterAction {
  private readonly dispatch: React.ActionDispatch<[BookRegisterActionType]>;
  private readonly bookRepository: BookRepository;

  constructor(
    dispatch: React.ActionDispatch<[BookRegisterActionType]>,
    bookRepository: BookRepository
  ) {
    this.dispatch = dispatch;
    this.bookRepository = bookRepository;
  }

  inputTitle(value: string) {
    this.dispatch({ key: 'INPUT_TITLE', value });
  }

  inputAuthor(value: string) {
    this.dispatch({ key: 'INPUT_AUTHOR', value });
  }

  inputPublisher(value: string) {
    this.dispatch({ key: 'INPUT_PUBLISHER', value });
  }

  inputISBN(value: string) {
    this.dispatch({ key: 'INPUT_ISBN', value });
  }

  inputPublishDate(value: Dayjs) {
    this.dispatch({ key: 'INPUT_PUBLISH_DATE', value });
  }

  inputURL(value: string) {
    this.dispatch({ key: 'INPUT_URL', value });
  }

  inputGenres(value: string[]) {
    this.dispatch({ key: 'INPUT_GENRES', value });
  }

  inputReadingStatus(value: ReadingStatus) {
    this.dispatch({ key: 'INPUT_READING_STATUS', value });
  }

  inputStartDate(value: Dayjs) {
    this.dispatch({ key: 'INPUT_START_DATE', value });
  }

  inputEndDate(value: Dayjs) {
    this.dispatch({ key: 'INPUT_END_DATE', value });
  }

  inputFile(value: File) {
    this.dispatch({ key: 'INPUT_FILE', value });
  }

  async registerBook(request: RegisterBookRequest) {
    this.dispatch({ key: 'REQUEST_REGISTER_BOOK' });
    try {
      const protoRequest: protoRegisterBookRequest = request.toProto();
      await this.bookRepository.register(protoRequest);
      this.dispatch({
        key: 'SUCCESS_REGISTER_BOOK',
      });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        this.dispatch({
          key: 'FAILURE_REGISTER_BOOK',
          error: error.message,
        });
      }
    }
  }
}

export class RegisterBookRequest {
  title: string;
  genres: string[];
  readingStatus: ReadingStatus;
  coverImageUrl?: string;
  author?: string;
  publisher?: string;
  isbn?: string;
  publishDate?: Dayjs;
  url?: string;
  startDate?: Dayjs;
  endDate?: Dayjs;

  constructor(
    title: string,
    genres: string[],
    readingStatus: ReadingStatus,
    coverImageUrl?: string,
    author?: string,
    publisher?: string,
    isbn?: string,
    publishDate?: Dayjs,
    url?: string,
    startDate?: Dayjs,
    endDate?: Dayjs
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
    return {
      $typeName: 'pb.RegisterBookRequest',
      title: this.title,
      authorName: this.author,
      publisherName: this.publisher,
      isbn: this.isbn,
      publishDate: dayjsToTimestamp(this.publishDate),
      url: this.url,
      genres: this.genres,
      readingStatus: this.readingStatus,
      startDate: dayjsToTimestamp(this.startDate),
      endDate: dayjsToTimestamp(this.endDate),
    };
  }
}

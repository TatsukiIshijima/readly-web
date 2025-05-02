import React from 'react';
import { BookRepository } from '@/libs/repository/BookRepository';
import { Dayjs } from 'dayjs';
import { ReadingStatus } from '@/types/ReadingStatus';
import { RegisterBookRequest } from '@/libs/api/request/RegisterBookRequest';

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

export class BookRegisterPageAction {
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

  inputPublishDate(value: Dayjs | null) {
    if (value === null) {
      return;
    }
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

  inputStartDate(value: Dayjs | null) {
    if (value === null) {
      return;
    }
    this.dispatch({ key: 'INPUT_START_DATE', value });
  }

  inputEndDate(value: Dayjs | null) {
    if (value === null) {
      return;
    }
    this.dispatch({ key: 'INPUT_END_DATE', value });
  }

  inputFile(value: File) {
    this.dispatch({ key: 'INPUT_FILE', value });
  }

  async registerBook(request: RegisterBookRequest) {
    this.dispatch({ key: 'REQUEST_REGISTER_BOOK' });
    try {
      await this.bookRepository.register(request);
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

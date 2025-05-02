import {
  BookRegisterPageState,
  initialBookRegisterPageState,
} from '@/app/book/register/state/BookRegisterPageState';
import { bookRegisterPageReducer } from '@/app/book/register/reducer/BookRegisterPageReducer';
import { BookRegisterPageAction } from '@/app/book/register/action/BookRegisterPageAction';
import { useBookRepository } from '@/components/providers/BookRepositoryProvider';
import { RegisterBookRequest } from '@/libs/api/request/RegisterBookRequest';
import { SelectChangeEvent } from '@mui/material';
import { ReadingStatus } from '@/types/ReadingStatus';
import { Dayjs } from 'dayjs';
import React from 'react';

export const useBookRegisterPage = (
  initialState: BookRegisterPageState = initialBookRegisterPageState
) => {
  const [state, dispatch] = React.useReducer(
    bookRegisterPageReducer,
    initialState
  );
  const bookRepository = useBookRepository();
  const action = new BookRegisterPageAction(dispatch, bookRepository);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputTitle(e.target.value);
  }

  function handleAuthorChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputAuthor(e.target.value);
  }

  function handlePublisherChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputPublisher(e.target.value);
  }

  function handleISBNChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputISBN(e.target.value);
  }

  function handlePublishDateChange(newValue: Dayjs | null) {
    action.inputPublishDate(newValue);
  }

  function handleURLChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputURL(e.target.value);
  }

  function handleGenresChange(e: SelectChangeEvent<string[]>) {
    action.inputGenres(e.target.value as string[]);
  }

  function handleReadingStatusChange(
    e: SelectChangeEvent<string | ReadingStatus>
  ) {
    action.inputReadingStatus(e.target.value as ReadingStatus);
  }

  function handleStartDateChange(newValue: Dayjs | null) {
    action.inputStartDate(newValue);
  }

  function handleEndDateChange(newValue: Dayjs | null) {
    action.inputEndDate(newValue);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const request = new RegisterBookRequest(
      state.title,
      state.genres,
      state.readingStatus,
      state.publishDate,
      state.startDate,
      state.endDate,
      // TODO:画像アップロード後のURLを設定
      '',
      state.author,
      state.publisher,
      state.isbn,
      state.url
    );
    await action.registerBook(request);
  }

  return {
    state: state,
    onChangeTitle: handleTitleChange,
    onChangeAuthor: handleAuthorChange,
    onChangePublisher: handlePublisherChange,
    onChangeISBN: handleISBNChange,
    onChangePublishDate: handlePublishDateChange,
    onChangeURL: handleURLChange,
    onChangeGenres: handleGenresChange,
    onChangeReadingStatus: handleReadingStatusChange,
    onChangeStartDate: handleStartDateChange,
    onChangeEndDate: handleEndDateChange,
    onSubmit: handleSubmit,
  };
};

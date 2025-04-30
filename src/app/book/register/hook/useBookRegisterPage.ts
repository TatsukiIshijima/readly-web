import {
  BooKRegisterPageState,
  initialBookRegisterPageState,
} from '@/app/book/register/state/BookRegisterPageState';
import { bookRegisterPageReducer } from '@/app/book/register/reducer/BookRegisterPageReducer';
import {
  BookRegisterPageAction,
  RegisterBookRequest,
} from '@/app/book/register/action/BookRegisterPageAction';
import React from 'react';
import { useBookRepository } from '@/components/providers/BookRepositoryProvider';
import { SelectChangeEvent } from '@mui/material';
import { ReadingStatus } from '@/libs/pb/reading_status_pb';
import { Dayjs } from 'dayjs';

export const useBookRegisterPage = (
  initialState: BooKRegisterPageState = initialBookRegisterPageState
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

  function handleGenresChange(e: React.ChangeEvent<HTMLInputElement>) {
    action.inputGenres(e.target.value.split(','));
  }

  function handleReadingStatusChange(e: SelectChangeEvent<ReadingStatus>) {
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
      // TODO:画像アップロード後のURLを設定
      '',
      state.author,
      state.publisher,
      state.isbn,
      state.publishDate,
      state.url,
      state.startDate,
      state.endDate
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

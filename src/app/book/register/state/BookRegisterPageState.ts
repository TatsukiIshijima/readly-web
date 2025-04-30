import { Dayjs } from 'dayjs';
import { ReadingStatus } from '@/types/ReadingStatus';

export type BooKRegisterPageState = {
  title: string;
  genres: string[];
  readingStatus: ReadingStatus;
  isRegistering: boolean;
  registerErrorMessage: string;
  author?: string;
  publisher?: string;
  isbn?: string;
  publishDate?: Dayjs;
  url?: string;
  startDate?: Dayjs;
  endDate?: Dayjs;
  file?: File;
};

export const initialBookRegisterPageState: BooKRegisterPageState = {
  title: '',
  genres: [],
  readingStatus: 'unread',
  isRegistering: false,
  registerErrorMessage: '',
};

import { Dayjs } from 'dayjs';
import { ReadingStatus } from '@/types/ReadingStatus';

export type BookRegisterPageState = {
  title: string;
  genres: string[];
  readingStatus: ReadingStatus;
  isRegistering: boolean;
  registerErrorMessage: string;
  author?: string;
  publisher?: string;
  isbn?: string;
  // DatePickerのvalueがundefinedを許容しないためnullを明示的に追加
  publishDate: Dayjs | null;
  url?: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  file?: File;
};

export const initialBookRegisterPageState: BookRegisterPageState = {
  title: '',
  genres: [],
  readingStatus: 'unread',
  publishDate: null,
  startDate: null,
  endDate: null,
  isRegistering: false,
  registerErrorMessage: '',
};

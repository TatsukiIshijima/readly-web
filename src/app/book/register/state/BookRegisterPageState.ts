import { ReadingStatus } from '@/libs/pb/reading_status_pb';
import { Dayjs } from 'dayjs';

export type BooKRegisterPageState = {
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  publishDate?: Dayjs;
  url: string;
  genres: string[];
  readingStatus: ReadingStatus;
  startDate?: Dayjs;
  endDate?: Dayjs;
  file?: File;
};

export const initialBookRegisterPageState: BooKRegisterPageState = {
  title: '',
  author: '',
  publisher: '',
  isbn: '',
  url: '',
  genres: [],
  readingStatus: ReadingStatus.UNREAD,
};

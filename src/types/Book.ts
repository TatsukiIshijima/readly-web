import { ReadingStatus } from '@/types/ReadingStatus';

export type Book = {
  id: number;
  title: string;
  status: ReadingStatus;
  imgUrl?: string;
  author?: string;
};

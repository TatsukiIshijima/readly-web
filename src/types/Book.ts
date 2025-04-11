type ReadingStatus = 'unread' | 'reading' | 'done';

type Book = {
  id: number;
  title: string;
  status: ReadingStatus;
  imgUrl?: string;
  author?: string;
};

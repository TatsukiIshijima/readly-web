import { Book } from '@/types/Book';

export const dummyGenres = [
  'genre1',
  'genre2',
  'genre3',
  'genre4',
  'genre5',
  'genre6',
  'genre7',
  'genre8',
  'genre9',
  'genre10',
];

export const dummyBooks: Book[] = [
  {
    id: 1,
    title: 'Book1',
    status: 'unread',
    author: 'Author1',
  },
  {
    id: 2,
    title: 'Book2',
    status: 'unread',
    author: 'Author2',
  },
  {
    id: 3,
    title: 'Book3',
    imgUrl: 'https://placehold.jp/150x150.png',
    status: 'unread',
    author: 'Author3',
  },
  {
    id: 4,
    title: 'Book4',
    status: 'reading',
    imgUrl: 'https://placehold.jp/240x160.png',
  },
  {
    id: 5,
    title: 'Book5',
    status: 'done',
  },
];

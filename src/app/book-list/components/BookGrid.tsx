import { Box } from '@mui/material';
import BookItem from '@/app/book-list/components/BookItem';
import React from 'react';
import { Book } from '@/types/Book';

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

interface BookGridProps {
  books: Book[];
  onClick: (id: number) => void;
}

export default function BookGrid({
  books = dummyBooks,
  onClick,
}: BookGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(auto-fit, minmax(180px, 1fr))',
        },
        gap: 2,
        p: 2,
      }}
    >
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          imgUrl={book.imgUrl}
          onClick={(id) => {
            onClick(id);
          }}
        />
      ))}
    </Box>
  );
}

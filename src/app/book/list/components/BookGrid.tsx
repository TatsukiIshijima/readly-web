import { Box } from '@mui/material';
import BookItem from '@/app/book/list/components/BookItem';
import React from 'react';
import { Book } from '@/types/Book';
import { dummyBooks } from '@/libs/testdata/dummy';

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

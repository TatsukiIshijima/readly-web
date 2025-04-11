import { Box } from '@mui/material';
import BookItem from '@/app/book-list/components/BookItem';
import React from 'react';
import { Book } from '@/types/Book';
import { dummyBooks } from '@/app/book-list/components/BookGrid.stories';

interface BookGridProps {
  books: Book[];
}

export default function BookGrid({ books = dummyBooks }: BookGridProps) {
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
          onClick={(id) => console.log(`Clicked: ${id}`)}
        />
      ))}
    </Box>
  );
}

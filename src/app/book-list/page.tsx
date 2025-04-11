import { Box } from '@mui/material';
import BookItem from '@/app/book-list/components/BookItem';

const dummyBooks: Book[] = [
  {
    id: 1,
    title: 'Book1',
    author: 'Author1',
  },
  {
    id: 2,
    title: 'Book2',
    author: 'Author2',
  },
  {
    id: 3,
    title: 'Book3',
    imgUrl: 'https://placehold.jp/150x150.png',
    author: 'Author3',
  },
  {
    id: 4,
    title: 'Book4',
    imgUrl: 'https://placehold.jp/240x160.png',
  },
  {
    id: 5,
    title: 'Book5',
  },
];

function BookGrid() {
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
      {dummyBooks.map((book) => (
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

export default function BookList() {
  return (
    <div>
      <BookGrid />
    </div>
  );
}

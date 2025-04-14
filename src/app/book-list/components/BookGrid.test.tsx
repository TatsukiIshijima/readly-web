import { Book } from '@/types/Book';
import { fireEvent, render, screen } from '@testing-library/react';
import BookGrid from '@/app/book-list/components/BookGrid';

describe('BookGrid', () => {
  const testBookItems: Book[] = [
    {
      id: 1,
      title: 'TestBook',
      status: 'unread',
      author: 'TestAuthor1',
    },
    {
      id: 2,
      title: 'TestBook2',
      status: 'unread',
      author: 'TestAuthor2',
    },
    {
      id: 3,
      title: 'TestBook3',
      imgUrl: 'https://placehold.jp/150x150.png',
      status: 'unread',
      author: 'TestAuthor3',
    },
    {
      id: 4,
      title: 'TestBook4',
      status: 'reading',
      imgUrl: 'https://placehold.jp/240x160.png',
    },
    {
      id: 5,
      title: 'TestBook5',
      status: 'done',
    },
  ];

  const setup = (propsOverrides = {}) => {
    const defaultProps = {
      books: testBookItems,
      onClick: jest.fn(),
    };
    const props = { ...defaultProps, ...propsOverrides };
    render(<BookGrid {...props} />);
  };

  test('renders all books with default props', () => {
    const onClick = jest.fn();
    setup({ onClick: onClick });
    const bookItems = screen.getAllByRole('button');
    expect(bookItems.length).toBe(testBookItems.length);
    testBookItems.forEach((book, index) => {
      const bookItem = bookItems[index];
      expect(bookItem).toHaveTextContent(book.title);
      if (book.author) {
        expect(bookItem).toHaveTextContent(book.author);
      }
      if (book.imgUrl) {
        const images = screen.getAllByAltText('Book Cover');
        expect(images[index]).toHaveAttribute('src', book.imgUrl);
      }
      fireEvent.click(bookItems[index]);
      expect(onClick).toHaveBeenCalledWith(book.id);
    });
  });

  test('renders empty books when no books are provided', () => {
    setup({ books: [] });
    const bookItems = screen.queryAllByRole('button');
    expect(bookItems.length).toBe(0);
  });
});

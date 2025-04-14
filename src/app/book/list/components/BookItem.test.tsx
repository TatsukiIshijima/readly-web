import { fireEvent, render, screen } from '@testing-library/react';
import BookItem from '@/app/book/list/components/BookItem';

describe('BookItem', () => {
  const setup = (propsOverrides = {}) => {
    const defaultProps = {
      id: 1,
      title: 'Title',
      onClick: jest.fn(),
      imgUrl: 'https://sample/sample.jpg',
      author: 'Author',
    };
    const props = { ...defaultProps, ...propsOverrides };
    render(<BookItem {...props} />);
  };

  test('renders correctly with default props', () => {
    setup();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Author')).toBeInTheDocument();
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://sample/sample.jpg');
    expect(img).toHaveAttribute('alt', 'Book Cover');
  });

  test('calls onClick when clicked', () => {
    const onClick = jest.fn();
    setup({ onClick: onClick });
    const card = screen.getByRole('button');
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalledWith(1);
  });
});

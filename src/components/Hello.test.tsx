import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello', () => {
  test('renders Hello world', () => {
    render(<Hello />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});

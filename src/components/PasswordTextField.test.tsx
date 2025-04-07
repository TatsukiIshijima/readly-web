import { render, screen, fireEvent } from '@testing-library/react';
import PasswordTextField from '@/components/PasswordTextField';

describe('PasswordTextField', () => {
  test('type is password when initial state', () => {
    render(<PasswordTextField />);
    const input = screen.getByLabelText('パスワード');
    const iconButton = screen.getByRole('button');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
    expect(iconButton).toHaveAttribute('aria-label', 'display the password');
  });

  test('type is text when click show icon', () => {
    render(<PasswordTextField />);
    const input = screen.getByLabelText('パスワード');
    const iconButton = screen.getByRole('button');
    fireEvent.click(iconButton);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(iconButton).toHaveAttribute('aria-label', 'hide the password');
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import PasswordTextField from '@/components/PasswordTextField';

describe('PasswordTextField', () => {
  const setup = (propsOverrides = {}) => {
    const defaultProps = {
      password: '',
      onChange: jest.fn(),
      id: 'outlined-adornment-password',
      name: 'outlined-adornment-password',
      label: 'パスワード',
      autoComplete: 'current-password',
      autoFocus: true,
      fullWidth: true,
      error: false,
      errorMessage: '',
    };
    const props = { ...defaultProps, ...propsOverrides };
    render(<PasswordTextField {...props} />);
    return { props };
  };
  test('type is password when initial state', () => {
    setup({ error: false, errorMessage: 'ErrorMessage' });
    const input = screen.getByLabelText('パスワード');
    const iconButton = screen.getByRole('button');
    const errorMessage = screen.queryByText('ErrorMessage');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
    expect(iconButton).toHaveAttribute('aria-label', 'display the password');
    expect(errorMessage).not.toBeInTheDocument();
  });

  test('type is text when click show icon', () => {
    setup();
    const input = screen.getByLabelText('パスワード');
    const iconButton = screen.getByRole('button');
    fireEvent.click(iconButton);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(iconButton).toHaveAttribute('aria-label', 'hide the password');
  });

  test('calls onChange when input value changes', () => {
    const onChange = jest.fn();
    setup({ onChange: onChange });
    const input = screen.getByLabelText('パスワード');
    fireEvent.change(input, { target: { value: 'password' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('shows error message when error is true', () => {
    setup({ error: true, errorMessage: 'Error message' });
    const errorMessage = screen.getByText('Error message');
    expect(errorMessage).toBeInTheDocument();
  });
});

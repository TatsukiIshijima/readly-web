import { render, screen, fireEvent } from '@testing-library/react';
import BasicTextField from '@/components/BasicTextField';

describe('BasicTextField', () => {
  const setup = (propsOverrides = {}) => {
    const defaultProps = {
      value: '',
      onChange: jest.fn(),
      id: 'basic-text-filed',
      name: 'basic-text-filed',
      label: 'TestLabel',
      type: 'text',
      fullWidth: true,
      error: false,
      errorMessage: '',
    };
    const props = { ...defaultProps, ...propsOverrides };
    render(<BasicTextField {...props} />);
    return { props };
  };
  test('renders correctly with default props', () => {
    setup();
    const input = screen.getByLabelText('TestLabel');
    const errorMessage = screen.queryByText('ErrorMessage');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'basic-text-filed');
    expect(input).toHaveAttribute('id', 'basic-text-filed');
    expect(input).toHaveAttribute('value', '');
    expect(errorMessage).not.toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    const onChange = jest.fn();
    setup({ label: 'メールアドレス', type: 'email', onChange: onChange });
    const input = screen.getByLabelText('メールアドレス');
    expect(input).toHaveAttribute('type', 'email');
    fireEvent.change(input, { target: { value: 'sample@example.com' } });
    expect(onChange).toHaveBeenCalledWith('sample@example.com');
  });

  test('shows error message when error is true', () => {
    setup({ error: true, errorMessage: 'ErrorMessage' });
    const errorMessage = screen.getByText('ErrorMessage');
    expect(errorMessage).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import BasicButton from '@/components/BasicButton';

describe('BasicButton', () => {
  const setup = (propsOverrides = {}) => {
    const defaultProps = {
      onClick: jest.fn(),
      id: 'basic-button',
      name: 'basic-button',
      label: 'Button',
      type: 'button' as const,
      disabled: false,
      fullWidth: true,
    };
    const props = { ...defaultProps, ...propsOverrides };
    render(<BasicButton {...props} />);
  };
  test('renders correctly with default props', () => {
    setup();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Button');
    expect(button).not.toBeDisabled();
  });

  test('call onClick when button is clicked', () => {
    const onClick = jest.fn();
    setup({ onClick: onClick });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when button is disabled', () => {
    const onClick = jest.fn();
    setup({ onClick: onClick, disabled: true });
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});

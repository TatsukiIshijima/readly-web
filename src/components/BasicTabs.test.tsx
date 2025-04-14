import { fireEvent, render, screen } from '@testing-library/react';
import BasicTabs from '@/components/BasicTabs';

describe('BasicTabs', () => {
  const options = [
    { label: 'all' },
    { label: 'unread' },
    { label: 'reading' },
    { label: 'done' },
  ];

  const setup = (propsOverrides = {}) => {
    const defaultProps = {
      options: options,
      onChange: jest.fn(),
    };
    const props = { ...defaultProps, ...propsOverrides };
    render(<BasicTabs {...props} />);
  };

  test('renders all tabs with default props', () => {
    setup();
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(options.length);
    options.forEach((option, index) => {
      const tab = tabs[index];
      expect(tab).toHaveTextContent(option.label);
    });
  });

  test('calls onChange when a tab is clicked', () => {
    const onChange = jest.fn();
    setup({ onChange: onChange });
    const tabs = screen.getAllByRole('tab');
    fireEvent.click(tabs[1]);
    expect(onChange).toHaveBeenCalledWith(1);
  });
});

import React from 'react';

export function useToggle(initialValue: boolean) {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = () => {
    setValue((prev) => !prev);
  };

  return {
    value: value,
    onChange: handleChange,
  };
}

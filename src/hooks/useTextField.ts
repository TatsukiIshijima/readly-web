import React from 'react';

export function useTextField(initialValue: string) {
  const [value, setValue] = React.useState(initialValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value: value,
    onChange: handleChange,
  };
}

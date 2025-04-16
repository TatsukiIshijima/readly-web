import React from 'react';
import { Dayjs } from 'dayjs';

export function useDatePicker(initialValue?: Dayjs) {
  const [value, setValue] = React.useState<Dayjs | null>(initialValue || null);

  function handleChange(newValue: Dayjs | null) {
    setValue(newValue);
  }

  return {
    value: value,
    onChange: handleChange,
  };
}

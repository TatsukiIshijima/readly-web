import React from 'react';
import { SelectChangeEvent } from '@mui/material';

export function useSingleSelect<T = string>(initialValue?: T) {
  const [value, setValue] = React.useState<T | undefined>(initialValue);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as T);
  };

  return {
    value: value,
    onChange: handleChange,
  };
}

export function useMultiSelect<T = string>(initialValue: T[] = []) {
  const [value, setValue] = React.useState<T[]>(initialValue);

  const handleChange = (event: SelectChangeEvent<T[]>) => {
    const newValue = event.target.value;
    if (Array.isArray(newValue)) {
      setValue(newValue as T[]);
    } else {
      setValue([]);
    }
  };

  return {
    value: value,
    onChange: handleChange,
  };
}

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface Option {
  label: string;
}

interface BasicTabsProp {
  onChange: (newValue: number) => void;
  options: Option[];
}

export default function BasicTabs({ options, onChange }: BasicTabsProp) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={(e, v) => handleChange(e, v)}>
          {options.map((option) => (
            <Tab key={option.label} label={option.label} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

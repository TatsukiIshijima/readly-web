import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface MultiSelectProps<T extends string | undefined> {
  label: string;
  items: T[];
  selectedValue: T[];
  onChange: (event: SelectChangeEvent<T[]>) => void;
  fullWidth?: boolean;
}

export default function MultiSelect<T extends string | undefined>({
  label,
  items,
  selectedValue,
  onChange,
  fullWidth = true,
}: MultiSelectProps<T>) {
  return (
    <FormControl variant={'outlined'} fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        multiple
        value={selectedValue}
        onChange={onChange}
        input={<OutlinedInput label={label}></OutlinedInput>}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5' }}>
            {selected
              .filter((item) => item !== undefined)
              .map((item) => {
                return <Chip key={item} label={item}></Chip>;
              })}
          </Box>
        )}
      >
        {items
          .filter((item) => item !== undefined)
          .map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
}

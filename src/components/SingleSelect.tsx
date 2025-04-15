import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface SingleSelectProps<T extends string | undefined> {
  label: string;
  items: T[];
  value: T;
  onChange: (event: SelectChangeEvent) => void;
  fullWidth?: boolean;
}

export default function SingleSelect<T extends string | undefined>({
  label,
  items,
  value,
  onChange,
  fullWidth = true,
}: SingleSelectProps<T>) {
  return (
    <FormControl variant={'outlined'} fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={value} onChange={onChange}>
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

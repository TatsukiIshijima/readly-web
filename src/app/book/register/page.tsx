import {
  Box,
  Chip,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicTextField from '@/components/BasicTextField';
import BasicButton from '@/components/BasicButton';
import React from 'react';
import { SelectChangeEvent } from 'node_modules/@mui/material/Select';

const dummyGenres = [
  'genre1',
  'genre2',
  'genre3',
  'genre4',
  'genre5',
  'genre6',
  'genre7',
  'genre8',
  'genre9',
  'genre10',
];

export default function BookRegister() {
  const [genres, setGenres] = React.useState<string[]>([]);

  const handleSelectChange = (event: SelectChangeEvent<typeof genres>) => {
    const {
      target: { value },
    } = event;
    setGenres(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack component={'form'} method={'POST'} spacing={4}>
        <BasicTextField
          value={''}
          onChange={() => {}}
          id={'title'}
          label={'タイトル'}
          type={'text'}
          error={false}
          errorMessage={''}
        ></BasicTextField>
        <BasicTextField
          value={''}
          onChange={() => {}}
          id={'author'}
          label={'著者'}
          type={'text'}
          error={false}
          errorMessage={''}
        ></BasicTextField>
        <BasicTextField
          value={''}
          onChange={() => {}}
          id={'publisher'}
          label={'出版社'}
          type={'text'}
          error={false}
          errorMessage={''}
        ></BasicTextField>
        <BasicTextField
          value={''}
          onChange={() => {}}
          id={'isbn'}
          label={'ISBN'}
          type={'text'}
          error={false}
          errorMessage={''}
        ></BasicTextField>
        <DatePicker label="発売日"></DatePicker>
        <BasicTextField
          value={''}
          onChange={() => {}}
          id={'url'}
          label={'URL'}
          type={'url'}
          error={false}
          errorMessage={''}
        ></BasicTextField>
        <FormControl fullWidth={true}>
          <InputLabel id={'genre-label'}>Genres</InputLabel>
          <Select
            labelId={'genre-label'}
            id={'genre-select'}
            multiple
            value={genres}
            onChange={handleSelectChange}
            input={
              <OutlinedInput id={'selected-multiple-chip'} label={'Genres'} />
            }
            renderValue={(selected: string[]) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5' }}>
                {selected.map((value) => {
                  return <Chip key={value} label={value} />;
                })}
              </Box>
            )}
          >
            {dummyGenres.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel id={'reading-status-label'}>Reading Status</InputLabel>
          <Select
            labelId={'reading-status'}
            id={'reading-status-select'}
            label={'Reading Status'}
            defaultValue={'unread'}
          >
            <MenuItem value={'unread'}>Unread</MenuItem>
            <MenuItem value={'reading'}>Reading</MenuItem>
            <MenuItem value={'done'}>Done</MenuItem>
          </Select>
        </FormControl>
        <DatePicker label="開始日"></DatePicker>
        <DatePicker label="終了日"></DatePicker>
        <BasicButton
          onClick={() => {}}
          id={'submit-button'}
          name={'submit-button'}
          label={'登録'}
          type={'submit'}
        ></BasicButton>
      </Stack>
    </LocalizationProvider>
  );
}

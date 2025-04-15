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
import { useTextField } from '@/hooks/useTextField';
import { useDatePicker } from '@/hooks/useDatePicker';
import { useMultiSelect, useSingleSelect } from '@/hooks/useSelect';

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
  const titleText = useTextField('');
  const authorText = useTextField('');
  const publisherText = useTextField('');
  const isbnText = useTextField('');
  const urlText = useTextField('');
  const publishDate = useDatePicker();
  const startDate = useDatePicker();
  const endDate = useDatePicker();
  const statusSelect = useSingleSelect<string>('unread');
  const genresSelect = useMultiSelect<string>();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack component={'form'} method={'POST'} spacing={4}>
        <BasicTextField
          value={titleText.value}
          onChange={titleText.onChange}
          id={'title'}
          label={'タイトル'}
          type={'text'}
          error={false}
          errorMessage={''}
        />
        <BasicTextField
          value={authorText.value}
          onChange={authorText.onChange}
          id={'author'}
          label={'著者'}
          type={'text'}
        />
        <BasicTextField
          value={publisherText.value}
          onChange={publisherText.onChange}
          id={'publisher'}
          label={'出版社'}
          type={'text'}
        />
        <BasicTextField
          value={isbnText.value}
          onChange={isbnText.onChange}
          id={'isbn'}
          label={'ISBN'}
          type={'text'}
        />
        <DatePicker
          label="発売日"
          value={publishDate.value}
          onChange={publishDate.onChange}
        />
        <BasicTextField
          value={urlText.value}
          onChange={urlText.onChange}
          id={'url'}
          label={'URL'}
          type={'url'}
        />
        <FormControl fullWidth={true}>
          <InputLabel id={'genre-label'}>Genres</InputLabel>
          <Select
            labelId={'genre-label'}
            id={'genre-select'}
            multiple
            value={genresSelect.value}
            onChange={genresSelect.onChange}
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
            value={statusSelect.value}
            onChange={statusSelect.onChange}
          >
            <MenuItem value={'unread'}>Unread</MenuItem>
            <MenuItem value={'reading'}>Reading</MenuItem>
            <MenuItem value={'done'}>Done</MenuItem>
          </Select>
        </FormControl>
        <DatePicker
          label="開始日"
          value={startDate.value}
          onChange={startDate.onChange}
        />
        <DatePicker
          label="終了日"
          value={endDate.value}
          onChange={endDate.onChange}
        />
        <BasicButton
          onClick={() => {}}
          id={'submit-button'}
          name={'submit-button'}
          label={'登録'}
          type={'submit'}
        />
      </Stack>
    </LocalizationProvider>
  );
}

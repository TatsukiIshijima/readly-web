'use client';

import { Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicTextField from '@/components/BasicTextField';
import BasicButton from '@/components/BasicButton';
import React from 'react';
import { useTextField } from '@/hooks/useTextField';
import { useDatePicker } from '@/hooks/useDatePicker';
import { useMultiSelect, useSingleSelect } from '@/hooks/useSelect';
import SingleSelect from '@/components/SingleSelect';
import { ReadingStatus, ReadingStatusList } from '@/types/ReadingStatus';
import MultiSelect from '@/components/MultiSelect';
import { dummyGenres } from '@/libs/testdata/dummy';

export default function BookRegister() {
  const titleText = useTextField('');
  const authorText = useTextField('');
  const publisherText = useTextField('');
  const isbnText = useTextField('');
  const urlText = useTextField('');
  const publishDate = useDatePicker();
  const startDate = useDatePicker();
  const endDate = useDatePicker();
  const statusSelect = useSingleSelect<ReadingStatus>('unread');
  const genresSelect = useMultiSelect<string>();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack component={'form'} method={'POST'} spacing={4}>
        <BasicTextField
          value={titleText.value}
          onChange={titleText.onChange}
          id={'title'}
          label={'Title'}
          type={'text'}
          error={false}
          errorMessage={''}
        />
        <BasicTextField
          value={authorText.value}
          onChange={authorText.onChange}
          id={'author'}
          label={'Author'}
          type={'text'}
        />
        <BasicTextField
          value={publisherText.value}
          onChange={publisherText.onChange}
          id={'publisher'}
          label={'Publisher'}
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
          label="Publish Date"
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
        <MultiSelect
          label={'Genre'}
          items={dummyGenres}
          selectedValue={genresSelect.value}
          onChange={genresSelect.onChange}
        />
        <SingleSelect
          label={'Reading Status'}
          items={[...ReadingStatusList]}
          value={statusSelect.value}
          onChange={statusSelect.onChange}
          fullWidth={true}
        />
        <DatePicker
          label="Start Date"
          value={startDate.value}
          onChange={startDate.onChange}
        />
        <DatePicker
          label="End Date"
          value={endDate.value}
          onChange={endDate.onChange}
        />
        <BasicButton
          onClick={() => {}}
          id={'submit-button'}
          name={'submit-button'}
          label={'Register'}
          type={'submit'}
        />
      </Stack>
    </LocalizationProvider>
  );
}

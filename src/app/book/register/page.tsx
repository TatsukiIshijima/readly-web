'use client';

import { Box, IconButton, Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicTextField from '@/components/BasicTextField';
import BasicButton from '@/components/BasicButton';
import React, { useRef, useState } from 'react';
import { useTextField } from '@/hooks/useTextField';
import { useDatePicker } from '@/hooks/useDatePicker';
import { useMultiSelect, useSingleSelect } from '@/hooks/useSelect';
import SingleSelect from '@/components/SingleSelect';
import { ReadingStatus, ReadingStatusList } from '@/types/ReadingStatus';
import MultiSelect from '@/components/MultiSelect';
import { dummyGenres } from '@/libs/testdata/dummy';
import FormContainer from '@/components/FormContainer';
import { Photo } from '@mui/icons-material';
import Image from 'next/image';

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

  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleOnImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }
    // setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleOnClickImage(event: React.MouseEvent) {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <FormContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack component={'form'} method={'POST'} spacing={4}>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              width={210}
              height={297}
              border={1}
              borderColor={'divider'}
              onClick={handleOnClickImage}
            >
              <input
                type={'file'}
                accept={'image/*'}
                style={{ display: 'none' }}
                onChange={handleOnImageChange}
                ref={fileInputRef}
              />
              {previewUrl ? (
                <Image
                  width={210}
                  height={297}
                  src={previewUrl}
                  alt={'preview'}
                />
              ) : (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <IconButton aria-label={'upload picture'} disabled={true}>
                    <Photo />
                  </IconButton>
                  <Typography variant={'body1'} color={'textSecondary'}>
                    Upload book image
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
          <BasicTextField
            value={titleText.value}
            onChange={titleText.onChange}
            id={'title'}
            label={'Title'}
            type={'text'}
            error={false}
            errorMessage={''}
            autoFocus={false}
          />
          <BasicTextField
            value={authorText.value}
            onChange={authorText.onChange}
            id={'author'}
            label={'Author'}
            type={'text'}
            autoFocus={false}
          />
          <BasicTextField
            value={publisherText.value}
            onChange={publisherText.onChange}
            id={'publisher'}
            label={'Publisher'}
            type={'text'}
            autoFocus={false}
          />
          <BasicTextField
            value={isbnText.value}
            onChange={isbnText.onChange}
            id={'isbn'}
            label={'ISBN'}
            type={'text'}
            autoFocus={false}
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
            autoFocus={false}
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
    </FormContainer>
  );
}

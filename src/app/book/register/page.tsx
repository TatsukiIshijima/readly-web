'use client';

import { Box, IconButton, Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicTextField from '@/components/BasicTextField';
import BasicButton from '@/components/BasicButton';
import React, { useRef, useState } from 'react';
import SingleSelect from '@/components/SingleSelect';
import { ReadingStatusList } from '@/types/ReadingStatus';
import MultiSelect from '@/components/MultiSelect';
import { dummyGenres } from '@/libs/testdata/dummy';
import FormContainer from '@/components/FormContainer';
import { Photo } from '@mui/icons-material';
import Image from 'next/image';
import { useBookRegisterPage } from '@/app/book/register/hook/useBookRegisterPage';

export default function BookRegister() {
  const bookRegisterPage = useBookRegisterPage();
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
        <Stack
          component={'form'}
          onSubmit={bookRegisterPage.onSubmit}
          method={'POST'}
          spacing={4}
        >
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
            value={bookRegisterPage.state.title}
            onChange={bookRegisterPage.onChangeTitle}
            id={'title'}
            label={'Title'}
            type={'text'}
            error={false}
            errorMessage={''}
            autoFocus={false}
          />
          <BasicTextField
            value={bookRegisterPage.state.author ?? ''}
            onChange={bookRegisterPage.onChangeAuthor}
            id={'author'}
            label={'Author'}
            type={'text'}
            autoFocus={false}
          />
          <BasicTextField
            value={bookRegisterPage.state.publisher ?? ''}
            onChange={bookRegisterPage.onChangePublisher}
            id={'publisher'}
            label={'Publisher'}
            type={'text'}
            autoFocus={false}
          />
          <BasicTextField
            value={bookRegisterPage.state.isbn ?? ''}
            onChange={bookRegisterPage.onChangeISBN}
            id={'isbn'}
            label={'ISBN'}
            type={'text'}
            autoFocus={false}
          />
          <DatePicker
            label="Publish Date"
            value={bookRegisterPage.state.publishDate}
            onChange={bookRegisterPage.onChangePublishDate}
          />
          <BasicTextField
            value={bookRegisterPage.state.url ?? ''}
            onChange={bookRegisterPage.onChangeURL}
            id={'url'}
            label={'URL'}
            type={'url'}
            autoFocus={false}
          />
          <MultiSelect
            label={'Genre'}
            items={dummyGenres}
            selectedValue={bookRegisterPage.state.genres}
            onChange={bookRegisterPage.onChangeGenres}
          />
          <SingleSelect
            label={'Reading Status'}
            items={[...ReadingStatusList]}
            value={bookRegisterPage.state.readingStatus}
            onChange={bookRegisterPage.onChangeReadingStatus}
            fullWidth={true}
          />
          <DatePicker
            label="Start Date"
            value={bookRegisterPage.state.startDate}
            onChange={bookRegisterPage.onChangeStartDate}
          />
          <DatePicker
            label="End Date"
            value={bookRegisterPage.state.endDate}
            onChange={bookRegisterPage.onChangeEndDate}
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

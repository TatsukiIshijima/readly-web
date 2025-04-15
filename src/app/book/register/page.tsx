import { Box, Chip, Stack, Select, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicTextField from '@/components/BasicTextField';
import BasicButton from '@/components/BasicButton';

export default function BookRegister() {
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
        <Select
          multiple
          value={['dog']}
          renderValue={(selected: string[]) => (
            <Box sx={{ display: 'flex', gap: '0.25rem' }}>
              {selected.map((selectedOption) => {
                const option = selected.find((opt) => opt === selectedOption);
                return (
                  <Chip key={selectedOption} label={option || selectedOption} />
                );
              })}
            </Box>
          )}
        >
          <MenuItem value="dog">Dog</MenuItem>
          <MenuItem value="cat">Cat</MenuItem>
          <MenuItem value="fish">Fish</MenuItem>
          <MenuItem value="bird">Bird</MenuItem>
        </Select>
        <Select defaultValue={'unread'}>
          <MenuItem value={'unread'}>未読</MenuItem>
          <MenuItem value={'reading'}>読書中</MenuItem>
          <MenuItem value={'done'}>読了</MenuItem>
        </Select>
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

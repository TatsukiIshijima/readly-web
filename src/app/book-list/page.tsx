import React from 'react';
import BookGrid, { dummyBooks } from '@/app/book-list/components/BookGrid';
import { Box, Button } from '@mui/material';
import BasicTabs from '@/components/BasicTabs';

const readingStatusOptions = [
  { label: 'all' },
  { label: 'unread' },
  { label: 'reading' },
  { label: 'done' },
];

export default function BookList() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <BasicTabs
          onChange={(v) => {
            console.log('Selected value:', v);
          }}
          options={readingStatusOptions}
        />
        <Button
          variant={'contained'}
          color={'primary'}
          onClick={() => {
            console.log('onClick register button');
          }}
        >
          新規登録
        </Button>
      </Box>
      <div>
        <BookGrid books={dummyBooks} />
      </div>
    </Box>
  );
}

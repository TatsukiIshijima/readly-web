'use client';

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
          onChange={(i) => {
            console.log('Selected value:', readingStatusOptions[i].label);
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
          New
        </Button>
      </Box>
      <div>
        <BookGrid
          books={dummyBooks}
          onClick={(id) => {
            console.log('Selected book ID:', id);
          }}
        />
      </div>
    </Box>
  );
}

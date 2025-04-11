import React from 'react';
import BookGrid from '@/app/book-list/components/BookGrid';
import { dummyBooks } from '@/app/book-list/components/BookGrid.stories';

// function StatusTabs() {
//   const [status, setStatus] = React.useState('unread');
//
//   const handleStatusChange = (newStatus: string) => {
//     setStatus(newStatus);
//   };
//
//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box>Unread</Box>
//       <Box>Reading</Box>
//       <Box>Done</Box>
//     </Box>
//   );
// }

export default function BookList() {
  return (
    <div>
      <BookGrid books={dummyBooks} />
    </div>
  );
}

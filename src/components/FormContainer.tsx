import React from 'react';
import { Box, Container } from '@mui/material';

export default function FormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container
        maxWidth={'sm'}
        sx={{
          p: {
            xs: 2,
            sm: 4,
          },
          backgroundColor: '#ffffff',
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

import { Box, Card } from '@mui/material';
import React from 'react';

export default function AuthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100vh'}
    >
      <Card
        variant={'outlined'}
        sx={{
          width: {
            xs: '100%', // extra-small(0~599px)の場合、width=100%
            sm: 400, // small(600px以上)の場合、width=400px
          },
          p: 3, // themeのspace=8x3=24px
          borderRadius: {
            xs: 0,
            sm: 2,
          },
          borderWidth: {
            xs: 0,
            sm: 1,
          },
        }}
      >
        {children}
      </Card>
    </Box>
  );
}

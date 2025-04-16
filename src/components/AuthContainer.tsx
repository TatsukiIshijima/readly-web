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
      justifyContent={'center'} // 主軸方向の配置を中央に
      alignItems={'center'} // 交差軸方向の配置を中央に
      minHeight={'100vh'} // viewport height 100%=画面の高さと同等
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

'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;

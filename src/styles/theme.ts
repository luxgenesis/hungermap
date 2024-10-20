import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'md',
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45
  },
  cursorType: 'pointer',
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em'
  }
});

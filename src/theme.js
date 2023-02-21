import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
      primary: '#F58220',
      white: '#FFFFFF',
      dark: '#000000',
    },
  }

  const fonts = {
    heading: `'Coda', Raleway`,
    body: `'Coda', Raleway`,
  }

  const styles = {
      body: {
        fontFamily: "'Coda', cursive",
      },
      '::placeholder': {
        color: '#BABABA',
      },
  };

const theme = extendTheme({ colors, styles, fonts });

export default theme;
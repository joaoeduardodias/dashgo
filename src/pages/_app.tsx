import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SideBarDrawerProvider } from '../contexts/SideBarDrawerContext';
import { makeServer } from '../services/mirage';
import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const MyApp = function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
};

export default MyApp;

import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" themes={['light', 'meio-dark', 'dark']}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

import React from 'react';
import type { AppProps } from 'next/app';

import ThemeProvider from '../contexts/ThemeContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;

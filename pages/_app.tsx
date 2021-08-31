// _app.tsx
import 'tailwindcss/tailwind.css';

import { FC } from 'react';
import { AppProps } from 'next/app';
import '@styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;

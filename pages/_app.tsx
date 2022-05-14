import React from 'react'
import { AppProps } from 'next/app'
import PageLayout from '../components/Layouts/PageLayout';
import PageHead from '../components/Layouts/PageHead';
import StoreProvider from '../utils/store';

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StoreProvider>
    <PageHead />
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </StoreProvider>
)

export default MyApp

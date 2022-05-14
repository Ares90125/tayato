import React from 'react'
import { AppProps } from 'next/app'
import PageLayout from '../components/Layouts/PageLayout';
import PageHead from '../components/Layouts/PageHead';

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>   
      <PageHead />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}

export default MyApp

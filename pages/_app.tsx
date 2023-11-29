import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import LayoutWrapper from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react';
import { logSiteDetails } from '@/lib/log-message';
import siteMetadata from '@/data/siteMetadata';

function MyApp({ Component, pageProps }: AppProps) {
  logSiteDetails(siteMetadata.logPortflio);

  return (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
    <Analytics />
    </>
    )
}

export default MyApp

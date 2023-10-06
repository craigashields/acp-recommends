import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import LayoutWrapper from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react';
import { logSiteDetails } from '@/lib/log-message';
import siteMetadata from '@/data/siteMetadata';
import { getTheme } from '@/lib/theme';

function MyApp({ Component, pageProps }: AppProps) {
  logSiteDetails(siteMetadata.logPortflio);

  let theme = getTheme()
  // theme = 'normal'
  return (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
        <html className="h-full bg-gradient-to-b from-backgroundcolor from-90% via-backgroundcolor via-50% to-backgroundtocolor bg-no-repeat bg-fixed" data-theme= {`${theme !== 'normal' ? `${theme}` : ''}`} />
    </Head>
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
    <Analytics />
    </>
    )
}

export default MyApp

import { Html, Head, Main, NextScript } from 'next/document'
import { getTheme } from '@/lib/theme';

let theme = getTheme()

export default function Document() {

  return (
    <Html lang="en" className="h-full bg-gradient-to-b from-backgroundcolor from-90% via-backgroundcolor via-50% to-backgroundtocolor bg-no-repeat bg-fixed" data-theme= {`${theme !== 'normal' ? `${theme}` : ''}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


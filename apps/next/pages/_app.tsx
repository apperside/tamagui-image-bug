import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useMemo } from 'react'
import type { SolitoAppProps } from 'solito'

import 'raf/polyfill'
import { ModalContextProvider } from 'app/hooks/useModal'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [theme, setTheme] = useRootTheme()

  const contents = useMemo(() => {
    return <Component {...pageProps} />
  }, [Component, pageProps])

  return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemeProvider onChangeTheme={setTheme}>
        {/* <ReduxProvider store={store}> */}
          <Provider disableRootThemeClass defaultTheme={theme}>
            <ModalContextProvider>{contents}</ModalContextProvider>
          </Provider>
        {/* </ReduxProvider> */}
      </NextThemeProvider>
    </>
  )
}

export default MyApp

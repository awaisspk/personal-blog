import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { DarkTheme, GlobalStyles } from '@stitchesConfig'

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light', dark: DarkTheme.className }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp

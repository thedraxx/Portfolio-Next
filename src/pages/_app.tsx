import { ChangeLanProvider } from '@/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChangeLanProvider>
      <Component {...pageProps} />
    </ChangeLanProvider>
  )
}

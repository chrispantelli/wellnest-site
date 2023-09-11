import '@/styles/globals.css'
import 'animate.css';

import localFont from 'next/font/local'

const visby = localFont({
  src: [
    {
      path: './fonts/VisbyRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/VisbyMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/VisbySemibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/VisbyBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={visby.className}>
      <Component {...pageProps} />
    </main>
  )
}

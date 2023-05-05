import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from "@nextui-org/react"
import { SessionProvider } from "next-auth/react"

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#8844ff',
      background: '#111'
    },
    space: {},
    fonts: {}
  }
})

export default function App({ Component, pageProps }) {
  return (
    // Use at the root of our app
    <SessionProvider session={pageProps.session}>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}
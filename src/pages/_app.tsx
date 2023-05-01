import NextHead from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <title>SBMR Cockpit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}

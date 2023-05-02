import NextHead from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { M_PLUS_1 } from "next/font/google";

const mplus1 = M_PLUS_1({ weight: "700", subsets: ["latin"], variable: "--font-mplus1" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${mplus1.variable}`}>
      <NextHead>
        <title>SBMR Cockpit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </NextHead>
      <Component {...pageProps} />
    </div>
  );
}

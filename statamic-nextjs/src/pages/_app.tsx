import "@foundation/ui/styles/globals.css";
import type { AppProps } from "next/app";

import '../01-foundation/ui/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

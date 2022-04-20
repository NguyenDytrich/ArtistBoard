import "../styles/scss/globals.scss";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../utils/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  initializeApp(firebaseConfig);
  return <Component {...pageProps} />;
}

export default MyApp;

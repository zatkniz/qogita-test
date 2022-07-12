import type { AppProps } from 'next/app';
import { CartProvider } from "react-use-cart";

import '../global.css';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
);

export default QogitaApp;

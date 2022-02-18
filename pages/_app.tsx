import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout';
import { GlobalProvider } from '../context/global_context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;

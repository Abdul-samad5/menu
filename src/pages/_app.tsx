import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/layout/layout';
import '@/components/Slider/TrendingSlider.css';
export default function App({ Component, pageProps }: AppProps) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

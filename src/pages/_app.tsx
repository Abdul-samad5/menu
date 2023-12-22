import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/layout/layout';
import '@/components/Slider/TrendingSlider.css';
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
      <Head>
        <meta charSet='utf-8'/>
         <title>Pusheat - Savoury Food Deals, Freshly Bidded By You</title>
         </Head>
       <Layout>
         <Component {...pageProps} />
      </Layout>
      </>
     
   );
}

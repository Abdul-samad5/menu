import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/layout/layout';
import '@/components/Slider/TrendingSlider.css';
import Head from 'next/head';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { useEffect, useState } from 'react';
export default function App({ Component, pageProps }: AppProps) {
   
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setTimeout(() => setLoading(true), 6000);
   }, []);
   return (
      <>
      <Head>
        <meta charSet='utf-8'/>
         <title>Pusheat - Savoury Food Deals, Freshly Bidded By You</title>
         </Head>
      {loading ?( 
      <Layout>
         <Component {...pageProps} />
      </Layout>) : (
        <LoadingScreen />
      )}
      </>
     
   );
}

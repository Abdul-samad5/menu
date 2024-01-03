import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/layout/layout';
import '@/components/Slider/TrendingSlider.css';
import Head from 'next/head';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
export default function App({ Component, pageProps }: AppProps) {
   
   const [loading, setLoading] = useState(false);
   
   useEffect(() => {
      Router.events.on('routeChangeStart', () => {
         setLoading(true)
         })
         Router.events.on('routeChangeComplete', () => {
            setLoading(false)
            })
            return ()=>{
               Router.events.off('routeChangeStart', () => {
                  setLoading(false)
                  })
                  Router.events.off('routeChangeComplete', () => {
                     setLoading(true)
                     })
            }
   }, [Router.events]);
   return (
      <>
      <Head>
        <meta charSet='utf-8'/>
         <title>Pusheat - Savoury Food Deals, Freshly Bidded By You</title>
         </Head>
      {loading ?
      (
         <LoadingScreen />
       )
      : 
      ( 

         <Layout>
            <Component {...pageProps} />
         </Layout>)
      }
       {/* <LoadingScreen />
       <Layout>
            <Component {...pageProps} />
         </Layout> */}
      </>
     
   );
}

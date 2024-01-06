import { Inter } from 'next/font/google';
import Download from '@/components/Download';
import { Hero,Affordable,Ready,Unique,Testimony,Counter } from '../components/Home';
const inter = Inter({ subsets: ['latin'] });
export default function Home() {
   return (
      <main className={` ${inter.className}`}>
         <Hero />
         <Affordable />
         <Ready />
        <Unique />
         <Testimony />
         <Counter />
         <Download /> 
      </main>
   );
}

import React from 'react'
import Img from './image/img';
import Image from 'next/image';

type Props = {
    src: string;
    name: string,
    chef: string
  };
export default function Chef({src, chef, name}: Props) {
   return (
   <div className='flex relative'>
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#01AA1B"/>
    </svg>
    <Image
    className='absolute pt-1 pl-3 rounded-[50%]  w-20 h-20'
    src={src} 
    loading='eager'
    alt='chef'
    width={50}
    height={50}/>
     {/* <Img src={src} alt='chef' className='absolute pt-1 pl-3 rounded-[50%] w-20 h-20' width={50}  height={50} /> */}
    <div className='pl-5'>
         <h1 className='text-green text-2xl'>{name}</h1>
         <p>{chef}</p>
    </div>
   
   </div>
   
   );
}

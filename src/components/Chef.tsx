import Image from 'next/image';
import React from 'react'

type Props = {
    src: string;
    name: string,
    chef: string
  };
export default function Chef({src, chef, name}: Props) {
   return (
   <div className='flex'>
    <Image
    className='rounded-full'
    src={src} 
    loading='eager'
    alt='chef'
    width={50}
    height={50}/>
    <div className='pl-5'>
         <h1 className='text-green text-2xl'>{name}</h1>
         <p>{chef}</p>
    </div>
   
   </div>
   
   );
}

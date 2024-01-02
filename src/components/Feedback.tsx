import React from 'react'
import Img from './image/img';

type Props = {
    src: string;
    name: string,
    chef: string
  };
export default function Feedback({src, chef, name}: Props) {
   return (
   <div className='flex'>
      <Img src={src} alt='chef'  className='rounded-[50%] w-20 h-20' width={70}  height={70} />
    <div className='pl-2'>
         <h1 className='text-black text-2xl'>{name}</h1>
         <p className='text-[#8E8E8E]'>{chef}</p>
    </div>
   
   </div>
   
   );
}

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function Hero() {
   return (
    <div className='blog h-screen mb-10'>
        <div className="relative z-10 h-full">
             <h1 className='text-7xl font-bold text-gray-200 font1 pt-60 text-center max-md:pt-36'>
                 <TypeAnimation
        sequence={[
          "BLOGS FROM FOOD EXPERTS",
          1000,
          "BLOGS FROM FOOD LOVERS",
          1000
        ]}
        speed={50}
        repeat={Infinity}
      />
            </h1>
      </div>
    </div>
   );
}

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
export default function Hero() {
   return (
      <div className="bg-hero h-screen mb-10">
         <div className="relative  h-full">
            <h1 className="sm:text-7xl text-5xl font-bold text-gray-200 font1 pt-60 text-center">
               <TypeAnimation
                  sequence={[
                     'BLOGS FROM FOOD EXPERTS',
                     1000,
                     'BLOGS FROM FOOD CREATORS',
                     1000,
                     'BLOGS FROM FOOD SCIENTISTS',
                     1000,
                     'BLOGS FROM FOOD NUTRITIONIST',
                     1000,
                     'BLOGS FROM FOOD LOVERS',
                     1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
               />
            </h1>
         </div>
      </div>
   );
}

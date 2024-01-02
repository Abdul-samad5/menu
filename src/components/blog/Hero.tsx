import React from 'react';
import { TypeAnimation } from 'react-type-animation';
export default function Hero() {
   return (
      <div className="bg-hero h-screen mb-10">
         <div className="relative  h-full">
            <h1 className="sm:text-7xl text-3xl font-bold text-gray-200 font1 pt-60 text-center">
            BLOGS FROM FOOD <TypeAnimation
                  sequence={[
                     'EXPERTS',
                     2000,
                     'CREATORS',
                     2500,
                     'SCIENTISTS',
                     2500,
                     'NUTRITIONIST',
                     2500,
                     'LOVERS',
                     2500,
                  ]}
                  speed={50}
                  repeat={Infinity}
               />
            </h1>
         </div>
      </div>
   );
}

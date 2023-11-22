import React from 'react';
import Button from '../ui/button';
export default function Hero() {
   return (
      <div className="bg-hero h-[800px] w -full px-4 md:px-9 flex flex-col justify-center gap-5 relative items-center  ">
         <div className="self-center md:self-center">
            <p className=" text-white font2 text-lg sm:text-[33.198px] md:text-[33.198px] text-start font-bold line-clamp-1 ">
               You will be amazed
            </p>
            <h1 className=" text-white sm:text-5xl font-averta font1 text-4xl md:text-7xl tracking-[1.04px] font-extrabold">
               QUALITY n FRESH @ BEST PRICES
            </h1>
         </div>
         <p className="text-lg sm:text-[33.198px] md:text-[33.198px] text-white font-bold font2 self-end ">and yes, </p>
         <p className="text-lg sm:text-[33.198px] md:text-[33.198px] text-white self-end font-bold font2 -mt-2">we do swallow too.</p>
         <Button value="Join wait list" className="self-end" />
         <div className="absolute bottom-10 mb-5 right-2 text-white md:flex gap-2 justify-center px-9 items-center hidden">
            {[1, 2, 3].map((btn) => (
               <button
                  type="button"
                  key={btn}
                  className="bg-transparent w-2 h-2  first:w-8 first:h-2 first:rounded-sm first:bg-white rounded-full border-solid border-2 border-white"
               ></button>
            ))}
         </div>
      </div>
   );
}

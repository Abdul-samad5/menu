import Image from 'next/image';
import React from 'react';

export default function Unique() {
   return (
      <div className="unique bg-unique bg-cover h-full flex justify-between flex-col md:flex-row gap-16 items-center px-4 md:px-16 py-16 mt-5">
         <div className="mx-auto order-2 md:order-1">
            <Image src="/Body.png" alt="body" width={350} height={750} style={{ objectFit: 'contain' }} className='hidden md:block' />
            <Image src='/phone.svg' alt="A phone showing a chef" height={750} width={350} className='md:hidden' />
         </div>
         <div  className="order-1 md:order-2 ">
            <div className="text-white flex text-center md:text-start flex-col items-start gap-3 ">
               <h1 className="text-5xl font-averta font-bold ">why we are unique?</h1>
               <p className=" font-nexa text-sm font-normal ">
                  Pusheat isn&apos;t just a platform; it&apos;s a movement. Like TikTok for food creatives, chefs, and anyone ready to
                  showcase and sell their culinary masterpieces, we&apos;re setting a new standard in the culinary world.
               </p>
               <p className="font-nexa text-sm font-normal">
                  Pusheat is the pioneering food creator platform in Africa. This groundbreaking concept opens up a world of
                  opportunities for both food lovers and culinary creators on the continent.
               </p>
               <div className="grid md:grid-cols-2 gap-1 grid-cols-1 mx-auto  md:mx-0 font-nexa">
                  {[
                     { img: '/Truck.png', name: 'Fast Delivery' },
                     { img: '/Timer.png', name: '24/7 services' },
                     { img: '/Hamburger.png', name: 'Fresh made food' },
                     { img: '/Factory.png', name: 'Quality maintain' },
                  ].map((li) => (
                     <div key={li.name} className="flex gap-2 items-center">
                        <Image src={li.img} alt={li.img} className="bg-green rounded-full" width={70} height={70} />

                        <p className="">{li.name}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

import Image from 'next/image';
import React from 'react';

export default function Ready() {
   return (
      <div className="h-full py-6 px-4 md:px-9 mt-20">
         {/* <div className="ml-20 mr-20 mt-24 mb-20"> */}
         <fieldset className="border-2 text-center border-green rounded-xl ">
            <legend className="text-green  md:px-10 px-4 text-3xl md:text-5xl text-center font-extrabold font-averta">
               Ready for the best food deals?
            </legend>
            <p className="text-center text-[#000] my-6 text-md  mx-auto md:w-3/5 font-medium font-nexa">
               Scrolling through the exciting list of deals on Pusheat is so much fun. Here are 3 steps to get the best food deals.
            </p>
            <div className="flex justify-center flex-col px-4 py-12 md:px-10  md:flex-row md:justify-between flex-grow-0 gap-4 ">
               {[
                  {
                     name: '/Hamburger.png',
                     paragraph:
                        "Enjoy Browsing through a variety of delicious chef-created food deals From local favorites to exotic cuisines. There's something for everyone.",
                     title: 'Discover',
                  },
                  {
                     name: '/Timer.png',
                     paragraph:
                        "Top up your wallet and join food deals you love. You can also buy immediately if you can't wait. Your money will not be deducted until the deal is successful.",
                     title: 'Join Deal',
                  },
                  {
                     name: '/Truck.png',
                     paragraph:
                        'If the deal is successful Sit back and relax while the chef prepares your order. Your delicious meal will be delivered right to your doorstep.',
                     title: 'Deliver',
                  },
               ].map((item) => (
                  <div key={item.title} className="flex flex-col justify-between items-center gap-8 h-fit ">
                     <Image src={item.name} alt={item.name} className="bg-green rounded-full p-2" width={60} height={60} />
                     <h1 className="text-green uppercase text-3xl font-averta font-bold">{item.title}</h1>
                     <p className="font-nexa font-normal text-[#000] text-md">{item.paragraph}</p>
                  </div>
               ))}
            </div>
         </fieldset>
         {/* </div> */}
      </div>
   );
}

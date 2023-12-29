import Image from 'next/image';
import React from 'react';

export default function Ready() {
   return (
      <>
               <div className='mt-20 px-4 md:pr-5 mb-10'>
                  <fieldset className='border-2 border-green rounded-xl'>
                        <legend className="text-green  md:px-10 px-4 text-3xl md:text-5xl text-center font-extrabold font-averta">
                           Ready for the best food deals?
                        </legend>
                        <p className="text-center text-[#000] my-6 text-md  mx-10 md:mx-auto md:w-3/4  font-medium font-nexa">
                           Scrolling through the exciting list of deals on Pusheat is so much fun. Here are 3 steps to get the best food deals.
                        </p> 
                        <div className='flex flex-col md:flex-row md:justify-around text-center'>
                           {[
                              {
                                 name: '/Hamburger.svg',
                                 paragraph:
                                    "Enjoy Browsing through a variety of delicious chef-created food deals From local favorites to exotic cuisines. There's something for everyone.",
                                 title: 'Discover',
                              },
                              {
                                 name: '/Timer.svg',
                                 paragraph:
                                    "Top up your wallet and join food deals you love. You can also buy immediately if you can't wait. Your money will not be deducted until the deal is successful.",
                                 title: 'Join Deal',
                              },
                              {
                                 name: '/Truck.svg',
                                 paragraph:
                                    'If the deal is successful Sit back and relax while the chef prepares your order. Your delicious meal will be delivered right to your doorstep.',
                                 title: 'Deliver',
                              },
                           ].map((item) => (  
                              <div key={item.title} className=" mb-10">
                                 <Image src={item.name} alt={item.name} className="bg-green rounded-full p-2 mx-36 md:ml-20 lg:mx-44" width={60} height={60} />
                                 <h1 className="text-green uppercase text-3xl font-averta font-bold py-10">{item.title}</h1>
                                 <p className="font-nexa font-normal text-[#000] lg:w-80 lg:ml-10">{item.paragraph}</p>
                              </div>
                            ))}
                  
                        </div>
                  </fieldset>
               </div>
      </>
   );
}

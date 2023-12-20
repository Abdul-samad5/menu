import Button from '@/components/ui/button';
import React from 'react';

const Affordable: React.FC = () => {
   return (
      <div className="flex h-fit flex-col py-16 px-4 md:px-9 gap-4 afford bg-black text-white">
         <div className="self-start grid gap-3">
            <h1 className="text-2xl md:text-5xl font-extrabold  text-white font-averta">
               Irresistible
               <br /> food deals
            </h1>
            <p className="text-sm md:text-xl font-nexa font-normal">Get 5 star quality meals at the 
best prices possible.</p>
            <Button value="Join waitlist" />
         </div>
         <div className="self-end grid gap-3 text-right">
            <h1 className="text-2xl md:text-5xl  text-white font-extrabold font-averta ">Cook & Earn</h1>
            <p className="text-sm md:text-xl text-white font-nexa font-normal">
            Earn on your culinary skills. Get guaranteed <br /> orders on your meals before starting to cook{' '}
            </p>
            {/* <button className="bg-green justify-self-end" type="button">
               Join waitlist
            </button> */}
            <Button value='Join waitlist' className='justify-self-end'/>
         </div>
         <div className="self-start">
            <h1 className="text-4xl md:text-6xl text-white font-allura ">Food Creatives</h1>
            <p className="text-sm md:text-xl text-white font-averta ">
            Africa's first food creator economy 
               <br /> Where food creatives earn.
            </p>
         </div>
      </div>
   );
};

export default Affordable;

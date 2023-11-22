import Image from 'next/image';
import React from 'react';

function About() {
   return (
      <div>
         <div className="flex justify-around max-sm:flex max-md:flex-col">
            <div className="mt-20 max-md:text-center">
               <h1 className="text-4xl font-extrabold mb-2">About Pusheat</h1>
               <p className="w-96 text-xl max-md:text-xl">
                  Lorem ipsum dolor sit amet consectetur. Viverra pharetra velit faucibus lacus. Nisi porta arcu laoreet pulvinar
                  feugiat felis vel. Blandit auctor sit erat mauris proin ut egestas nisi. Enim at amet id purus enim platea eleifend
                  lorem. Sit dignissim ac.
               </p>
            </div>
            {/* <div className="bg-my_bg bg-no-repeat bg-cover max-md:ml-5 max-md:mt-24">
               <Image src="/firstabout.png" alt="about" priority width={500} height={400} />
            </div> */}
         </div>
         <div className="flex justify-around mt-56 max-sm:flex max-md:flex-col-reverse max-md:mt-32">
            <div className="max-md:ml-5 max-md:mt-24">
               <Image src="/shutterstock.png" alt="about" priority width={500} height={400} />
            </div>
            <div className="mt-20 max-md:text-center">
               <h1 className="text-4xl font-extrabold mb-2">About the Company</h1>
               <p className="w-96 text-xl max-md:text-xl">
                  Lorem ipsum dolor sit amet consectetur. Viverra pharetra velit faucibus lacus. Nisi porta arcu laoreet pulvinar
                  feugiat felis vel. Blandit auctor sit erat mauris proin ut egestas nisi. Enim at amet id purus enim platea eleifend
                  lorem. Sit dignissim ac.
               </p>
            </div>
         </div>
      </div>
   );
}

export default About;

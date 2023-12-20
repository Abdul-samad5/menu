import Image from 'next/image'
import React from 'react'

function Download() {
  return (
    <div className='download mt-5 sm:pt-32 flex flex-col-reverse sm:flex sm:flex-row sm:justify-around'>
      <div className="pt-20">
          <Image
            src='/shot.png'
            alt="screen"
            width={400}
            loading='eager'
            height={616}
            />
      </div>
      <div className='sm:mt-36 mx-10'>
        <h1 className="sm:text-4xl font-extrabold  sm:w-96 text-3xl ">Download our app and join the Live Deals</h1>
          <div className="flex flex-row">
              <Image
              className="pr-5"
              src='/google.png'
              alt="google"
              width={170}
              loading='eager'
              height={50}
              />
               <Image
              src='/applestore.png'
              alt="apple"
              loading='eager'
              width={170}
              height={50}
              />
          </div>
    
      </div>
    </div>
  )
}

export default Download
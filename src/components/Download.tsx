import React from 'react'
import Img from './image/img'

function Download() {
  return (
    <div className='download mt-5 sm:pt-32 flex flex-col-reverse sm:flex sm:flex-row sm:justify-around'>
      <div>
           <Img src='/shot.png' alt='screen' className="pt-16"  width={400}  height={616} />
      </div>
      <div className='sm:mt-36 mx-10'>
        <h1 className="sm:text-4xl font-extrabold  sm:w-96 text-3xl ">Download our app and join the Live Deals</h1>
          <div className="flex flex-row">
               <Img  src='/google.png' alt='google' className="pr-5" width={170}  height={50} />
              <Img  src='/applestore.png' alt='apple' className="pr-5" width={170}  height={50} />
          </div>
    
      </div>
    </div>
  )
}

export default Download
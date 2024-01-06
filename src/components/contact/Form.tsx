import Image from 'next/image'
import React from 'react'

function Form() {
  return (
    <>
        <form className="-mt-20 bg-white shadow-lg mx-5 md:mx-10 rounded-xl mb-20" autoComplete='off'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="pt-10 ml-4 lg:ml-14">
                              <label className="text-xl font-semibold">Full name <span className=''>*</span></label> <br />
                             <div className='relative'> <input type="text" placeholder='Your full name' className="border-2 border-formboder w-full mx-auto lg:w-[31rem] rounded-xl py-2 px-5" />     
                        <Image
                            alt='icon'
                            className='absolute top-2 right-10 lg:right-14'
                            src='/Profile.png'
                            width={20}
                            height={16}
                            priority/>
                       </div>
                </div>
                <div className="py-10 ml-4">
                              <label className="text-xl font-semibold">Email Address <span className=''>*</span></label> <br />
                              <div className='relative'>   <input type="email" placeholder='Email Address' className="border-2 border-formboder w-full mx-autolg:w-[33rem] rounded-xl py-2 px-5" />
                             
                        <Image
                            alt='icon'
                            className='absolute top-2 right-10 md:right-[7rem] md:top-2 lg:right-16'
                            src='/Group.png'
                            width={20}
                            height={16}
                            priority/>
                       </div>
                </div>
                <div className="pb-10 ml-4 lg:ml-14">
                              <label className="text-xl font-semibold">Phone Number<span className=''>*</span></label> <br />
                              <div className='relative'>  <input type="number" placeholder='Your Phone Number' className="border-2 border-formboder w-full mx-auto lg:w-[31rem] rounded-xl py-2 px-5" />
                             
                        <Image
                            alt='icon'
                            className='absolute top-2 right-10 md:right-[7rem] md:top-2 lg:right-16'
                            src='/ming.png'
                            width={20}
                            height={16}
                            priority/>
                       </div>
                </div>
                <div className="ml-4">
                              <label className="text-xl font-semibold">Subject <span className=''>*</span></label> <br />
                             <div className="relative"> <input type="text" placeholder='Message Subject' className="border-2 border-formboder w-full mx-auto lg:w-[33rem] rounded-xl py-2 px-5" />
                             
                        <Image
                            alt='icon'
                            className='absolute top-2 right-10 md:right-[7rem] md:top-2 lg:right-16'
                            src='/Group.png'
                            width={20}
                            height={16}
                            priority/>
                       </div>
                </div>
                <div className='pt-10 ml-4 md:pt-5 lg:ml-14'>
                <label className="text-xl font-semibold">Message Body <span className=''>*</span></label> <br />
                   <div className="relative"> <textarea id="message" cols={6} rows={6} className="block w-full mx-auto p-2.5  lg:w-[68rem] md:w-[45rem]  text-sm border-2 border-formboder rounded-xl text-gray-900 bg-white border-gray-300 focus:ring-blue-500" placeholder="Write your message for us here......"></textarea>
                    <Image
                            alt='icon'
                            className='absolute top-2 right-10 lg:right-0'
                            src='/mes.png'
                            width={20}
                            height={16}
                            priority/>
                  </div>
                  </div>
            </div>
            <button className='text-white bg-green text-center w-72 mb-20 md:w-[40rem] lg:w-[67rem] lg:mx-16 md:mx-12 mx-2 py-5 rounded-[40px] mt-14'>Send Message  </button>
        </form>
    </>
  )
}

export default Form
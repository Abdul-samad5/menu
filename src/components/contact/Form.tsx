import Image from 'next/image'
import React from 'react'

function Form() {
  return (
    <>
        
        {/* <form className="-mt-20 bg-white mx-20 rounded-xl max-md:w-[30rem] max-md:mx-2" autoComplete='off'>
              <div className="grid grid-cols-2 gap-y-7 gap-x-10 px-20 pt-10 max-md:px-2 max-md:grid-cols-1">
                <div>
                              <label htmlFor="">Full name <span className=''>*</span></label> <br />
                              <input type="text" placeholder='Your full name' className="border-2 border-formboder w-full rounded-xl py-2 px-5" />
                             
                        <Image
                            alt='icon'
                            className='absolute top-[115%] right-[53%] max-md:top-[118%] max-md:right-[7%]'
                            src='/Profile.png'
                            width={20}
                            height={16}
                            priority/>
                       
                </div>
                <div>
                              <label htmlFor="">Email Address <span className=''>*</span></label> <br />
                              <input type="email" placeholder='Your Email Address' className="border-2 border-formboder w-full rounded-xl py-2 px-5" />
                              <Image
                            alt='icon'
                            className='absolute top-[115%] right-44 max-md:top-[139%] max-md:right-[7%]'
                            src='/Group.png'
                            width={20}
                            height={16}
                            priority/>
                </div>
                <div>
                              <label htmlFor="">Phone Number</label> <br />
                              <input type="number" placeholder='Your Phone Number' className="border-2 border-formboder w-full rounded-xl py-2 px-5" />
                              <Image
                            alt='icon'
                            className='absolute top-[133%] right-[53%] max-md:top-[160%] max-md:right-[7%]'
                            src='/ming (2).png'
                            width={20}
                            height={16}
                            priority/>
                </div>
                <div>
                              <label htmlFor="">Subject <span className=''>*</span></label> <br />
                              <input type="text" placeholder='Message subject' className="border-2 border-formboder w-full rounded-xl py-2 px-5" />
                              <Image
                            alt='icon'
                            className='absolute top-[133%] right-44 max-md:top-[180%] max-md:right-[7%]'
                            src='/Group.png'
                            width={20}
                            height={16}
                            priority/>
                </div>
                
                <div className=''>
                    <label className='text-labelColor'>Message Body <span className=''>*</span></label> <br />
                    <textarea id="message" cols={20} rows={6} className="block w-[60rem] p-2.5 text-sm border-2 border-formboder rounded-xl text-gray-900 bg-white border-gray-300 focus:ring-blue-500 max-md:w-[28rem]" placeholder="Write your message for us here......"></textarea>
                    <Image
                            alt='icon'
                            className='absolute top-[150%] right-44 max-md:top-[200%] max-md:right-[7%]'
                            src='/mes.png'
                            width={20}
                            height={16}
                            priority/>
                  </div>
              </div>
              <button className='text-white bg-green text-center w-[950px] mx-20 mt-14 max-md:w-96 max-md:mx-5'>Send Message  </button>
        </form> */}
        <form className="-mt-20 bg-white shadow-lg mx-5 md:mx-10 rounded-xl mb-20" autoComplete='off'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="pt-10 ml-4 lg:ml-14">
                              <label className="text-xl font-semibold">Full name <span className=''>*</span></label> <br />
                              <input type="text" placeholder='Your full name' className="border-2 border-formboder w-[19rem] lg:w-[31rem] rounded-xl py-2 px-5" />
                             
                        <Image
                            alt='icon'
                            className='absolute top-[99%] right-[20%] md:right-[30rem] md:top-[100%] lg:right-[43rem] lg:top-[100%]'
                            src='/Profile.png'
                            width={20}
                            height={16}
                            priority/>
                       
                </div>
                <div className="py-10 ml-4">
                              <label className="text-xl font-semibold">Email Address <span className=''>*</span></label> <br />
                              <input type="email" placeholder='Email Address' className="border-2 border-formboder w-[19rem] lg:w-[33rem] rounded-xl py-2 px-5" />
                             
                        <Image
                            alt='icon'
                            className='absolute top-[123%] right-[20%] md:right-[7rem] md:top-[99%] lg:right-[7rem] lg:top-[100%]'
                            src='/Group.png'
                            width={20}
                            height={16}
                            priority/>
                       
                </div>
                <div className="pb-10 ml-4 lg:ml-14">
                              <label className="text-xl font-semibold">Phone Number<span className=''>*</span></label> <br />
                              <input type="number" placeholder='Your Phone Number' className="border-2 border-formboder w-[19rem] lg:w-[31rem] rounded-xl py-2 px-5" />
                             
                        <Image
                            alt='icon'
                            className='absolute top-[147%] right-[20%] md:right-[30rem] md:top-[123%] lg:right-[43rem] lg:top-[120%]'
                            src='/ming.png'
                            width={20}
                            height={16}
                            priority/>
                       
                </div>
                <div className="ml-4">
                              <label className="text-xl font-semibold">Subject <span className=''>*</span></label> <br />
                              <input type="text" placeholder='Message Subject' className="border-2 border-formboder w-[19rem] lg:w-[33rem] rounded-xl py-2 px-5" />
                             
                        <Image
                            alt='icon'
                            className='absolute top-[170%] right-[20%] md:right-[7rem] md:top-[123%] lg:right-[7rem] lg:top-[120%]'
                            src='/Group.png'
                            width={20}
                            height={16}
                            priority/>
                       
                </div>
                <div className='pt-10 ml-4 md:pt-5 lg:ml-14'>
                <label className="text-xl font-semibold">Message Body <span className=''>*</span></label> <br />
                    <textarea id="message" cols={20} rows={6} className="block w-[19rem] p-2.5  lg:w-[68rem] md:w-[45rem]  text-sm border-2 border-formboder rounded-xl text-gray-900 bg-white border-gray-300 focus:ring-blue-500" placeholder="Write your message for us here......"></textarea>
                    <Image
                            alt='icon'
                            className='absolute top-[215%] right-[4rem]  md:top-[175%] lg:right-[7rem] lg:top-[162%]'
                            src='/mes.png'
                            width={20}
                            height={16}
                            priority/>
                  </div>
            </div>
            <button className='text-white bg-green text-center w-80 mb-20 md:w-[40rem] lg:w-[67rem] lg:mx-16 md:mx-12 ml-4 py-5 rounded-[40px] mt-14'>Send Message  </button>
        </form>
    </>
  )
}

export default Form
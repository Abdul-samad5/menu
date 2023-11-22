import Image from 'next/image'
import React from 'react'

function Form() {
  return (
    <>
        
        <form className="-mt-20 bg-white mx-20 rounded-xl max-md:w-[30rem] max-md:mx-2" autoComplete='off'>
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
        </form>
    </>
  )
}

export default Form
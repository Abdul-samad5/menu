import Vector from '@/components/Vector'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-950'>
        <div className='pt-10 flex flex-col justify-center items-center pb-10 mt-10'>
          <Image 
            className="mb-5"
            src='/Logo.png'
            alt='logo'
            width={213}
            loading='lazy'
            height={60}
          />
       <ul className='text-white flex'>
          <li className='pr-14'>
          <Link href="/about">About us</Link>
          </li>
           <li className='pr-14'>
          <Link href="/">Service</Link>
          </li>
          <li className='pr-14'>
          <Link href="/blog">Blog</Link>
          </li>
          <li className='pr-2'>
          <Link href="/">Contact</Link>
          </li>
        </ul>
    </div>
    <p className="border"></p>
    <p className="text-center bg-neutral-950 text-white pt-10 pb-10 italic text-xs">Copyright © 2023 PushEat | All Rights Reserved </p>
    <Vector/>
    </div>
    
  )
}

export default Footer
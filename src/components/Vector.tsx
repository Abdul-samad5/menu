import Image from 'next/image'
import React from 'react'

function Vector() {
  return (
    <div>
        <Image 
          alt='gggg'
          src='/footer.svg'
          width={1400}
          height={400}
          priority
          loading='eager'/>
          
    </div>
  )
}

export default Vector
import Image from 'next/image'
import React from 'react'
type Props = {
    src: string;
    className: string;
    alt: string;
    width: number;
    height: number;
  };
 
function Img({src, alt, className, height, width}: Props) {
  return (
    <div>
        <Image src={src} alt={alt} priority width={width} height={height} className={className} />
    </div>
  )
}

export default Img
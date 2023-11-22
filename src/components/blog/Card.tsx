
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'
function Card() {
    const cards =[
        {
            author:'/Frame.png',
            id:1,
            img:"Author name here . Just now",
            link:"Our top 10 food deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 2.png',
            id:2,
            img:"Author name here . 5 min",
            link:"How to get the best deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 3.png',
            id:3,
            img:"Author name here . Yesterday",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 4.png',
            id:4,
            img:"Author name here . 3 days ago",
            link:"Our top 10 food deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 5.png',
            id:5,
            img:"Author name here . 5 min",
            link:"How to get the best deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 6.png',
            id:6,
            img:"Author name here . 20 min",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 6.png',
            id:7,
            img:"Author name here . 20 min",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame.png',
            id:8,
            img:"Author name here . 20 min",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 4.png',
            id:9,
            img:"Author name here . 20 min",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        }
    ]
  return (
    <>
    <div className='grid grid-cols-3 grid-rows-3 gap-x-1 gap-y-10'>
        {
            cards.map((card)=>(
                 <Link href="/" key={card.id} >
                    <div className="w-96 ml-7 rounded-xl border-solid border-2 pb-10 pt-2 pr-3 pl-3 border-borderColor" >
                        <Image
                            src={card.author}
                            height={233}
                            width={370}
                            alt='card'
                            loading='lazy'
                            />
                            <p className="text-cardText text-xs mt-5 mb-4">{card.img}</p>
                            <h1 className='text-cardHead text-2xl font-bold mb-3'>{card.link}</h1>
                            <p className='text-cardPara mb-4'>{card.para}</p>
                            <p className="text-green underline">{card.text}</p>
                    </div>
                    
                 </Link>
                
            ))
        }
    </div>
   <div className="ml-96 mb-40">
   <Button text='See more'/>
   </div>
    </>
  )
}

export default Card
import React from 'react'
export default function Counter() {
    const datas =[
        {
            dount:'100K+',
            id:1,
            text:"ORDER PER DAY"
        },
        {
            dount:'20K+',
            id:2,
            text:"CHEFS"
        },
        {
            dount:'400K+',
            id:3,
            text:"DEALS"
        },
    ]
   return (
  <div className='bg-green h-[900px] sm:h-80'>
      <div className='flex flex-col  pb-32 pt-60 sm:flex-row sm:pt-36 sm:justify-around items-center text-white '>
        {
            datas.map((data, index)=>
            <div className="items-center pb-28" key={`${data.id}+${index}`}>
                 <h1 className='text-5xl font-averta font-bold'> {data.dount}</h1>
                <p className="mt-3 pr-10 text-xl font-normal font-nexa">{data.text}</p>
            </div>
                )
        }
             

      </div>
  </div>
   );
}

import React from 'react'
export default function Counter() {
    const datas =[
        {
            dount:'100K+',
            id:1,
            text:"MENU FOOD"
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
        {
            dount:'6.9M+',
            id:4,
            text:"COMPETITIONS"
        },
    ]
   return (
    <div className=" bg-counter h-72">
    
      <div className='flex justify-around items-center text-white '>
        {
            datas.map((data, index)=>
            <div className='pl-10' key={`${data.id}+${index}`}>
                 <h1 className='text-5xl'> {data.dount}</h1>
                <p className="pr-10 text-xl font-normal">{data.text}</p>
            </div>
                )
        }
             

      </div>
    </div>
  
   );
}

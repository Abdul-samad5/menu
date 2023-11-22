import Chef from '@/components/Chef'
import React from 'react'

export default function Testimony() {
  return (
    <div className="bg-white h-full mt-16 ml-20">
        <h1 className=" text-6xl font-extrabold mb-36">Feedback </h1>
        <div className="grid grid-cols-2 gap-1">
            <div className="pr-20">
                <Chef src='/image.png' name='hello' chef='@Chef_bassy'/>
                <p className='text-3xl pt-8'>Lorem ipsum dolor sit amet consectetur. Enim morbi arcu hendrerit feugiat. Id dui bibendum massa auctor. In tristique ac justo ut nullam lectus tincidunt lorem. Quisque est diam ac tristique urna. Gravida cras eget orci nulla.</p>
            </div>
            <div className="pr-16">
                <Chef src='/image.png' name='hello' chef='@Chef_bassy'/>
                <p className="text-3xl pt-8">Lorem ipsum dolor sit amet consectetur. Enim morbi arcu hendrerit feugiat. Id dui bibendum massa auctor. In tristique ac justo ut nullam lectus tincidunt lorem. Quisque est diam ac tristique urna. Gravida cras eget orci nulla.</p>
            </div>
        </div>     
    </div>
  )
}

import Feedback from '@/components/Feedback'
import React from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
export default function Testimony() {
  const filteredItems = [
    {
      id: 1,
      
    },
    {
      id: 2,
      
    },
    {
      id: 3,
      
    },
    {
      id:4,
      
    },
    // {
    //   id: 5,
      
    // },
    // {
    //   id: 6,
      
    // },
    // {
    //   id: 7,
      
    // },
    // {
    //   id: 8,
      
    // },
    // {
    //   id: 9,
      
    // },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 235;
  };
  return (
    <div className="bg-white h-full mt-16">
      <h1 className=' ml-20 text-black font-extrabold text-3xl md:text-6xl'>Feedback</h1>
       
        <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                  <div className="shadow-xl h-96 w-80 pl-8 pt-8">
                      <Feedback src='/image.png' name='hello' chef='@Chef_bassy'/>
                      <p className='w-72'>There is no greater thing you can do <br /> with your life and your work than <br />
                       follow your passions - in a <br /> way that serves the world and you.</p>
                  </div>
              </div>
            ))}
          </div>
          <div className="btns ">
              <button title="scroll left" onClick={slideLeft} className='rounded-[50%]'>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight} className='rounded-[50%]'>
                <AiOutlineArrowRight />
              </button>
        </div>
    </div>
  )
}

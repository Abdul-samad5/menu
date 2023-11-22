import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Chef from "../Chef";
import Image from "next/image";

const TrendingSlider = () => {
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
    {
      id: 5,
      
    },
    {
      id: 6,
      
    },
    {
      id: 7,
      
    },
    {
      id: 8,
      
    },
    {
      id: 9,
      
    },
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
    <>
      <div className="trending">
       
        <div className="container">
          <div className="title-btns mb-24">
            <h3 className="text-5xl font-extrabold">Chef of the month</h3>
            <p className="w-80">Lorem ipsum dolor sit amet consectetur. Enim morbi arcu hendrerit feugiat.
               Id dui bibendum massa auctor.</p>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                  <div>
                      <Chef src='/image.png' name='hello' chef='@Chef_bassy'/>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div>
          <Image 
          src='/Rectangle 4172.png'
          width={550}
          height={530}
          alt="one"
          loading='eager'
          />
        </div>
        <div className="flex">
        <Image 
          className="pr-5"
          src='/Rectangle 4175.png'
          width={170}
          height={530}
          alt="two"
          loading='eager'
          />
           <Image 
           className="pr-5"
            src='/Rectangle 4173.png'
            width={170}
            height={530}
            loading='eager'
            alt="three"
          />
           <Image 
            src='/Rectangle 4174.png'
            width={170}
            height={530}
            loading='eager'
            alt="four"
          />
        </div>
      </div>
      
    </>
  );
};
export default TrendingSlider;
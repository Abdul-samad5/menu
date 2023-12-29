
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'
function Card() {
    const cards =[
        {
            author:'/Frame.svg',
            id:1,
            img:"Author name here . Just now",
            link:"Our top 10 food deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 2.svg',
            id:2,
            img:"Author name here . 5 min",
            link:"How to get the best deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 3.svg',
            id:3,
            img:"Author name here . Yesterday",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 4.svg',
            id:4,
            img:"Author name here . 3 days ago",
            link:"Our top 10 food deals", 
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 5.svg',
            id:5,
            img:"Author name here . 5 min",
            link:"How to get the best deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 6.svg',
            id:6,
            img:"Author name here . 20 min",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 6.svg',
            id:7,
            img:"Author name here . 20 min",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame.svg',
            id:8,
            img:"Author name here . 20 min",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        },
        {
            author:'/Frame 4.svg',
            id:9,
            img:"Author name here . 20 min",
            link:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            text:'Read More'
        }
    ]
  return (
    <>
   
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-5 gap-y-5 md:ml-5 bg-download bg-contain bg-no-repeat'>
        {
            cards.map((card)=>(
                 <Link href="/" key={card.id} >
                    <div className="w-[21rem] rounded-xl border-solid border-2 mx-4 border-borderColor md:mx-2 sm:w-96">
                        <Image
                            src={card.author}
                            height={233}
                            width={370}
                            className="w-[20rem] mx-2 mt-2 sm:w-[22.5rem] lg:w-[23rem]"
                            alt='card'
                            loading='lazy'
                            />
                            <div className='md:mx-4 mb-10'>
                              <p className='text-cardText  text-xs -ml-40 md:ml-1 my-4'>{card.img}</p>
                              <h1 className='text-cardHead text-2xl font-bold mb-3 ml-5 md:-ml-0.5'>{card.link}</h1>
                              <p className='text-cardPara mb-4 ml-5 md:-ml-0.5'>{card.para}</p>
                              <p className="text-green underline -ml-56 md:ml-1">{card.text}</p>
                            </div>
                    </div>
                    
                 </Link>
                
            ))
        }
    </div>
   <div className="grid place-items-center mt-20  mb-40">
    <Button text='Send Message' className='w-80 bg-green h-14 rounded-[40px] text-white py-4 '/>
    {/* <div className='absolute lg:top-[385%] lg:right-96 sm:top-[650%] sm:right-52 top-[935%] right-7'>
        <svg xmlns="http://www.w3.org/2000/svg" width="99" height="115" viewBox="0 0 99 115" fill="none">
            <path d="M97.8327 52.5427C100.294 53.5113 100.504 54.6459 100.145 57.0159C100.212 62.5352 93.1546 61.8055 90.6126 58.8841C89.6779 57.8097 89.6124 55.1252 90.3356 53.9317C91.2242 52.4656 91.9355 52.4408 93.531 52.4215C94.7876 52.4063 96.6292 52.0689 97.8327 52.5427Z" fill="#01AA1B"/>
            <path d="M9.21935 99.4112C11.6802 100.381 11.8903 101.515 11.5317 103.885C11.5985 109.404 4.54133 108.675 1.9993 105.753C1.0646 104.679 0.99837 101.994 1.72235 100.801C2.61095 99.3348 3.32222 99.3101 4.9177 99.2908C6.17429 99.2756 8.01589 98.9381 9.21935 99.4112Z" fill="#01AA1B"/>
            <path d="M69.1155 3.20648C71.5764 4.17506 71.7872 5.31045 71.4279 7.6796C71.4947 13.199 64.4383 12.47 61.8955 9.54789C60.9608 8.47342 60.8953 5.78965 61.6185 4.59619C62.5071 3.13006 63.2184 3.10459 64.8146 3.08526C66.0712 3.07005 67.9128 2.73336 69.1155 3.20648Z" fill="#01AA1B"/>
            <path d="M97.8853 99.7402C93.6223 99.0757 93.5005 104.024 93.7194 106.782C93.8706 108.693 95.3668 110.669 97.4377 110.903C99.9938 111.191 101.465 107.859 102.192 106.254C103.355 103.687 100.908 100.211 97.8853 99.7402Z" fill="#01AA1B"/>
            <path d="M38.8427 0.961418C34.5789 0.296848 34.4571 5.2457 34.6761 8.00352C34.828 9.91407 36.3242 11.8904 38.3943 12.1237C40.9512 12.4118 42.4214 9.07987 43.1489 7.47536C44.3117 4.90785 41.865 1.43245 38.8427 0.961418Z" fill="#01AA1B"/>
            <path d="M80.7313 26.8698C82.5203 27.8887 82.502 29.4218 81.9875 31.0084C81.6245 31.9904 81.8321 33.1166 81.6457 33.75C81.2193 35.1998 79.8786 35.9307 78.3241 36.2332C77.7963 36.3362 73.815 36.7755 73.6301 36.1313C73.3107 35.0187 73.8101 33.2659 73.7958 32.0852C73.7769 30.5243 75.5084 25.9654 77.5294 26.0046C78.643 26.0256 79.7893 26.333 80.7313 26.8698Z" fill="#01AA1B"/>
            <path d="M3.15562 4.69729C4.00153 2.74475 9.642 4.0682 9.65687 5.29643C9.67174 6.52466 10.0094 9.84386 8.87629 10.6198C7.75305 11.3894 4.682 12.4618 3.62212 11.0553C2.17882 9.1389 2.22097 6.8564 3.15562 4.69729Z" fill="#01AA1B"/>
            <path d="M64.7892 52.0264C65.6343 50.0738 71.2748 51.3973 71.2897 52.6255C71.3045 53.8538 71.6423 57.173 70.5091 57.9489C69.3859 58.7186 66.3148 59.7909 65.2549 58.3844C63.8116 56.468 63.8538 54.1855 64.7892 52.0264Z" fill="#01AA1B"/>
            <path d="M54.1474 29.9386C54.3017 27.6133 53.6325 25.3517 51.5471 24.2996C48.7921 22.9082 47.3987 25.6886 46.6009 27.7479C45.9503 29.4274 46.123 32.5508 46.4306 34.3291C46.6639 35.6751 45.7767 36.685 46.7205 37.6244C47.2987 38.1994 50.4519 38.6558 51.2149 38.1481C52.2311 37.4718 52.6301 36.2891 53.2452 35.2879C53.6415 34.6421 53.6857 33.6654 53.7596 32.9338C53.8603 31.9411 54.0818 30.9224 54.1474 29.9386Z" fill="#01AA1B"/>
            <path d="M82.0634 79.4114C82.2177 77.0869 81.5485 74.8245 79.4639 73.7724C76.7081 72.3818 75.3155 75.1615 74.5177 77.2215C73.8671 78.901 74.0398 82.0236 74.3474 83.8027C74.5799 85.1487 73.6934 86.1585 74.6372 87.0972C75.2155 87.6729 78.3687 88.1294 79.1316 87.621C80.1471 86.9446 80.5469 85.7627 81.1612 84.7615C81.5583 84.1157 81.6017 83.139 81.6764 82.4066C81.7771 81.4147 81.9986 80.3952 82.0634 79.4114Z" fill="#01AA1B"/>
            <path d="M42.403 56.2487C43.4243 58.4592 43.9032 60.7109 41.9347 63.4844C39.8108 64.885 38.4714 64.0156 37.4257 63.0805C35.8621 61.6839 35.0155 61.1076 35.3193 59.0335C35.5799 57.2491 37.2576 53.0022 39.6666 52.9731C40.8557 52.9587 42.0479 55.4808 42.403 56.2487Z" fill="#01AA1B"/>
            <path d="M72.7276 105.696C73.7488 107.906 74.227 110.158 72.2592 112.932C70.1353 114.331 68.7959 113.462 67.7501 112.528C66.1866 111.131 65.34 110.554 65.6438 108.48C65.9044 106.696 67.5821 102.449 69.991 102.419C71.1794 102.405 72.3724 104.928 72.7276 105.696Z" fill="#01AA1B"/>
            <path d="M45.9561 79.6132C47.3805 77.7518 51.8988 78.7906 53.3757 79.6836C55.55 80.3467 54.7688 83.5322 54.1303 84.9424C53.7964 85.6787 53.2677 87.2279 52.2432 87.3492C50.8588 87.5132 49.536 86.9372 48.267 86.4933C46.5197 85.8811 45.4918 85.3452 45.2446 83.422C45.0821 82.1603 45.1394 80.6797 45.9561 79.6132Z" fill="#01AA1B"/>
            <path d="M14.0415 31.7914C15.4667 29.93 19.9842 30.9688 21.4611 31.8619C23.6361 32.5249 22.855 35.7104 22.2156 37.1206C21.8826 37.8569 21.3531 39.4062 20.3286 39.5274C18.9442 39.6914 17.6214 39.1155 16.3531 38.6715C14.605 38.0593 13.5772 37.5235 13.33 35.6003C13.1675 34.3386 13.2247 32.858 14.0415 31.7914Z" fill="#01AA1B"/>
            <path d="M35.1801 103.354C36.628 100.713 40.8867 102.67 42.7434 103.263C42.7434 103.263 43.405 107.622 42.8061 108.44C42.4017 108.99 40.8304 108.913 40.2766 109.023C38.7673 109.32 37.1789 109.23 35.6551 109.213C33.3099 109.186 34.3675 104.836 35.1801 103.354Z" fill="#01AA1B"/>
            <path d="M3.26567 55.533C4.71361 52.8915 8.97232 54.8489 10.829 55.4414C10.829 55.4414 11.4914 59.8011 10.8917 60.6188C10.4881 61.1689 8.916 61.0921 8.36217 61.2015C6.85365 61.4989 5.26528 61.4085 3.74069 61.3917C1.39551 61.3656 2.45317 57.0143 3.26567 55.533Z" fill="#01AA1B"/>
            <path d="M25.0542 80.4452C25.4404 82.4503 24.3186 83.279 22.8442 83.7362C21.9041 83.9822 21.2181 84.7696 20.6423 84.9675C19.3228 85.4205 17.9497 84.7401 16.7518 83.652C16.3455 83.2827 13.5222 80.311 13.8735 79.8068C14.4787 78.9376 16.063 78.3763 16.9107 77.7158C18.0304 76.8419 22.4245 75.7328 23.6676 77.3856C24.3526 78.2967 24.8505 79.3902 25.0542 80.4452Z" fill="#01AA1B"/>
        </svg>
    </div> */}
   </div>
    </>
  )
}

export default Card
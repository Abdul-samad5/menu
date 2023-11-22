import { FC } from 'react';
import FeedbackCard from './FeedbackCard';
const Feedback: FC = () => {
   return (
      <section className="py-6 ">
         <h1 className="font-averta px-4 md:px-9 font-extrabold text-6xl ">Feedbacks</h1>
         <FeedbackCard />
         <div className="flex justify-center gap-3 ">
            <button type="button" className="bg-green  rounded-[50%] py-4 px-4  flex justify-center items-center w-14 h-14 ">
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <path
                     d="M8.64453 16.2918L1.35286 9.00016L8.64453 1.7085"
                     stroke="white"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </button>
            <button type="button" className="bg-green rounded-[50%] py-4 px-4 flex justify-center items-center w-14 h-14 ">
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <path
                     d="M1.35547 1.70817L8.64714 8.99984L1.35547 16.2915"
                     stroke="white"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </button>
         </div>
      </section>
   );
};
export default Feedback;

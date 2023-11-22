import { FC } from 'react';
import Image from 'next/image';
const FeedbackCard: FC = () => {
   return (
      <div className=' overflow-hidden w-full'>
         {/* {[
            '/images/feedback/tweet.svg',
            '/images/feedback/tweet.svg',
            '/images/feedback/tweet.svg',
            '/images/feedback/tweet.svg',
            '/images/feedback/tweet.svg',
         ].map((img) => (
            <Image key={img} src={img} alt="tweet" height={290} width={802} />
         ))} */}
         {/* <Image src='/images/feedback/tweet.svg' alt='tweet' height={290} width={802} /> */}
      </div>
   );
};
export default FeedbackCard;

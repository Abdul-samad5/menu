import { FC } from 'react';

const Button: FC<{ value: string; className?: string }> = ({ value, className }) => {
   return (
      <button
         type="button"
         className={`bg-green rounded-[40.299px] font-averta text-white py-3 px-16 flex justify-center items-center w-fit font-bold hover:text-green hover:bg-transparent hover:border-green hover:border-2 hover:border-solid ${className}`}
      >
         {value}
      </button>
   );
};
export default Button;

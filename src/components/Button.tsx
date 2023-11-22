import React from 'react'

type Props = {
    text: string;
  };
export default function Button({text}: Props) {
   return (
   <div>

        <button type="button" className='bg-green'>{text}</button>   

   </div>
   );
}

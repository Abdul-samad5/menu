import React from 'react'

type Props = {
    text: string;
    className: string;
  };
 
export default function Button({text,className}: Props) {
   return (
   <div>

        <button type="button" className={className}>{text}</button>   

   </div>
   );
}

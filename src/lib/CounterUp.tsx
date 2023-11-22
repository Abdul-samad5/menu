import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
type Props = {
    sectionSelect: string;
    endValue: any;
    id:any;
  key: any;
  };
  export default function CounterUp( {endValue = 0, sectionSelect }: Props) {
    const [showCount, setShowCountValue] = useState(false);
    useEffect(() => {
        const rec = document.getElementById(sectionSelect);
        if (rec) {
            const currentPosition = rec.offsetTop - document.body.scrollTop;
            window.addEventListener('scroll', () => {
                const currentScrollPosition =
                    window.pageYOffset || document.documentElement.scrollTop;
                if (currentScrollPosition + 500 > currentPosition) {
                    setShowCountValue(true);
                }
            });
        }
    }, [sectionSelect, showCount]);
    return <>{showCount ? <CountUp delay={0} duration={3} end={endValue} /> : 0}</>;
}

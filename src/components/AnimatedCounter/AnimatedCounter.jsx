import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ targetCount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < targetCount) {
            const increment = Math.ceil(targetCount / 200); // Adjst the increment value as the sped u want to show
            const timeout = setTimeout(() => {
                setCount((prevCount) => prevCount + increment);
            }, 30); // Adjust the timeout duration as needed
            return () => clearTimeout(timeout);
        }
    }, [count, targetCount]);

    return (
        <div className='counter'>
            <div className='number font-bold text-5xl text-center transition duration-500 transform animate-fade-in'>
                {count}
            </div>
        </div>
    );
};

export default AnimatedCounter;

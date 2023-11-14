import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className='scroll-indicator'>
            <div className='progressMainWrapper bg-indigo- h-[6px] mt-0 ml-0 z-1 w-full'>
                <div
                    className='progressMainStyle bg-orange-500 h-[6px] mt-0 ml-0 z-1 w-15'
                    style={{ width: `${scrollTop}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ScrollIndicator;

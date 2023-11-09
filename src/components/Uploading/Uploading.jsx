import React from "react";

const Uploading = ({ text }) => {
    return (
        <div className='flex  items-center flex-col justify-center h-[448px] '>
            <span className='loading loading-bars loading-lg text-orange-500'></span>
            <p className='font-bold text-gray-700'>{text}</p>
        </div>
    );
};

export default Uploading;

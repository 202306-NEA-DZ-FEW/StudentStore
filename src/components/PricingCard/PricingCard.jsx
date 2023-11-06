import React from "react";

import Button from "../Buttons/Button";

const PricingCard = ({ title, amount }) => {
    return (
        <div className='p-8  md:p-4 text-black text-center border rounded-lg shadow-md bg-white'>
            <h2 className='text-xl   font-semibold'>{title}</h2>
            <p className=' text-6xl my-2 font-semibold flex justify-center'>
                <span className='text-3xl self-center'>$</span>
                {amount}
            </p>
            <Button>Donate</Button>
        </div>
    );
};

export default PricingCard;

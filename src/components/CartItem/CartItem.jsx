// CartItem.js
import Image from "next/image";
import React from "react";

const CartItem = ({ cartItem }) => {
    console.log("CartItem rendering:", cartItem);

    return (
        <div className='flex h-[100px] gap-2'>
            <div className='h-[80%] '>
                <Image
                    className='h-full object-fit'
                    src={cartItem?.image}
                    width={200}
                    height={200}
                    alt={cartItem?.title}
                />
            </div>
            <div className=''>
                <h2 className=' text-black'>{cartItem?.title}</h2>
                <p>{cartItem?.type}</p>
                <span>{cartItem?.price}</span>
            </div>
            <hr className='w-full my-12 text-black bg-black' />
        </div>
    );
};

export default CartItem;

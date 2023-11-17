// CartItem.js
import Image from "next/image";
import React from "react";
import { useContext } from "react";

import { CartContext } from "@/context/CartContext";

import Button from "../Buttons/Button";

const CartItem = ({ cartItem }) => {
    console.log("CartItem rendering:", cartItem);
    console.log("Product to delete:", cartItem);
    const { removeItemFromCart } = useContext(CartContext);

    const removeProductFromCart = () => {
        removeItemFromCart(cartItem.productId);
    };

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
            <Button onClick={removeProductFromCart} className='bg-red-600 px-4'>
                Remove
            </Button>
            <hr className='w-full my-12 text-black bg-black' />
        </div>
    );
};

export default CartItem;

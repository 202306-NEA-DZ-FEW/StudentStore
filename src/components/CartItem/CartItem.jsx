// CartItem.js
import Image from "next/image";
import React, { useState } from "react";
import { useContext } from "react";

import { CartContext } from "@/context/CartContext";

import Button from "../Buttons/Button";

const CartItem = ({ cartItem, updateCart }) => {
    console.log("CartItem rendering:", cartItem);
    console.log("Product to delete:", cartItem);
    const { removeItemFromCart } = useContext(CartContext);
    const [borrowDays, setBorrowDays] = useState(cartItem?.borrowDays || 15);
    const maxBorrowDays = 15;
    const removeProductFromCart = () => {
        removeItemFromCart(cartItem.productId);
    };
    const handleIncreaseDays = () => {
        if (borrowDays < maxBorrowDays) {
            setBorrowDays((prevDays) => prevDays + 1);
            updateCart(cartItem.productId, { borrowDays: borrowDays + 1 });
        }
    };

    const handleDecreaseDays = () => {
        if (borrowDays > 1) {
            setBorrowDays((prevDays) => prevDays - 1);
            updateCart(cartItem.productId, { borrowDays: borrowDays - 1 });
        }
    };
    const calculateBorrowPrice = () => {
        // Assuming a linear calculation based on the default price and days
        const defaultDays = 15;
        const defaultPrice = cartItem.price || 0;
        const pricePerDay = defaultPrice / defaultDays;
        return borrowDays * pricePerDay;
    };
    return (
        <div className='flex w-full  h-[100px] gap-2 justify-between'>
            <div className='h-[80%] flex  gap-4'>
                <Image
                    className='h-full object-fit'
                    src={cartItem?.image}
                    width={100}
                    height={200}
                    alt={cartItem?.title}
                />
                <div className='flex flex-col'>
                    <h2 className=' text-black'>{cartItem?.title}</h2>
                    <p>{cartItem?.type}</p>
                    {cartItem?.type === "borrow"
                        ? calculateBorrowPrice().toFixed(2)
                        : cartItem?.price.toFixed(2)}
                </div>
            </div>

            <div>
                {cartItem?.type === "borrow" && (
                    <>
                        <Button onClick={handleIncreaseDays}>+</Button>
                        <Button onClick={handleDecreaseDays}>-</Button>
                        <span>{borrowDays} days</span>
                    </>
                )}
                <Button
                    onClick={removeProductFromCart}
                    className='bg-red-600 px-4'
                >
                    Remove
                </Button>
                <hr className='w-full my-12 text-black bg-black' />
            </div>
        </div>
    );
};

export default CartItem;

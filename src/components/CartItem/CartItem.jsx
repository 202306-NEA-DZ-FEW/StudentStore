// CartItem.js
import Image from "next/image";
import React, { useState } from "react";
import { useContext } from "react";

import { CartContext } from "@/context/CartContext";

import Button from "../Buttons/Button";

const CartItem = ({ cartItem, updateCart }) => {
    // console.log("CartItem rendering:", cartItem);
    // console.log("Product to delete:", cartItem);
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
        const defaultPrice = cartItem?.price || 0;
        const pricePerDay = defaultPrice / defaultDays;
        return borrowDays * pricePerDay;
    };
    const convertToDinar = (priceInDollars) => {
        const exchangeRate = 134.35;
        return (priceInDollars * exchangeRate).toFixed(2);
    };
    const borrowPrice = calculateBorrowPrice();
    const convertedBorrowPrice = convertToDinar(borrowPrice);
    const convertedPrice = convertToDinar(cartItem?.price);

    return (
        <div>
            <div class='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
                <Image
                    src={cartItem?.image}
                    width={250}
                    height={100}
                    alt={cartItem?.title}
                    class='w-full rounded-lg sm:w-40'
                />
                <div class='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                    <div class='mt-5 sm:mt-0'>
                        <h2 class='text-lg font-bold text-gray-900'>
                            {cartItem?.title}
                        </h2>
                        <p class='mt-1  text-md text-gray-700'>
                            {cartItem?.type === "borrow" && (
                                <>
                                    {borrowPrice.toFixed(2)} -{" "}
                                    {convertedBorrowPrice} DZD
                                    <br />
                                </>
                            )}
                            {cartItem?.price.toFixed(2)}$ - {convertedPrice} DZD
                        </p>
                        <p className='capitalize'>{cartItem?.type}</p>
                    </div>
                    <div class='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                        {cartItem?.type === "borrow" && (
                            <div class='flex items-center border-gray-100'>
                                <button
                                    onClick={handleDecreaseDays}
                                    class='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'
                                >
                                    -
                                </button>
                                <p
                                    class='h-8 w-8 border flex justify-center items-center bg-white  text-xs outline-none'
                                    type='text'
                                >
                                    {borrowDays} d
                                </p>
                                <button
                                    onClick={handleIncreaseDays}
                                    class='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'
                                >
                                    +
                                </button>
                            </div>
                        )}
                        <div class='flex items-center space-x-4'>
                            <Button
                                className='bg-transparent border-none hover:text-white  text-gray-500 hover:bg-red-600 px-4'
                                onClick={removeProductFromCart}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

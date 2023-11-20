import React from "react";
import { toast } from "react-toastify";

import Button from "../Buttons/Button";

const OrderSummary = ({ cartItems, subtotal, borrowPrices }) => {
    const handleCheckout = () => {
        toast.success("Proceed to Checkout.", {
            autoClose: 2000,
        });
    };
    return (
        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-[40%]'>
            <h2 className='text-2xl text-black font-bold text-center'>
                Order Summary
            </h2>
            <hr className='my-4' />
            <div className='flex justify-between'>
                <p className='text-lg text-black font-semibold'>Name</p>

                <p className='text-lg text-black font-semibold pr-3'>Price</p>
            </div>
            <hr className='my-2' />
            <div>
                {cartItems?.map((cartItem) => (
                    <div
                        key={cartItem.id}
                        className='mb-2 flex justify-between '
                    >
                        <p className='text-gray-700 font-medium w-2/3  truncate'>
                            {cartItem.title}
                        </p>
                        <p className='text-gray-700 font-semibold'>
                            {cartItem.type === "borrow"
                                ? borrowPrices[cartItem.productId]?.toFixed(2) +
                                  "$"
                                : cartItem.price.toFixed(2) + "$"}
                        </p>
                    </div>
                ))}
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
                <p className='text-xl text-black font-bold'>Total</p>
                <div className=''>
                    <p className='mb-1 text-lg text-black font-bold'>
                        {subtotal?.toFixed(2)}$
                    </p>
                </div>
            </div>
            <Button
                onClick={handleCheckout}
                className='mt-6 w-full  rounded-md  b font-medium text-blue-50 '
            >
                Check out
            </Button>
        </div>
    );
};

export default OrderSummary;
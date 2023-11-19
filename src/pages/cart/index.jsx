import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import CartItem from "@/components/CartItem/CartItem";
import OrderSummary from "@/components/OrderSummary/OrderSummary";

import { CartContext } from "@/context/CartContext";

const Cart = () => {
    const { cartItems, updateCartItem } = useContext(CartContext);
    const calculateBorrowPrice = (item) => {
        const defaultDays = 15;
        const defaultPrice = item.price || 0; // Handle undefined price
        const pricePerDay = defaultPrice / defaultDays;
        return (item.borrowDays || 15) * pricePerDay; // Handle undefined borrowDays
    };
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            if (item.type === "borrow" && item.price && item.borrowDays) {
                return total + (item.price * item.borrowDays) / 15;
            } else if (item.price) {
                return total + item.price;
            } else {
                return total;
            }
        }, 0);
    };

    return (
        <div
            className={`bg-gray-100 pb-4 ${
                cartItems.length > 0
                    ? "pt-20"
                    : "flex justify-center items-center pt-0 h-screen"
            } pt-20`}
        >
            {cartItems.length > 0 ? (
                <div className='mx-auto flex max-w-5xl justify-between px-6 mb-10 md:space-x-6 xl:px-0'>
                    <h1 className='text-gray-500 text-center ml-4  text-2xl font-bold  '>
                        Your Cart ({cartItems.length})
                    </h1>
                    <Link
                        href='/products'
                        class='flex items-end gap-1 font-semibold text-indigo-600 hover:text-indigo-800  text-right'
                    >
                        Continue Shopping
                        <FaLongArrowAltRight />
                    </Link>
                </div>
            ) : null}
            {cartItems.length > 0 ? (
                <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
                    <div className='rounded-lg md:w-2/3'>
                        {cartItems.map((cartItem) => (
                            <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                                updateCart={updateCartItem}
                            />
                        ))}
                    </div>
                    <OrderSummary
                        cartItems={cartItems}
                        subtotal={calculateSubtotal()}
                    />
                </div>
            ) : (
                <div className='flex flex-col items-center mb-6 justify-center'>
                    <Image
                        src='/images/emty cart.svg'
                        width={700}
                        height={600}
                        alt='emty cart'
                    />
                    <p className='text-gray-500 font-semibold text-lg '>
                        Your cart is empty.
                    </p>
                    <Link
                        href='/products'
                        class='flex items-end gap-1 text-lg font-semibold text-indigo-600 hover:text-indigo-800  text-right'
                    >
                        Continue Shopping
                        <FaLongArrowAltRight size={22} className='text-lg' />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;

import React, { useContext } from "react";

import Button from "@/components/Buttons/Button";
import CartItem from "@/components/CartItem/CartItem";

import { CartContext } from "@/context/CartContext";

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    console.log("cart " + cartItems);

    return (
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between  p-8 sm:p-6 '>
            <div className='sm:w-[65%] bg-white py-20 flex flex-col'>
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>
            <div className='sm:w-[30%] flex flex-col p-2 bg-white text-cyan-500 font-semibold '>
                <h1 className='text-center p-4 '>SUMMARY</h1>
                <hr />
                <p className='p-4 '>SUBTOTAL</p>
                <hr />
                <h2 className='p-4'>TOTAL :</h2>
                <hr />
                <div className='p-4 text-center'>
                    <Button className=' mx-auto px-0 w-[80%] italic  '>
                        CHECKOUT
                    </Button>
                </div>
                <hr />
                <span className='italic text-center p-4'>Or</span>
                <hr />
                <div className=' p-4 md:py-4 text-center '>
                    <Button className='italic mx-auto px-0 w-[85%] '>
                        Checkout with <span>Paypal</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

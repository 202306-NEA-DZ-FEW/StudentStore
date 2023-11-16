import React, { useContext } from "react";

import CartItem from "@/components/CartItem/CartItem";

import { CartContext } from "@/context/CartContext";

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    console.log("cart " + cartItems);

    return (
        <div className='bg-white py-20 flex flex-col'>
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
        </div>
    );
};

export default Cart;

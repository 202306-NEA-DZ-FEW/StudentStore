import React, { useContext } from "react";

import { CartContext } from "@/context/CartContext";

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    return <div>cart</div>;
};

export default Cart;

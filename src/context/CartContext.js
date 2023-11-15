import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (existCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? console.log("Product already exist in the Cart")
                : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const value = { addItemToCart, cartItems };
};

import {
    addDoc,
    collection,
    deleteDoc,
    getDocs,
    onSnapshot,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

import { db } from "@/util/firebase";

import { useAuth } from "./AuthContext";

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    updateCartItem: () => {},
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const { currentUser } = useAuth();
    const currentUserUid = currentUser?.uid || "";
    const userId = currentUserUid;
    const cartRef = collection(db, "cart");

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = async (productToAdd) => {
        if (!currentUser) {
            console.log(
                "User is not authenticated. Unable to add items to cart."
            );
            return;
        }

        const q = query(
            cartRef,
            where("userId", "==", userId),
            where("productId", "==", productToAdd)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            console.log("Item already exists in cart");
            const cartItemDoc = snapshot.docs[0].ref;
            const quantity = snapshot.docs[0].data().quantity;
            await updateDoc(cartItemDoc, { quantity: quantity });
        } else {
            console.log("Adding new item");
            await addDoc(cartRef, {
                userId,
                productId: productToAdd.id,
                quantity: 1,
                title: productToAdd.title,
                price: productToAdd.price,
                type: productToAdd.type,
                image: productToAdd.pictures[1],
                category: productToAdd.category,
            });
        }
    };

    const updateCartItem = async (productId, updatedDetails) => {
        if (!currentUser) {
            console.log(
                "User is not authenticated. Unable to update items in the cart."
            );
            return;
        }

        const q = query(
            cartRef,
            where("userId", "==", userId),
            where("productId", "==", productId)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            const cartItemDoc = snapshot.docs[0].ref;
            await updateDoc(cartItemDoc, updatedDetails);
        } else {
            console.log("Item not found in cart");
        }
    };

    const removeItemFromCart = async (productToDelete) => {
        if (!currentUser) {
            console.log(
                "User is not authenticated. Unable to remove items from the cart."
            );
            return;
        }

        const q = query(
            cartRef,
            where("userId", "==", userId),
            where("productId", "==", productToDelete)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            console.log("Removing item from cart");
            const cartItemDoc = snapshot.docs[0].ref;
            await deleteDoc(cartItemDoc);
        } else {
            console.log("Item not found in cart");
        }
    };

    useEffect(() => {
        const fetchCartItems = () => {
            const q = query(cartRef, where("userId", "==", userId));

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const items = [];

                snapshot.docs.forEach((doc) => {
                    items.push({ ...doc.data(), id: doc.id });
                });
                setCartItems(items);
            });
            return () => {
                // Detach the listener when the component unmounts
                unsubscribe();
            };
        };

        fetchCartItems();
    }, [userId]);

    const value = {
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        updateCartItem,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

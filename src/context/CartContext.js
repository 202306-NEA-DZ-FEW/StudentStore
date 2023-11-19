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
import { toast } from "react-toastify";

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
            toast.error(
                "You are not logged in. Please log in to add items to your cart."
            );
            return;
        }

        const q = query(
            cartRef,
            where("userId", "==", userId),
            where("productId", "==", productToAdd.id)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            toast.info("Item is already in your cart.");
            const cartItemDoc = snapshot.docs[0].ref;
            const quantity = snapshot.docs[0].data().quantity;
            await updateDoc(cartItemDoc, { quantity: quantity });
        } else {
            toast.success("Item added to your cart.");
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
            toast.error("Item not found in your cart.");
        }
    };

    const removeItemFromCart = async (productToDelete) => {
        const q = query(
            cartRef,
            where("userId", "==", userId),
            where("productId", "==", productToDelete)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            toast.success("Item removed from your cart.");
            const cartItemDoc = snapshot.docs[0].ref;
            await deleteDoc(cartItemDoc);
        } else {
            toast.error("Item not found in your cart.");
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
        <>
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        </>
    );
};

import {
    addDoc,
    collection,
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
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const { currentUser } = useAuth();
    const currentUserUid = currentUser?.uid || "";
    const userId = currentUserUid;

    console.log("CartProvider rendering");

    const addItemToCart = async (productToAdd) => {
        if (!currentUser) {
            console.log(
                "User is not authenticated. Unable to add items to cart."
            );
            return;
        }

        const cartRef = collection(db, "cart");
        const q = query(
            cartRef,
            where("userId", "==", userId),
            where("productId", "==", productToAdd.id)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            console.log("Item already exists in cart");
            const cartItemDoc = snapshot.docs[0].ref;
            const quantity = snapshot.docs[0].data().quantity;
            await updateDoc(cartItemDoc, { quantity: quantity });
        } else {
            console.log("Item does not exist in cart, adding new item");
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

    useEffect(() => {
        const fetchCartItems = () => {
            const cartRef = collection(db, "cart");
            const q = query(cartRef, where("userId", "==", userId));

            onSnapshot(q, (snapshot) => {
                const items = [];

                snapshot.docs.forEach((doc) => {
                    items.push({ ...doc.data(), id: doc.id });
                });
                setCartItems(items);
            });
        };

        fetchCartItems();
    }, [userId]);

    const value = { addItemToCart, cartItems };
    console.log(cartItems);

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

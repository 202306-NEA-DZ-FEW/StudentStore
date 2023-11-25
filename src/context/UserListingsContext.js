import { createContext, useContext, useEffect, useState } from "react";
import { onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/util/firebase";
import { useAuth } from "./AuthContext";

export const UserListingsContext = createContext({
    userSaleItemCount: 0,
    userBorrowItemCount: 0,
});

export const UserListingsProvider = ({ children }) => {
    const { currentUser } = useAuth();
    const currentUserUid = currentUser?.uid || "";
    const userId = currentUserUid;
    const [userSaleItemCount, setUserSaleItemCount] = useState(0);
    const [userBorrowItemCount, setUserBorrowItemCount] = useState(0);

    useEffect(() => {
        const fetchUserListings = async () => {
            const userSaleItemsQuery = query(
                db.collection("products"),
                where("currentUserUid", "==", userId),
                where("type", "==", "sale")
            );

            const userBorrowItemsQuery = query(
                db.collection("products"),
                where("currentUserUid", "==", userId),
                where("type", "==", "borrow")
            );

            const userSaleItemsUnsubscribe = onSnapshot(
                userSaleItemsQuery,
                (snapshot) => {
                    setUserSaleItemCount(snapshot.docs.length);
                }
            );

            const userBorrowItemsUnsubscribe = onSnapshot(
                userBorrowItemsQuery,
                (snapshot) => {
                    setUserBorrowItemCount(snapshot.docs.length);
                }
            );

            return () => {
                // Detach the listeners when the component unmounts
                userSaleItemsUnsubscribe();
                userBorrowItemsUnsubscribe();
            };
        };

        if (userId) {
            fetchUserListings();
        }
    }, [userId]);

    const value = {
        userSaleItemCount,
        userBorrowItemCount,
    };

    return (
        <UserListingsContext.Provider value={value}>
            {children}
        </UserListingsContext.Provider>
    );
};

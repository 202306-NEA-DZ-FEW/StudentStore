import { createContext, useContext, useEffect, useState } from "react";
import { onSnapshot, collection, query, where } from "firebase/firestore";
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
            console.log("Fetching user listings for user ID:", currentUserUid);

            const allProductsQuery = query(
                collection(db, "products"),
                where("currentUserUid", "==", userId)
            );

            const allProductsUnsubscribe = onSnapshot(
                allProductsQuery,
                (snapshot) => {
                    console.log("Fetched products snapshot:", snapshot.docs);

                    const saleProducts = snapshot.docs.filter(
                        (doc) => doc.data().type === "sale"
                    );
                    const borrowProducts = snapshot.docs.filter(
                        (doc) => doc.data().type === "borrow"
                    );

                    setUserSaleItemCount(saleProducts.length);
                    setUserBorrowItemCount(borrowProducts.length);
                }
            );

            return () => {
                allProductsUnsubscribe();
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

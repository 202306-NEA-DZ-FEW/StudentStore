// mylistings/index.js

import React, { useEffect, useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import ProductCard from "@/components/ProductCard/ProductCard";
import { app, db, auth } from "@/util/firebase";
import {
    collection,
    onSnapshot,
    addDoc,
    where,
    getDocs,
} from "firebase/firestore";

const MyListings = () => {
    const [userListings, setUserListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCurrentUserId = () => {
            const user = auth.currentUser;
            return user ? user.uid : null;
        };

        const fetchData = async () => {
            try {
                const userId = getCurrentUserId();

                if (userId) {
                    const userRef = collection(db, "userinfo").doc(userId);
                    const userDoc = await userRef.get();

                    if (userDoc.exists()) {
                        const userProductsRef = collection(db, "products");
                        const querySnapshot = await userProductsRef
                            .where("userId", "==", userId)
                            .get();

                        const listings = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }));

                        setUserListings(listings);
                        setLoading(false);
                    } else {
                        console.error("User not found");
                        setLoading(false);
                    }
                } else {
                    console.error("User ID not available");
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <SideBar />
            <div>
                <h1>My Listings</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {userListings.map((listing) => (
                            <ProductCard key={listing.id} data={listing} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyListings;

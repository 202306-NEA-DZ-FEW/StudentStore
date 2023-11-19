// mylistings.jsx

import React, { useEffect, useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import ProductCard from "@/components/ProductCard/ProductCard";
import { db, auth } from "@/util/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

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
                    const userProductsQuery = query(
                        collection(db, "products"),
                        where("currentUserUid", "==", userId)
                    );

                    const unsubscribe = onSnapshot(
                        userProductsQuery,
                        (querySnapshot) => {
                            const listings = querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }));

                            setUserListings(listings);
                            setLoading(false);
                        },
                        (error) => {
                            console.error(
                                "Error getting user listings: ",
                                error
                            );
                            setLoading(false);
                        }
                    );

                    // Cleanup listener when component unmounts
                    return () => {
                        unsubscribe();
                    };
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

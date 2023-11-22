import React, { useEffect, useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import ListingCard from "@/components/listingcard/ListingCard";
import { db, auth } from "@/util/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const MyOrders = () => {
    const [userOrders, setUserOrders] = useState([]);
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
                        collection(db, "cart"),
                        where("currentUserUid", "==", userId)
                    );

                    const unsubscribe = onSnapshot(
                        userProductsQuery,
                        (querySnapshot) => {
                            const orders = querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }));

                            setUserOrders(orders);
                            setLoading(false);
                        },
                        (error) => {
                            console.error("Error getting user orders: ", error);
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
        <div className='flex'>
            <SideBar />
            <div className='flex flex-wrap justify-around items-start p-4'>
                {loading ? (
                    <p>Loading....</p>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {userOrders.map((order) => (
                            <div
                                key={order.id}
                                className='bg-white shadow-xl rounded-md overflow-hidden'
                            >
                                <ListingCard product={order} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;

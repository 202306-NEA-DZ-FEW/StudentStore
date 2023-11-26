import React, { useEffect, useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import OrderCard from "@/components/OrderCard/OrderCard";
import { db, auth } from "@/util/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Loader from "@/components/Loader/Loader";

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
                console.log("Current User ID:", userId);

                if (userId) {
                    const userProductsQuery = query(
                        collection(db, "cart"),
                        where("userId", "==", userId)
                    );

                    const unsubscribe = onSnapshot(
                        userProductsQuery,
                        (querySnapshot) => {
                            const orders = querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }));
                            console.log("Current User ID:", orders);

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
                    <Loader />
                ) : (
                    <>
                        {userOrders.map((order) => (
                            <div
                                key={order.id}
                                className=' rounded-md overflow-hidden mb-4'
                                style={{
                                    flex: "1 0 calc(25% - 1rem)",
                                    minWidth: "250px",
                                }}
                            >
                                <OrderCard product={order} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default MyOrders;

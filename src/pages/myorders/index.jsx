import React, { useEffect, useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import OrderCard from "@/components/OrderCard/OrderCard";
import { db, auth } from "@/util/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Loader from "@/components/Loader/Loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

const MyOrders = () => {
    const [userOrders, setUserOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation("myListings");

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
            <SideBar t={t} />
            <div className='flex flex-wrap justify-around items-start p-4'>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {userOrders.length > 0 ? (
                            userOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className='rounded-md overflow-hidden mb-4'
                                    style={{
                                        flex: "1 0 calc(25% - 1rem)",
                                        minWidth: "250px",
                                    }}
                                >
                                    <OrderCard product={order} />
                                </div>
                            ))
                        ) : (
                            <div className='flex flex-col items-center justify-center w-full h-full'>
                                <div className='flex flex-col items-center lg:ml-80'>
                                    <Image
                                        src='/images/notfound1.svg'
                                        alt='Placeholder'
                                        width={600}
                                        height={600}
                                        style={{
                                            maxHeight: "100vh",
                                        }}
                                    />
                                    <p className='mt-4 text-lg font-bold'>
                                        No orders available.
                                    </p>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "myListings"])),
            // Will be passed to the page component as props
        },
    };
}

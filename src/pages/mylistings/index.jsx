import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";

import ListingCard from "@/components/listingcard/ListingCard";
import SideBar from "@/components/SideBar/SideBar";

import { auth, db } from "@/util/firebase";
import Loader from "@/components/Loader/Loader";

const MyListings = () => {
    const [userListings, setUserListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation("myListings");
    const route = useRouter();

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
        <div className='flex' dir={`${route?.locale === "ar" ? "rtl" : "ltr"}`}>
            <SideBar t={t} router={route} />
            <div className='flex flex-wrap justify-around items-start p-4'>
                {loading ? (
                    <Loader />
                ) : (
                    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 mx-auto sm:mx-4'>
                        {userListings.map((listing) => (
                            <div
                                key={listing.id}
                                className='bg-white shadow-xl rounded-md overflow-hidden'
                            >
                                <ListingCard
                                    t={t}
                                    route={route}
                                    product={listing}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyListings;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "myListings"])),
            // Will be passed to the page component as props
        },
    };
}

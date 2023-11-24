// components/ProfileComponent.js
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/util/firebase";

const ProfileComponent = () => {
    const auth = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const userDocRef = doc(db, "userinfo", auth.currentUser.uid);
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    console.log("User document not found");
                }
            }
        };

        fetchUserData();
    }, [auth.currentUser]);

    return (
        <div className='container mx-auto mt-8 p-4 bg-gray-100 rounded-md'>
            <h1 className='text-4xl font-bold mb-4 text-[#32314D] text-center'>
                Profile
            </h1>
            {userData ? (
                <div className='flex flex-col md:flex-row items-center mb-4'>
                    <div className='w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full mb-4 md:mb-0'>
                        {/* Add the user's profile picture here */}
                        <img
                            src={
                                userData.photo ||
                                "https://via.placeholder.com/150"
                            }
                            alt='Profile Picture'
                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='ml-4 text-center md:text-left '>
                        <p className='text-2xl font-bold text-[#585785] mb-2 '>
                            {userData.name} {userData.surname}
                        </p>
                        <p className='text-gray-600'>{userData.email}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            {userData && (
                <>
                    <p className='text-[#585785] text-center'>
                        Phone Number: {userData.phoneNumber}
                    </p>
                    <p className='text-[#585785] text-center'>
                        Gender: {userData.gender}
                    </p>
                    <p className='text-[#585785] text-center'>
                        School: {userData.school}
                    </p>
                    <p className='text-[#585785] text-center'>
                        Location: {userData.city}, {userData.country}
                    </p>
                </>
            )}
        </div>
    );
};

export default ProfileComponent;

// components/ProfileComponent.js
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext"; // Adjust the path based on your project structure
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/util/firebase"; // Adjust the path based on your project structure

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
            <h1 className='text-3xl font-bold mb-4'>Profile</h1>
            {userData ? (
                <div>
                    <div className='flex items-center mb-4'>
                        <div className='w-16 h-16 overflow-hidden rounded-full'>
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
                        <div className='ml-4'>
                            <p className='text-xl font-bold'>
                                {userData.name} {userData.surname}
                            </p>
                            <p className='text-gray-600'>{userData.email}</p>
                        </div>
                    </div>
                    <p>Phone Number: {userData.phoneNumber}</p>
                    <p>Gender: {userData.gender}</p>
                    <p>School: {userData.school}</p>
                    <p>
                        Location: {userData.city}, {userData.country}
                    </p>

                    {/* Add other details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProfileComponent;

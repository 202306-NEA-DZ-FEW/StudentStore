import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/util/firebase";

const ProfileComponent = () => {
    const auth = useAuth();
    const [userData, setUserData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({});

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

    const handleEditClick = (field) => {
        setEditMode(true);
        // Set the initial value of the input field
        setEditedData({ [field]: userData[field] || "" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSaveClick = async () => {
        // Update the user's data in Firestore
        const userDocRef = doc(db, "userinfo", auth.currentUser.uid);
        await updateDoc(userDocRef, editedData);

        // Turn off edit mode
        setEditMode(false);
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='container mx-auto p-4 bg-gray-100 rounded-md'>
                <h1 className='text-4xl font-bold mb-4 text-[#32314D] text-center'>
                    Profile
                </h1>
                {userData ? (
                    <div className='flex flex-col items-center mb-4'>
                        <div className='w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full mb-4'>
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
                        <div className='text-center'>
                            <p className='text-2xl font-bold text-[#585785] mb-2'>
                                {userData.name} {userData.surname}
                            </p>
                            <div className='flex items-center text-lg text-gray-600 mb-4'>
                                <span className='mr-2'>
                                    <i className='fas fa-envelope'></i>
                                </span>
                                {editMode ? (
                                    <input
                                        type='text'
                                        name='email'
                                        value={editedData.email || ""}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    userData.email
                                )}
                                {editMode && (
                                    <button
                                        className='ml-2 text-[#FF8A57] cursor-pointer'
                                        onClick={() => handleSaveClick()}
                                    >
                                        Save
                                    </button>
                                )}
                                {!editMode && (
                                    <span
                                        className='ml-2 text-[#FF8A57] cursor-pointer'
                                        onClick={() => handleEditClick("email")}
                                    >
                                        <i className='fas fa-edit'></i>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                {userData && (
                    <>
                        <div className='flex items-center text-[#585785] text-lg mb-4'>
                            <span className='mr-2'>
                                <i className='fas fa-phone-alt'></i>
                            </span>
                            Phone Number: {userData.phoneNumber}
                            {editMode && (
                                <span
                                    className='ml-2 text-[#FF8A57] cursor-pointer'
                                    onClick={() =>
                                        handleEditClick("phoneNumber")
                                    }
                                >
                                    <i className='fas fa-edit'></i>
                                </span>
                            )}
                        </div>
                        <div className='flex items-center text-[#585785] text-lg mb-4'>
                            <span className='mr-2'>
                                <i className='fas fa-venus-mars'></i>
                            </span>
                            Gender: {userData.gender}
                            {editMode && (
                                <span
                                    className='ml-2 text-[#FF8A57] cursor-pointer'
                                    onClick={() => handleEditClick("gender")}
                                >
                                    <i className='fas fa-edit'></i>
                                </span>
                            )}
                        </div>
                        <div className='flex items-center text-[#585785] text-lg mb-4'>
                            <span className='mr-2'>
                                <i className='fas fa-school'></i>
                            </span>
                            School: {userData.school}
                            {editMode && (
                                <span
                                    className='ml-2 text-[#FF8A57] cursor-pointer'
                                    onClick={() => handleEditClick("school")}
                                >
                                    <i className='fas fa-edit'></i>
                                </span>
                            )}
                        </div>
                        <div className='flex items-center text-[#585785] text-lg mb-4'>
                            <span className='mr-2'>
                                <i className='fas fa-map-marker-alt'></i>
                            </span>
                            Location: {userData.city}, {userData.country}
                            {editMode && (
                                <span
                                    className='ml-2 text-[#FF8A57] cursor-pointer'
                                    onClick={() => handleEditClick("location")}
                                >
                                    <i className='fas fa-edit'></i>
                                </span>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfileComponent;

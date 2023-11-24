import React, { useState } from "react";

const ProfileComponent = () => {
    const [userData, setUserData] = useState({
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "123-456-7890",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = () => {
        // Implement update logic here
        setIsEditing(false);
    };

    return (
        <div className='container mx-auto mt-8 p-4 bg-gray-100 rounded-md'>
            <h1 className='text-3xl font-bold mb-4'>Profile</h1>
            {userData ? (
                <div>
                    <div className='flex items-center mb-4'>
                        <div className='w-16 h-16 overflow-hidden rounded-full'>
                            {/* Add the user's profile picture here */}
                            <img
                                src='https://via.placeholder.com/150'
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
                    {/* Add other details as needed */}

                    {/* Edit button */}
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded-md'
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>

                    {/* Edit mode */}
                    {isEditing && (
                        <div className='mt-4'>
                            <input
                                className='border rounded-md px-2 py-1 mr-2'
                                type='text'
                                placeholder='New Name'
                            />

                            {/* Save button */}
                            <button
                                className='bg-green-500 text-white px-4 py-2 rounded-md'
                                onClick={handleUpdate}
                            >
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProfileComponent;

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/util/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
import Notification from "@/components/Notification/Notitification";
function EditForm() {
    const auth = useAuth();

    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        city: "",
        country: "",
        zip: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleCloseNotification = () => {
        setError(null);
        setSuccess(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            setError("Password and confirm password do not match");
            return;
        }

        try {
            setLoading(true);
            const user = auth.currentUser;

            if (userData.name) {
                await updateProfile(user, {
                    displayName: userData.name,
                });
            }

            // Update user data in Firestore
            const userDocRef = doc(db, "userinfo", user.uid);
            await updateDoc(userDocRef, {
                name: userData.name,
                surname: userData.surname,
                email: userData.email,
                phoneNumber: userData.phoneNumber,
                password: userData.password,
                city: userData.city,
                country: userData.country,
                zip: userData.zip,
            });

            setSuccess(true);
        } catch (error) {
            setError("Error updating user information: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        // component
        <div className='flex justify-center items-center h-screen'>
            <form className='w-full max-w-lg' onSubmit={handleSubmit}>
                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Surname'
                        name='surname'
                        value={userData.surname}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Phone number'
                        name='phoneNumber'
                        value={userData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Password'
                        name='password'
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        value={userData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-wrap w-full mb-4'>
                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-[#21567E] placeholder-[#21567E] text-xs font-bold mb-2'
                            htmlFor='grid-city'
                        >
                            Address
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder='City'
                            name='city'
                            value={userData.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-transparent placeholder-[#21567E] text-xs font-bold mb-2'
                            htmlFor='grid-country'
                        >
                            Country
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder='Country'
                            name='country'
                            value={userData.country}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-transparent placeholder-[#21567E] text-xs font-bold mb-2'
                            htmlFor='grid-zip'
                        >
                            ZIP
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder='ZIP'
                            name='zip'
                            value={userData.zip}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* Loading state */}
                {loading && (
                    <div className='loading loading-spinner text-neutral'></div>
                )}

                {/* Error state */}
                {error && (
                    <Notification
                        type='error'
                        message={error}
                        onClose={handleCloseNotification}
                    />
                )}

                {/* Success state */}
                {success && (
                    <Notification
                        type='success'
                        message='Your information has been updated successfully'
                        onClose={handleCloseNotification}
                    />
                )}

                <div className='flex justify-center items-center'>
                    <button className='bg-[#FF8A57] hover:bg-transparent hover:text-[#FF8A57] hover:border-[#FF8A57] border hover:border-2 text-white font-bold py-2 px-7 rounded'>
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;

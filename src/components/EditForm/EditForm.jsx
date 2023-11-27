import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/util/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
import Notification from "@/components/Notification/Notitification";
import { useRouter } from "next/router";
function EditForm({ t }) {
    const auth = useAuth();
    const route = useRouter();
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
            setError(`${t("password and confirm password do not match")} `);
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
            setError(
                `${t("error updating user information:")} ` + error.message
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        // component
        <div
            className='flex justify-center items-center h-screen'
            dir={route.locale === "ar" ? "rtl" : "ltr"}
        >
            <form className='w-full max-w-lg' onSubmit={handleSubmit}>
                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder={t("name")}
                        name='name'
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder={t("surname")}
                        name='surname'
                        value={userData.surname}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder={t("email")}
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='text'
                        placeholder={t("phone number")}
                        name='phoneNumber'
                        value={userData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='password'
                        placeholder={t("password")}
                        name='password'
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full px-3 mb-4'>
                    <input
                        className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                        type='password'
                        placeholder={t("confirm password")}
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
                            {t("address")}
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder={t("city")}
                            name='city'
                            value={userData.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-[#21567E] placeholder-[#21567E] text-xs font-bold mb-2'
                            htmlFor='grid-country'
                        >
                            {t("country")}
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder={t("country")}
                            name='country'
                            value={userData.country}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-[#21567E] placeholder-[#21567E] text-xs font-bold mb-2'
                            htmlFor='grid-zip'
                        >
                            {t("zip")}
                        </label>
                        <input
                            className='appearance-none block w-full bg-fff text-[#21567E] placeholder-[#21567E] border border-[#21567E] rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-[#F1F6FA] focus:border-[#21567E] focus:border-2'
                            type='text'
                            placeholder={t("zip")}
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
                        message={t(
                            "your information has been updated successfully"
                        )}
                        onClose={handleCloseNotification}
                    />
                )}

                <div className='flex justify-center items-center'>
                    <button
                        className={`bg-[#FF8A57] hover:bg-transparent hover:text-[#FF8A57] hover:border-[#FF8A57] border hover:border-2 text-white font-bold py-2 rounded ${
                            route.locale === "fr" ? "px-0 w-64" : "px-7"
                        }`}
                    >
                        {t("save changes")}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;

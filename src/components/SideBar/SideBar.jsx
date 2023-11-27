import { updateProfile } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image.js";
import Link from "next/link";
import { useRouter } from "next/router.js";
import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsClipboard2Fill, BsFillBoxSeamFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import {
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "@/context/AuthContext.js";

import { db, storage } from "../../util/firebase.js";

const Sidebar = ({ t }) => {
    const [selectedLink, setSelectedLink] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [collapsed, setCollapsed] = useState(false);
    const { currentUser, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const route = useRouter();

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (currentUser) {
                const userId = currentUser.uid;
                const userInfoRef = doc(db, "userinfo", userId);
                const userInfoSnapshot = await getDoc(userInfoRef);

                if (userInfoSnapshot.exists()) {
                    const userInfoData = userInfoSnapshot.data();
                    setUserInfo(userInfoData);
                }
            }
        };

        fetchUserInfo();
    }, [currentUser]);

    const handleLinkClick = (link) => {
        if (collapsed) {
            setCollapsed(false);
        } else {
            setSelectedLink(link);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            route.push("/signin");
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        console.log(file);

        if (file) {
            try {
                setLoading(true);
                // Create a reference to the storage location
                const storageRef = ref(
                    storage,
                    `profile-images/${currentUser.uid}/${file.name}`
                );
                const snapshot = await uploadBytes(storageRef, file);

                // Get the URL of the uploaded image
                const imageUrl = await getDownloadURL(snapshot.ref);

                // Update the user's profile with the new image URL
                await updateProfile(currentUser, {
                    photoURL: imageUrl,
                });
                // Update the user's profile in Firestore
                const userDocRef = doc(db, "userinfo", currentUser.uid);
                await updateDoc(userDocRef, { photo: imageUrl });

                // Force a re-render to reflect the updated user information
                setUserInfo({ ...userInfo, photoURL: imageUrl });
            } catch (error) {
                console.error("Error updating profile image:", error);
            } finally {
                // Set loading back to false when the image upload is complete
                setLoading(false);
            }
        }
    };

    return (
        <div
            className={`bg-gray-200 min-h-screen p-4 text-[#585785] flex flex-col ${
                collapsed
                    ? "w-20 transition-all duration-500 ease-in-out "
                    : "w-64 transition-all duration-500 ease-in-out overflow-hidden"
            }`}
        >
            {route?.locale === "ar" ? (
                <MdOutlineKeyboardDoubleArrowRight
                    className={`cursor-pointer text-4xl self-end hover:text-[#FF8A57] ${
                        collapsed ? "transform rotate-180" : ""
                    }`}
                    onClick={handleToggleSidebar}
                />
            ) : (
                <MdOutlineKeyboardDoubleArrowLeft
                    className={`cursor-pointer text-4xl self-end hover:text-[#FF8A57] ${
                        collapsed ? "transform rotate-180" : ""
                    }`}
                    onClick={handleToggleSidebar}
                />
            )}

            <div className='flex flex-col items-center mt-10 mb-4 space-y-4'>
                <label
                    htmlFor='profileImageInput'
                    className={`relative cursor-pointer transition-all duration-500 ease-in-out ring ring-[#90eee1] hover:ring-[#54fce5] border  border-[#585785] hover:border-[#90eee1] ${
                        collapsed ? "w-12 h-12" : "w-24 h-24"
                    } rounded-full`}
                >
                    <Image
                        src={currentUser?.photoURL || "/images/profile.jpg"}
                        alt='profile-pic'
                        width={220}
                        height={220}
                        className={`object-cover transition-all duration-500 ease-in-out ${
                            collapsed ? "w-12 h-12" : "w-24 h-24"
                        } rounded-full mb-2 cursor-pointer  `}
                    />
                    {loading && (
                        <div
                            className={`absolute inset-0  border  border-[#585785]  flex items-center justify-center bg-gray-500  rounded-full ${
                                collapsed ? "w-12 h-12" : "w-24 h-24"
                            }`}
                        >
                            <span className='loading loading-spinner loading-lg'></span>
                        </div>
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        id='profileImageInput'
                        className='hidden'
                        onChange={handleImageChange}
                    />

                    <span className='absolute -bottom-3 left-1/2 transform hover:text-[#24524b]  -translate-x-1/2  text-[#585785]'>
                        <FaEdit className='inline' size={collapsed ? 12 : 24} />
                    </span>
                </label>

                {!collapsed && userInfo && (
                    <div className='text-center'>
                        <h2 className='text-xl text-[#585785] font-bold mb-1'>{`${userInfo?.name} ${userInfo?.surname}`}</h2>
                        <p className='text-[#585785] mb-2'>{userInfo?.email}</p>
                        <p className='text-[#585785] mb-4'>{`${userInfo?.city}, ${userInfo?.country}`}</p>
                    </div>
                )}
            </div>
            <div className='flex flex-col  space-y-5'>
                <Link href='/editprofile' passHref>
                    <div
                        className={`flex items-center text-[#585785] text-[16px] lg:text-[22px] hover:text-[#FF8A57] md:text-xl cursor-pointer font-semibold p-3 rounded-lg ${
                            selectedLink === "EditProfile" ? "bg-[#90EEE1]" : ""
                        }`}
                        onClick={() => handleLinkClick("EditProfile")}
                    >
                        <span
                            className={`mr-2 ${
                                route.locale === "ar" ? "ml-2" : ""
                            }`}
                        >
                            <FiEdit3 />
                        </span>
                        {!collapsed && (
                            <span className=' sm:inline'>
                                {t("Edit Profile")}
                            </span>
                        )}
                    </div>
                </Link>
                <Link href='/mylistings' passHref>
                    <div
                        className={`flex items-center text-[#585785] lg:text-[22px] hover:text-[#FF8A57] md:text-xl cursor-pointer font-semibold p-3 rounded-lg ${
                            selectedLink === "MyListings" ? "bg-[#90EEE1]" : ""
                        }`}
                        onClick={() => handleLinkClick("MyListings")}
                    >
                        <span
                            className={`mr-2 ${
                                route.locale === "ar" ? "ml-2" : ""
                            }`}
                        >
                            <BsClipboard2Fill />
                        </span>
                        {!collapsed && (
                            <span className=' sm:inline'>
                                {t("My Listings")}
                            </span>
                        )}
                    </div>
                </Link>

                <Link href='/myorders' passHref>
                    <div
                        className={`flex items-center text-[#585785] lg:text-[22px] hover:text-[#FF8A57] md:text-xl cursor-pointer font-semibold p-3 rounded-lg ${
                            selectedLink === "MyOrders" ? "bg-[#90EEE1]" : ""
                        }`}
                        onClick={() => handleLinkClick("MyOrders")}
                    >
                        <span
                            className={`mr-2 ${
                                route.locale === "ar" ? "ml-2" : ""
                            }`}
                        >
                            <BsFillBoxSeamFill />
                        </span>
                        {!collapsed && (
                            <span className=' sm:inline'>{t("My Orders")}</span>
                        )}
                    </div>
                </Link>

                <div
                    className={`flex items-center text-red-500 hover:text-red-600 lg:text-[22px]  md:text-xl cursor-pointer font-semibold p-3 rounded-lg `}
                    onClick={handleLogout}
                >
                    <span
                        className={`mr-2 ${
                            route.locale === "ar" ? "ml-2" : ""
                        }`}
                    >
                        <BiLogOut />
                    </span>
                    {!collapsed && (
                        <span className='sm:inline'>{t("Logout")}</span>
                    )}
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Sidebar;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import firebase from "firebase/app";
import "firebase/firestore";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../util/firebase.js";
import { FiEdit3 } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BsClipboard2Fill, BsFillBoxSeamFill } from "react-icons/bs";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userId = "e43JDIG05abGPsH43xEKBNsD49e2";
            const userInfoRef = doc(
                db,
                "userinfo",
                "e43JDIG05abGPsH43xEKBNsD49e2"
            );
            const userInfoSnapshot = await getDoc(userInfoRef);

            if (userInfoSnapshot.exists()) {
                const userInfoData = userInfoSnapshot.data();
                setUserInfo(userInfoData);
            }
        };
        fetchUserInfo();
    }, []);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
        // Handle additional logic if needed for the clicked link
    };

    const handleLogout = () => {
        // Handle logout logic
    };

    return (
        <div
            className={`bg-gray-200 w-64 min-h-screen p-4 text-[#585785] flex flex-col ${
                open ? "sm:w-20" : "sm:w-64"
            }`}
        >
            <div className='flex flex-col items-center mt-20 mb-4 space-y-4'>
                <img
                    src={userInfo ? userInfo.photo : ""}
                    alt='User'
                    className='w-25 h-25 rounded-full mb-2 '
                />
                {userInfo && (
                    <div className='text-center '>
                        <h2 className='text-xl text-[#585785] font-bold mb-1'>{`${userInfo.name} ${userInfo.surname}`}</h2>
                        <p className='text-[#585785] mb-2'>{userInfo.email}</p>
                        <p className='text-[#585785] mb-4 '>{`${userInfo.address.city}, ${userInfo.address.country}`}</p>
                    </div>
                )}
            </div>
            <div className='flex flex-col items-center space-y-10'>
                <div
                    className={`flex items-center text-[#585785] text-2xl cursor-pointer font-semibold ${
                        selectedLink === "EditProfile" ? "bg-[#90EEE1]" : ""
                    }`}
                    onClick={() => handleLinkClick("EditProfile")}
                >
                    <span className='mr-2'>
                        <FiEdit3 />
                    </span>
                    Edit Profile
                </div>
                <div
                    className={`flex items-center text-[#585785] text-2xl cursor-pointer font-semibold ${
                        selectedLink === "MyListings" ? "bg-[#90EEE1]" : ""
                    }`}
                    onClick={() => handleLinkClick("MyListings")}
                >
                    <span className='mr-2'>
                        <BsClipboard2Fill />
                    </span>
                    My Listings
                </div>
                <div
                    className={`flex items-center text-[#585785] text-2xl cursor-pointer font-semibold ${
                        selectedLink === "MyOrders" ? "bg-[#90EEE1]" : ""
                    }`}
                    onClick={() => handleLinkClick("MyOrders")}
                >
                    <span className='mr-2'>
                        <BsFillBoxSeamFill />
                    </span>
                    My Orders
                </div>
            </div>
            <div className='mt-auto mb-4'>
                <div
                    className='flex items-center text-red-500 text-lg cursor-pointer'
                    onClick={handleLogout}
                >
                    <BiLogOut className='mr-2' />
                    Logout
                </div>
            </div>
        </div>
    );
};

export default SideBar;

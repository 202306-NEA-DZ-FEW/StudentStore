import React, { useEffect, useState } from "react";
import Link from "next/link";
import firebase from "firebase/app";
import "firebase/firestore";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../util/firebase.js";
import { FiEdit3 } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BsClipboard2Fill, BsFillBoxSeamFill } from "react-icons/bs";
import {
    MdKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const SideBar = () => {
    const [selectedLink, setSelectedLink] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [collapsed, setCollapsed] = useState(false);

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
        if (collapsed) {
            setCollapsed(false);
        } else {
            setSelectedLink(link);
        }
    };

    const handleLogout = () => {
        // Handle logout logic
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

    return (
        <div
            className={`bg-gray-200 min-h-screen p-4 text-[#585785] flex flex-col ${
                collapsed ? "w-20" : "w-64"
            }`}
        >
            <MdOutlineKeyboardDoubleArrowLeft
                className={`cursor-pointer text-4xl ${
                    collapsed ? "transform rotate-180" : ""
                }`}
                onClick={handleToggleSidebar}
            />

            <div className='flex flex-col items-center mt-20 mb-4 space-y-4'>
                <img
                    src={userInfo ? userInfo.photo : ""}
                    alt='User'
                    className='w-25 h-25 rounded-full mb-2'
                />
                {!collapsed && userInfo && (
                    <div className='text-center'>
                        <h2 className='text-xl text-[#585785] font-bold mb-1'>{`${userInfo.name} ${userInfo.surname}`}</h2>
                        <p className='text-[#585785] mb-2'>{userInfo.email}</p>
                        <p className='text-[#585785] mb-4'>{`${userInfo.address.city}, ${userInfo.address.country}`}</p>
                    </div>
                )}
            </div>
            <div className='flex flex-col items-center space-y-10'>
                <div
                    className={`flex items-center text-[#585785] text-2xl cursor-pointer font-semibold p-3 rounded-lg ${
                        selectedLink === "EditProfile" ? "bg-[#90EEE1]" : ""
                    }`}
                    onClick={() => handleLinkClick("EditProfile")}
                >
                    <span className='mr-2'>
                        <FiEdit3 />
                    </span>
                    {!collapsed && (
                        <span className='hidden sm:inline'>Edit Profile</span>
                    )}
                </div>
                <div
                    className={`flex items-center text-[#585785] text-2xl cursor-pointer font-semibold p-3 rounded-lg ${
                        selectedLink === "MyListings" ? "bg-[#90EEE1]" : ""
                    }`}
                    onClick={() => handleLinkClick("MyListings")}
                >
                    <span className='mr-2'>
                        <BsClipboard2Fill />
                    </span>
                    {!collapsed && (
                        <span className='hidden sm:inline'>My Listings</span>
                    )}
                </div>
                <div
                    className={`flex items-center text-[#585785] text-2xl cursor-pointer font-semibold  ${
                        selectedLink === "MyOrders" ? "bg-[#90EEE1]" : ""
                    }`}
                    onClick={() => handleLinkClick("MyOrders")}
                >
                    <span className='mr-2'>
                        <BsFillBoxSeamFill />
                    </span>
                    {!collapsed && (
                        <span className='hidden sm:inline'>My Orders</span>
                    )}
                </div>
            </div>
            {!collapsed && (
                <div className='mt-auto mb-4'>
                    <div
                        className='flex items-center text-red-500 text-lg cursor-pointer'
                        onClick={handleLogout}
                    >
                        <BiLogOut className='mr-2' />
                        Logout
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;

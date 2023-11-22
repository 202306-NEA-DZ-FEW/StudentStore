// Sidebar.jsx

import { doc, getDoc } from "firebase/firestore";
import Image from "next/image.js";
import Link from "next/link";
import { useRouter } from "next/router.js";
import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsClipboard2Fill, BsFillBoxSeamFill } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "@/context/AuthContext.js";

import { db } from "../../util/firebase.js";

const NavLink = ({ href, label, onClick, selected }) => (
    <Link href={href} passHref>
        <div
            className={`flex items-center text-[#585785] text-2xl cursor-pointer font-semibold p-3 rounded-lg ${
                selected ? "bg-[#90EEE1]" : ""
            }`}
            onClick={onClick}
        >
            <span className='mr-2'>{/* Icon component here */}</span>
            <span className='hidden sm:inline'>{label}</span>
        </div>
    </Link>
);

const Sidebar = () => {
    const [selectedLink, setSelectedLink] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [collapsed, setCollapsed] = useState(false);
    const { currentUser, logout } = useAuth();
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

    const links = [
        { label: "Edit Profile", path: "/editprofile" },
        { label: "My Listings", path: "/mylistings" },
        { label: "My Orders", path: "/myorders" },
    ];

    const currentPath = route.asPath;

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
                <Image
                    src={currentUser.photoURL || "/images/profile.jpg"}
                    alt='profile-pic'
                    width={80}
                    height={80}
                    className='w-25 h-25 rounded-full mb-2'
                />
                {!collapsed && userInfo && (
                    <div className='text-center'>
                        <h2 className='text-xl text-[#585785] font-bold mb-1'>{`${userInfo?.name} ${userInfo?.surname}`}</h2>
                        <p className='text-[#585785] mb-2'>{userInfo?.email}</p>
                        <p className='text-[#585785] mb-4'>{`${userInfo?.city}, ${userInfo?.country}`}</p>
                    </div>
                )}
            </div>
            <div className='flex flex-col items-center space-y-10'>
                {links.map((link) => (
                    <NavLink
                        key={link.label}
                        href={link.path}
                        label={link.label}
                        onClick={() => handleLinkClick(link.label)}
                        selected={currentPath.includes(link.path)}
                    />
                ))}
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
            <ToastContainer />
        </div>
    );
};

export default Sidebar;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { BsClipboard2Fill, BsFillBoxSeamFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext.js";
import { useRouter } from "next/router.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../util/firebase.js";
import Image from "next/image.js";

// ... (your existing imports)

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
                <Link href='/editprofile' passHref>
                    <div
                        className={`flex items-center text-[#585785] lg:text-2xl md:text-xl cursor-pointer font-semibold p-3 rounded-lg ${
                            selectedLink === "EditProfile" ? "bg-[#90EEE1]" : ""
                        }`}
                        onClick={() => handleLinkClick("EditProfile")}
                    >
                        <span className='mr-2'>
                            <FiEdit3 />
                        </span>
                        {!collapsed && (
                            <span className='hidden sm:inline'>
                                Edit Profile
                            </span>
                        )}
                    </div>
                </Link>
                <Link href='/mylistings' passHref>
                    <div
                        className={`flex items-center text-[#585785] lg:text-2xl md:text-xl cursor-pointer font-semibold p-3 rounded-lg ${
                            selectedLink === "MyListings" ? "bg-[#90EEE1]" : ""
                        }`}
                        onClick={() => handleLinkClick("MyListings")}
                    >
                        <span className='mr-2'>
                            <BsClipboard2Fill />
                        </span>
                        {!collapsed && (
                            <span className='hidden sm:inline'>
                                My Listings
                            </span>
                        )}
                    </div>
                </Link>
                <Link href='/myorders' passHref>
                    <div
                        className={`flex items-center text-[#585785] lg:text-2xl md:text-xl cursor-pointer font-semibold p-3 rounded-lg ${
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
                </Link>
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

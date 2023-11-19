import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

import { useAuth } from "@/context/AuthContext";

function ProfileDropdown() {
    const { currentUser, logout } = useAuth();
    const route = useRouter();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    // logout function
    async function handleLogout() {
        try {
            await logout();
            route.push("/signin");
        } catch (error) {
            toast.error("Failed to log out");
        }
    }
    return (
        <>
            {currentUser ? (
                <div className='dropdown dropdown-end'>
                    <label
                        tabIndex={0}
                        onClick={toggleDropdown}
                        className='btn btn-ghost hover:bg-slate-200 btn-circle avatar'
                    >
                        <div className='w-8 rounded-full'>
                            <Image
                                src={
                                    currentUser.photoURL ||
                                    "/images/profile.jpg"
                                }
                                width={20}
                                height={20}
                                alt='profile-pic'
                            />
                        </div>
                    </label>
                    {isDropdownOpen && (
                        <ul
                            tabIndex={0}
                            className='mt-1 z-[1] px-1 py-2 shadow menu menu-sm dropdown-content  text-black bg-[#F1F6FA] rounded-md w-22'
                        >
                            <li>
                                <Link
                                    href='#'
                                    className='text-[#7874F2] font-semibold justify-between hover:text-grey'
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-[#7874F2] font-semibold  hover:text-grey'
                                >
                                    Listings
                                </Link>
                            </li>
                            <li>
                                <button
                                    className='text-[#7874F2] font-semibold   hover:text-grey'
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            ) : (
                <Link
                    className='bg-[#585785] py-1 px-1 rounded-md text-white hover:bg-[#6d6d9a] transition duration-300'
                    href='/signin'
                >
                    Sign In
                </Link>
            )}
        </>
    );
}

export default ProfileDropdown;

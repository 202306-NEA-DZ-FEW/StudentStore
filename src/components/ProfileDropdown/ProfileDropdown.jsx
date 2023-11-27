import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

import { useAuth } from "@/context/AuthContext";

function ProfileDropdown({ t }) {
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
                <div className='relative dropdown  dropdown-end'>
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
                            className={` ${
                                route.locale === "ar"
                                    ? "absolute top-full  left-1/2 transform translate-x-1/4"
                                    : ""
                            } mt-1 z-[1] px-1  py-2 shadow menu menu-sm  dropdown-content w-20  text-black bg-[#F1F6FA] rounded-md`}
                        >
                            <li>
                                <Link
                                    href='/profile'
                                    className='text-[#7874F2]  font-semibold  hover:text-grey'
                                >
                                    {t("Profile")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/mylistings'
                                    className='text-[#7874F2]  font-semibold  hover:text-grey'
                                >
                                    {t("Listings")}
                                </Link>
                            </li>
                            <li>
                                <button
                                    className='text-[#7874F2]  font-semibold   hover:text-grey'
                                    onClick={handleLogout}
                                >
                                    {t("Logout")}
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
                    {t("Sign In")}
                </Link>
            )}
        </>
    );
}

export default ProfileDropdown;

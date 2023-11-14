import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProfileDropdown() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { currentUser, logout } = useAuth();
    const route = useRouter();
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    // Log out Function
    async function handleLogout() {
        try {
            await logout();
            route.push("/signin");
        } catch (error) {
            toast.error("failed to log out");
        }
    }
    return (
        <div className='dropdown dropdown-end'>
            <label
                tabIndex={0}
                onClick={toggleDropdown}
                className='btn btn-ghost hover:bg-slate-200 btn-circle avatar'
            >
                <div className='w-8 rounded-full'>
                    <Image
                        src={
                            currentUser
                                ? currentUser.photoURL
                                : "/images/profile.jpg"
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
            <ToastContainer />
        </div>
    );
}

export default ProfileDropdown;

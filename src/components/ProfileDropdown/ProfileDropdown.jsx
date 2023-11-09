import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProfileDropdown() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className='dropdown dropdown-end'>
            <label
                tabIndex={0}
                onClick={toggleDropdown}
                className='btn btn-ghost btn-circle avatar'
            >
                <div className='w-10 rounded-full'>
                    <Image src='' width={20} height={20} alt='profile-pic' />
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
                        <Link
                            href='#'
                            className='text-[#7874F2] font-semibold   hover:text-grey'
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default ProfileDropdown;

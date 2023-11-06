import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

import Language from "../Language/Language";
import Logo from "../Logo/Logo";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import SearchBar from "../SearchBar/SearchBar";
import UnderBar from "../UnderBar/UnderBar";

export default function Navbar() {
    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreenNavigation = () => {
        setIcon(!menuIcon);
    };

    return (
        <header className='bg-slate-200'>
            <div>
                <div class='  px-2 sm:px-6 lg:px-8'>
                    <div class='relative flex h-16 items-center justify-between'>
                        <div class='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                            {/* <!-- Mobile menu button--> */}
                            <button
                                type='button'
                                class='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                aria-controls='mobile-menu'
                                aria-expanded='false'
                            >
                                <span class='absolute -inset-0.5'></span>
                                <span class='sr-only'>Open main menu</span>
                                {/* <!--
                Icon when menu is closed.
    
                Menu open: "hidden", Menu closed: "block"
              --> */}
                                <svg
                                    class='block h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                    />
                                </svg>
                                {/* <!--
                Icon when menu is open.
    
                Menu open: "block", Menu closed: "hidden"
              --> */}
                                <svg
                                    class='hidden h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                            <div class='flex flex-shrink-0 items-center'>
                                <Image
                                    src='/logo.png'
                                    width={50}
                                    height={50}
                                    alt='Picture of the author'
                                />
                            </div>

                            <div class='hidden  sm:ml-6 sm:block'>
                                <div class='flex items-center  h-full p-2 space-x-4 text-md'>
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <Link
                                        className='text-[#585785] rounded-md     hover:text-[#FF8A57]  hover:underline hover:decoration-4 font-bold'
                                        href='/'
                                    >
                                        {" "}
                                        Home{" "}
                                    </Link>
                                    <Link
                                        className='text-[#585785]  rounded-md  hover:text-[#FF8A57]   hover:underline hover:decoration-4 font-bold'
                                        href='/'
                                    >
                                        {" "}
                                        Products{" "}
                                    </Link>

                                    <Link
                                        className='text-[#585785]  hover:text-[#FF8A57] hover:underline hover:decoration-4	 rounded-md  font-bold'
                                        href='/'
                                    >
                                        {" "}
                                        Donation
                                    </Link>

                                    <Link
                                        className='text-[#585785] hover:text-[#FF8A57] rounded-md hover:underline hover:decoration-4  break-keep inline-block font-bold'
                                        href='/'
                                    >
                                        {" "}
                                        About us{" "}
                                    </Link>
                                </div>
                            </div>
                            <div className='w-[90vh] ml-10 h-full  py-8  '>
                                {" "}
                                <SearchBar />{" "}
                            </div>
                        </div>
                        <Language />
                        <div class='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                            <button className=' text-2xl text-[#FF8A57] hover:text-orange-500'>
                                <FaShoppingCart />
                            </button>

                            {/* <!-- Profile dropdown --> */}
                            <div class='relative ml-3'>
                                <div>
                                    <button
                                        type='button'
                                        class='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                                        id='user-menu-button'
                                        aria-expanded='false'
                                        aria-haspopup='true'
                                    >
                                        <ProfileDropdown />
                                    </button>
                                </div>

                                {/* <!--
                Dropdown menu, show/hide based on menu state.
    
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <UnderBar></UnderBar>
        </header>
    );
}

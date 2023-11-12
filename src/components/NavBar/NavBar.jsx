import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import Language from "../Language/Language";
import Logo from "../Logo/Logo";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import SearchBar from "../SearchBar/SearchBar";
import SidebarNB from "../SideBarNB/SideBarNB";
import UnderBar from "../UnderBar/UnderBar";

export default function Navbar() {
    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreenNavigation = () => {
        setIcon(!menuIcon);
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <header className='fixed top-0 left-0 z-10 right-0'>
            <nav className='bg-slate-200  shadow-md p-2'>
                {/* Large screens and tablets */}
                <div className='hidden md:flex justify-between md:items-center'>
                    <div className='flex space-x-4 md:space-x-3 lg:space-x-4 items-center'>
                        <Logo />
                        <Link
                            className='text-[#585785] rounded-md     hover:text-[#FF8A57]  hover:underline hover:decoration-4 font-bold'
                            href='/'
                        >
                            Home
                        </Link>
                        <Link
                            className='text-[#585785]  rounded-md  hover:text-[#FF8A57]   hover:underline hover:decoration-4 font-bold'
                            href='/'
                        >
                            Products
                        </Link>

                        <Link
                            className='text-[#585785]  hover:text-[#FF8A57] hover:underline hover:decoration-4   rounded-md  font-bold'
                            href='/'
                        >
                            Donation
                        </Link>

                        <Link
                            className='text-[#585785]  hover:text-[#FF8A57] rounded-md hover:underline hover:decoration-4  break-keep inline-block font-bold'
                            href='/'
                        >
                            About us
                        </Link>
                    </div>
                    <div className='  md:w-[25%] '>
                        <SearchBar />
                    </div>
                    <div className='flex items-center md:space-x-1 lg:space-x-4'>
                        {/* Cart, Language, Profile icons */}
                        <Language />
                        <button className=' text-3xl text-[#FF8A57] hover:text-orange-500'>
                            <FaShoppingCart />
                        </button>

                        <ProfileDropdown />
                    </div>
                </div>

                {/* Mobile */}
                <div className='md:hidden flex justify-between   items-center'>
                    <div>
                        <button
                            type='button'
                            className='block text-[#585785]   font-semibold  hover:text-[#FF8A57] p-2 text-3xl'
                            onClick={openSidebar}
                        >
                            &#9776;
                        </button>
                    </div>

                    <div className='flex items-center'>
                        <Logo />
                    </div>

                    <div className='flex items-center space-x-4'>
                        <Language />

                        <button className='text-3xl text-[#FF8A57] hover:text-orange-500'>
                            <FaShoppingCart />
                        </button>

                        <ProfileDropdown />
                    </div>
                </div>

                {/* Search bar component for mobile */}
                <div className='md:hidden'>
                    <SearchBar />
                </div>
            </nav>
            {isSidebarOpen && (
                <SidebarNB isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            )}
            <div className='hidden md:block'>
                <UnderBar> </UnderBar>
            </div>
        </header>
    );
}

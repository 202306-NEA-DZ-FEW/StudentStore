import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

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
        <header className='bg-slate-300 text-black w-full ease-in duration-300 fixed top-0 left-0 z-10'>
            <nav className=' mx-full h-[100px] flex justify-between items-center p-4'>
                <div className='navbar w-[0%] '>
                    <Link href='/' onClick={handleSmallerScreenNavigation}>
                        <Logo />
                    </Link>
                </div>
                {/* Larger screens navigation */}
                <ul className='hidden md:flex font-semibold text-1xl lg:text-[20px] text-indigo-800 '>
                    <li className='mt-3 mr-4 lg:mr-8 hover:text-white hover:bg-orange-300  rounded-full px-8 py-2'>
                        <Link href='/'> Home </Link>
                    </li>
                    <li className='mt-3 mr-4 lg:mr-8 hover:text-white  hover:bg-orange-300  rounded-full px-8 py-2'>
                        <Link href='/Donation'>Donations</Link>
                    </li>
                    <li className='mt-3 mr-4 lg:mr-8 hover:text-white  hover:bg-orange-300  rounded-full px-8 py-2'>
                        <Link href='/About'>About Us</Link>
                    </li>

                    <div className='mt-4 mr-4  '>
                        <SearchBar />
                    </div>
                    <li className='mt-4 mr-4 lg:mr-8 hover:text-white '>
                        <Language />
                    </li>
                    <li className='mt-4 mr-4 lg:mr-8 hover:text-white'>
                        <ProfileDropdown />
                    </li>
                    <li>
                        <button className='mt-4 text-3xl text-[#FF8A57] hover:text-orange-500'>
                            <FaShoppingCart />
                        </button>
                    </li>
                </ul>

                {/* <UnderBar /> */}

                {/* smaller screens -navigation icons  */}
                {/* onClick change icon  */}

                <div
                    onClick={handleSmallerScreenNavigation}
                    className='flex md:hidden'
                >
                    {menuIcon ? (
                        <AiOutlineClose size={25} />
                    ) : (
                        <AiOutlineMenu size={25} />
                    )}
                </div>

                {/* smaller screens - Navbar  */}
                <div
                    className={
                        menuIcon
                            ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex text-center justify-center items-center w-full h-screen bg-indigo-950 text-white ease-in duration-300 "
                            : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-sceen bg-indigo-950 text-white "
                    }
                >
                    {/* smaller screens Navbar links  */}
                    <div className='w-full '>
                        <ul className='font-medium text-sm '>
                            <li
                                onClick={handleSmallerScreenNavigation}
                                className='py-2 cursor-pointer'
                            >
                                <SearchBar />
                            </li>
                            <li
                                onClick={handleSmallerScreenNavigation}
                                className='py-2 cursor-pointer'
                            >
                                <Link href='/'>Home</Link>
                            </li>
                            <li
                                onClick={handleSmallerScreenNavigation}
                                className='py-2 cursor-pointer'
                            >
                                <Link href='#'>Donations</Link>
                            </li>
                            <li
                                onClick={handleSmallerScreenNavigation}
                                className='py-2 cursor-pointer'
                            >
                                <Link href='#'>About Us</Link>
                            </li>
                            <li
                                onClick={handleSmallerScreenNavigation}
                                className='py-2 cursor-pointer'
                            >
                                <ProfileDropdown />
                            </li>
                            <li
                                onClick={handleSmallerScreenNavigation}
                                className='py-2 cursor-pointer'
                            >
                                <Language />
                            </li>
                            <li
                                onClick={handleSmallerScreenNavigation}
                                className='py-2 cursor-pointer'
                            >
                                <UnderBar />
                            </li>
                        </ul>
                        {/* <div className='flex flex-col justify-center items-center mt-16'>

       </div> */}
                    </div>
                </div>
            </nav>
        </header>
    );
}

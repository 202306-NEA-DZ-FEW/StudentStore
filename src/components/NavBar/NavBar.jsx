import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Language from "../Language/Language";
import Logo from "../Logo/Logo";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import SidebarNB from "../SideBarNB/SideBarNB";
import UnderBar from "../UnderBar/UnderBar";

export default function Navbar({ t }) {
    const [menuIcon, setIcon] = useState(false);
    const route = useRouter();
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
        <header
            className='fixed top-0 left-0 z-10 right-0'
            dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
        >
            <nav className='bg-slate-200  shadow-md p-2'>
                {/* Large screens and tablets */}
                <div className='hidden justify-between md:flex  md:items-center'>
                    <div className='flex items-center justify-between md:gap-5 lg:gap-10 space-x-4 md:space-x-1 lg:space-x-4 '>
                        <Link href='/home'>
                            <Logo />
                        </Link>
                        <Link
                            className='text-[#585785] rounded-md hover:text-[#FF8A57]  hover:underline hover:decoration-4 font-bold'
                            href='/home'
                        >
                            {t("home")}
                        </Link>
                        <Link
                            className='text-[#585785]  rounded-md  hover:text-[#FF8A57]   hover:underline hover:decoration-4 font-bold'
                            href='/products'
                        >
                            {t("products")}
                        </Link>

                        <Link
                            className='text-[#585785]  hover:text-[#FF8A57] hover:underline hover:decoration-4   rounded-md  font-bold'
                            href='/donations'
                        >
                            {t("donation")}
                        </Link>

                        {/* <Link
                            className='text-[#585785]  hover:text-[#FF8A57] rounded-md hover:underline hover:decoration-4  break-keep inline-block font-bold'
                            href='/aboutus'
                        >
                            {t("about_us")}
                        </Link> */}
                    </div>
                    <div className='md:w-[25%] '>
                        <SearchBar t={t} />
                    </div>
                    <div className='flex items-center gap-3 justify-between  md:space-x-3  lg:space-x-4'>
                        {/* Cart, Language, Profile icons */}
                        <Language />
                        <ShoppingCartIcon />
                        <ProfileDropdown t={t} />
                    </div>
                </div>

                {/* Mobile */}
                <div
                    className='md:hidden flex justify-between   items-center'
                    dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
                >
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
                        <Link href='/home'>
                            <Logo />
                        </Link>
                    </div>

                    <div className='flex items-center  gap-3'>
                        <Language />
                        <ShoppingCartIcon />
                        <ProfileDropdown t={t} />
                    </div>
                </div>

                {/* Search bar component for mobile */}
                <div
                    className='md:hidden'
                    dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
                >
                    <SearchBar t={t} />
                </div>
            </nav>
            {isSidebarOpen && (
                <SidebarNB
                    isOpen={isSidebarOpen}
                    closeSidebar={closeSidebar}
                    t={t}
                />
            )}
            <div className='hidden md:block'>
                <UnderBar t={t} />
            </div>
            <ScrollIndicator />
        </header>
    );
}

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiSolidCategory, BiSolidDonateBlood } from "react-icons/bi";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { SiSellfy } from "react-icons/si";

import { useAuth } from "@/context/AuthContext";

const SidebarNB = ({ isOpen, closeSidebar, t }) => {
    const route = useRouter();
    const { currentUser } = useAuth();
    const [isSubMenuHidden, setIsSubMenuHidden] = useState(false);
    const [isArrowRotated, setIsArrowRotated] = useState(false);
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuHidden((prev) => !prev);
        setIsArrowRotated((prev) => !prev);
    };

    const toggleSidebar = () => {
        setIsSidebarHidden((prev) => !prev);
    };
    // function dropdown() {
    //     document.querySelector("#submenu").classList.toggle("hidden");
    //     document.querySelector("#arrow").classList.toggle("rotate-0");
    // }
    // dropdown();

    // function openSidebar() {
    //     document.querySelector(".sidebar").classList.toggle("hidden");
    // }
    return (
        <div className=''>
            <div
                class={`fixed top-0 left-0 h-screen w-[60%] sm:w-[40%] md:hidden mx-auto bg-gray-800 shadow-lg max-h-screen overflow-y-auto transition-all ease-in-out duration-700 ${
                    isOpen ? "left-0" : "-left-full"
                } `}
            >
                <div class='text-gray-100 text-xl'>
                    <div class='p-1 mt-1 flex justify-between items-center'>
                        <div class=' text-[15px] ml-2'>
                            {currentUser ? (
                                <p
                                    className={`sm:text-lg  p-2 font-semibold text-[#585785] ${
                                        route.locale === "ar" ? "mr-16" : ""
                                    } `}
                                >
                                    {`${t("Hello")}, ${
                                        currentUser.displayName || ""
                                    } ${t("Welcome to Student Store")}`}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div
                            className='cursor-pointer hover:text-[#FF8A57]'
                            onClick={closeSidebar}
                        >
                            <IoCloseSharp size={28} />
                        </div>
                    </div>
                    <div class='my-2 bg-gray-600 h-[1px]'></div>
                </div>
                <div class='p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white'>
                    <i class='bi bi-search text-sm'></i>
                    <input
                        type='text'
                        placeholder='Search'
                        class='text-[15px] ml-4 w-full bg-transparent focus:outline-none'
                    />
                </div>
                <div class='p-1 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <span className='text-white'>
                        <FaHome color='white' />
                    </span>
                    <Link
                        href='/home'
                        class='text-[15px] ml-2 text-gray-200 font-bold'
                        onClick={closeSidebar}
                    >
                        Home
                    </Link>
                </div>
                <div class='p-1 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <SiSellfy />
                    <Link
                        href='/listing'
                        class='text-[15px] ml-2 text-gray-200 font-bold'
                        onClick={closeSidebar}
                    >
                        {t("Sell")}
                    </Link>
                </div>
                <div class='p-1 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <BiSolidDonateBlood />

                    <Link
                        href='/donations'
                        class='text-[15px] ml-2 text-gray-200 font-bold'
                        onClick={closeSidebar}
                    >
                        {t("Donate")}
                    </Link>
                </div>
                <div class='my-4 bg-gray-600 h-[1px]'></div>
                <div
                    class='p-1 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'
                    onClick={toggleSubMenu}
                >
                    <BiSolidCategory />
                    <div class='flex justify-between w-full items-center'>
                        <span class='text-[15px] ml-2 text-gray-200 font-bold'>
                            {t("Categories")}
                        </span>
                        <span
                            className={`text-sm ${
                                isArrowRotated ? "rotate-180" : ""
                            }`}
                            id='arrow'
                        >
                            <FaChevronDown />
                        </span>
                    </div>
                </div>
                <ul
                    className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-semibold ${
                        isSubMenuHidden ? "hidden" : ""
                    }`}
                    id='submenu'
                >
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link href='/products' onClick={closeSidebar}>
                            {t("All products")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "electronics" },
                            }}
                            className='capitalize'
                            onClick={closeSidebar}
                        >
                            {t("Electronics")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "books" },
                            }}
                            className='capitalize '
                            onClick={closeSidebar}
                        >
                            {t("Books")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "gaming" },
                            }}
                            className='capitalize '
                            onClick={closeSidebar}
                        >
                            {t("Gaming")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "clothes" },
                            }}
                            className='capitalize '
                            onClick={closeSidebar}
                        >
                            {t("Clothes")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "shoes" },
                            }}
                            className='capitalize '
                            onClick={closeSidebar}
                        >
                            {t("Shoes")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "food" },
                            }}
                            className='capitalize'
                            onClick={closeSidebar}
                        >
                            {t("Food")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "transportation" },
                            }}
                            className='capitalize'
                            onClick={closeSidebar}
                        >
                            {t("Transportation")}
                        </Link>
                    </li>
                    <li className='cursor-pointer p-1 w-full hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "furniture" },
                            }}
                            className='capitalize w-full'
                            onClick={closeSidebar}
                        >
                            {t("Furniture")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "other" },
                            }}
                            className='capitalize'
                            onClick={closeSidebar}
                        >
                            {t("Other")}
                        </Link>
                    </li>
                </ul>
                <div class='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <i class='bi bi-box-arrow-in-right'></i>
                    <span class='text-[15px] ml-4 text-gray-200 font-bold'>
                        Logout
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SidebarNB;

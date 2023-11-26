import Link from "next/link";
import { useRouter } from "next/router";
import { BiSolidCategory, BiSolidDonateBlood } from "react-icons/bi";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";

import { useAuth } from "@/context/AuthContext";

const SidebarNB = ({ isOpen, closeSidebar, t }) => {
    const route = useRouter();
    const { currentUser } = useAuth();
    function dropdown() {
        document.querySelector("#submenu").classList.toggle("hidden");
        document.querySelector("#arrow").classList.toggle("rotate-0");
    }
    dropdown();

    function openSidebar() {
        document.querySelector(".sidebar").classList.toggle("hidden");
    }
    return (
        // <div
        //     className={`fixed top-0 left-0 h-screen w-[60%] sm:w-[40%] md:hidden mx-auto bg-slate-200 shadow-lg transition-all duration-700 ${
        //         isOpen ? "left-0" : "-left-full"
        //     } `}
        //     // dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
        // >
        //     <div className='h-24 shadow-md flex items-center bg-[#C9D9E5]'>
        //         <div className='basis-3/4'>
        //             {currentUser ? (
        //                 <p
        //                     className={`sm:text-lg  p-2 font-semibold text-[#585785] ${
        //                         route.locale === "ar" ? "mr-16" : ""
        //                     } `}
        //                 >
        //                     {`${t("Hello")}, ${
        //                         currentUser.displayName || ""
        //                     } ${t("Welcome to Student Store")}`}
        //                 </p>
        //             ) : (
        //                 ""
        //             )}
        //         </div>
        //     </div>
        //     <div className='p-8 '>
        //         <ul className='text-xl space-y-4'>
        //             <li>
        //                 <Link
        //                     className='text-[#585785] rounded-md     hover:text-[#FF8A57]  hover:underline hover:decoration-4 font-semibold'
        //                     href='/home'
        //                 >
        //                     {t("Home")}
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link
        //                     className='text-[#585785]  rounded-md  hover:text-[#FF8A57]   hover:underline hover:decoration-4 font-medium'
        //                     href='/listing'
        //                 >
        //                     {t("Add")}
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link
        //                     className='text-[#585785]  hover:text-[#FF8A57] hover:underline hover:decoration-4   rounded-md  font-medium'
        //                     href='/donations'
        //                 >
        //                     {t("Donate")}
        //                 </Link>
        //             </li>
        //             {/* <li>
        //                 <Link
        //                     className='text-[#585785]  hover:text-[#FF8A57] rounded-md hover:underline hover:decoration-4  break-keep inline-block font-medium'
        //                     href='/aboutUs'
        //                 >
        //                     {t("About us")}
        //                 </Link>
        //             </li> */}
        //         </ul>
        //         <div className='border-b border-gray-400 pb-3'></div>
        //         <div className='p-2'>
        //             <details className=' text-[#585785] font-semibold'>
        //                 <summary className='text-l'>
        //                     {" "}
        //                     {t("Categories")}{" "}
        //                 </summary>
        //                 <ul class='text-[#585785]'>
        //                     <li>
        //                         <Link
        //                             href='/products'
        //                             className='capitalize underline hover:text-[#FFA857] transition-all duration-300 ease-in-outtext-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("All products")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "electronics" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Electronics")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "books" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Books")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "gaming" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Gaming")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "clothes" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Clothes")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "shoes" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Shoes")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "food" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Food")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "transportation" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Transportation")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "furniture" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Furniture")}
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href={{
        //                                 pathname: "/products",
        //                                 query: { category: "other" },
        //                             }}
        //                             className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 pt-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
        //                         >
        //                             {t("Other")}
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </details>
        //         </div>
        //     </div>
        //     <button
        //         className='absolute top-4 cursor-pointer right-4 text-[#585785] hover:text-[#FFA857]  text-5xl transition-all duration-700'
        //         onClick={closeSidebar}
        //     >
        //         &times;
        //     </button>
        // </div>
        <div>
            <span
                class='absolute text-white text-4xl top-5 left-4 cursor-pointer'
                onclick='openSidebar()'
            >
                <i class='bi bi-filter-left px-2 bg-gray-900 rounded-md'></i>
            </span>
            <div class='sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900'>
                <div class='text-gray-100 text-xl'>
                    <div class='p-2.5 mt-1 flex items-center'>
                        <i class='bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600'></i>
                        <h1 class='font-bold text-gray-200 text-[15px] ml-3'>
                            TailwindCSS
                        </h1>
                        <i
                            className='bi bi-x cursor-pointer ml-28 lg:hidden'
                            onclick='openSidebar()'
                        ></i>
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
                    <span class='text-[15px] ml-2 text-gray-200 font-bold'>
                        Home
                    </span>
                </div>
                <div class='p-1 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <SiSellfy />
                    <span class='text-[15px] ml-2 text-gray-200 font-bold'>
                        {t("Sell")}
                    </span>
                </div>
                <div class='p-1 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                    <BiSolidDonateBlood />

                    <span class='text-[15px] ml-2 text-gray-200 font-bold'>
                        {t("Donate")}
                    </span>
                </div>
                <div class='my-4 bg-gray-600 h-[1px]'></div>
                <div
                    class='p-1 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'
                    onClick={dropdown}
                >
                    <BiSolidCategory />
                    <div class='flex justify-between w-full items-center'>
                        <span class='text-[15px] ml-2 text-gray-200 font-bold'>
                            {t("Categories")}
                        </span>
                        <span class='text-sm rotate-180' id='arrow'>
                            <FaChevronDown />
                        </span>
                    </div>
                </div>
                <ul
                    class='text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-semibold'
                    id='submenu'
                >
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link href='/products'>{t("All products")}</Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "electronics" },
                            }}
                            className='capitalize'
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
                        >
                            {t("Transportation")}
                        </Link>
                    </li>
                    <li class='cursor-pointer p-1 hover:bg-blue-600 rounded-md mt-1'>
                        <Link
                            href={{
                                pathname: "/products",
                                query: { category: "furniture" },
                            }}
                            className='capitalize'
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

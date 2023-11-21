import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "@/context/AuthContext";

const SidebarNB = ({ isOpen, closeSidebar, t }) => {
    const route = useRouter();
    const { currentUser } = useAuth();
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-[60%] sm:w-[40%] md:hidden mx-auto bg-slate-200 shadow-lg transition-all duration-700 ${
                isOpen ? "left-0" : "-left-full"
            } `}
            dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
        >
            <div className='h-24 shadow-md flex items-center bg-[#C9D9E5]'>
                <div className='basis-3/4'>
                    {currentUser ? (
                        <p
                            className={`sm:text-lg  p-2 font-semibold text-[#585785] ${
                                route.locale === "ar" ? "mr-10" : "mr-10"
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
            </div>
            <div className='p-8 '>
                <ul className='text-xl space-y-4'>
                    <li>
                        <Link
                            className='text-[#585785] rounded-md     hover:text-[#FF8A57]  hover:underline hover:decoration-4 font-bold'
                            href='/'
                        >
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='text-[#585785]  rounded-md  hover:text-[#FF8A57]   hover:underline hover:decoration-4 font-bold'
                            href='/products'
                        >
                            {t("products")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='text-[#585785]  hover:text-[#FF8A57] hover:underline hover:decoration-4   rounded-md  font-bold'
                            href='/donations'
                        >
                            {t("donation")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='text-[#585785]  hover:text-[#FF8A57] rounded-md hover:underline hover:decoration-4  break-keep inline-block font-bold'
                            href='/aboutUs'
                        >
                            {t("about_us")}
                        </Link>
                    </li>
                </ul>
                <div className='border-b border-gray-400'></div>
                <div className='p-2'>
                    <details className=' text-[#585785] font-bold'>
                        <summary className='text-xl'>
                            {" "}
                            {t("categories")}{" "}
                        </summary>
                        <ul class='text-[#585785]'>
                            <li>
                                <Link
                                    href='/products'
                                    className='capitalize underline hover:text-[#FFA857] transition-all duration-300 ease-in-outtext-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("all Categories")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { category: "electronics" },
                                    }}
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("electronics")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { category: "books" },
                                    }}
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("books")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { category: "gaming" },
                                    }}
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("gaming")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { category: "clothes" },
                                    }}
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("clothes")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { category: "shoes" },
                                    }}
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("shoes")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { category: "food" },
                                    }}
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("food")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { category: "transportation" },
                                    }}
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("transportation")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { category: "furniture" },
                                    }}
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    {t("furniture")}
                                </Link>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
            <button
                className='absolute top-4 cursor-pointer right-4 text-[#585785] hover:text-[#FFA857]  text-5xl transition-all duration-700'
                onClick={closeSidebar}
            >
                &times;
            </button>
        </div>
    );
};

export default SidebarNB;

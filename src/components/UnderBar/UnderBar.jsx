import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";
function UnderBar({ className, t }) {
    const route = useRouter();
    return (
        <div
            className={twMerge(
                "bg-[#585785]  font-bold md:font-semibold md:bg-[#585785] lg:bg-[#585785] lg:font-semibold",
                className
            )}
            dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
        >
            <ul className='p-4 md:p-0 md:flex md:justify-around lg:p- lg:flex lg:justify-around lg:w-[75%] lg:mx-auto '>
                <li>
                    <Link
                        href='/products'
                        className='capitalize underline hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
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
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
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
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
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
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
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
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
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
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
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
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
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
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
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
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        {t("furniture")}
                    </Link>
                </li>
                <li>
                    <Link
                        href={{
                            pathname: "/products",
                            query: { category: "other" },
                        }}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        {t("other")}
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default UnderBar;

import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
function UnderBar({ className }) {
    return (
        <div
            className={twMerge(
                "bg-[#585785] font-bold md:font-semibold md:bg-[#585785] lg:bg-[#585785] lg:font-semibold",
                className
            )}
        >
            <ul className='p-4 md:p-0 md:flex md:justify-around lg:p- lg:flex lg:justify-around lg:w-[75%] lg:mx-auto '>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize underline hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        All Categories
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        Electronics
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        Books
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        Gaming
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        Clothes
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        Shoes
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        Food
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        Transportation
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-white text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                    >
                        Furniture
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default UnderBar;

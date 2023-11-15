import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const SidebarNB = ({ isOpen, closeSidebar }) => {
    const { currentUser } = useAuth();
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-[60%] sm:w-[40%] md:hidden mx-auto bg-slate-200 shadow-lg transition-all duration-700 ${
                isOpen ? "left-0" : "-left-full"
            } `}
        >
            <div className='h-24 shadow-md flex items-center bg-[#C9D9E5]'>
                <div className='basis-3/4'>
                    {currentUser ? (
                        <p className='sm:text-lg  p-2 font-semibold text-[#585785] '>
                            {`Hello, ${
                                currentUser.displayName || ""
                            } Welcome to Student Store`}
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
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='text-[#585785]  rounded-md  hover:text-[#FF8A57]   hover:underline hover:decoration-4 font-bold'
                            href='/products'
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='text-[#585785]  hover:text-[#FF8A57] hover:underline hover:decoration-4   rounded-md  font-bold'
                            href='/donations'
                        >
                            Donation
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='text-[#585785]  hover:text-[#FF8A57] rounded-md hover:underline hover:decoration-4  break-keep inline-block font-bold'
                            href='/aboutUs'
                        >
                            About us
                        </Link>
                    </li>
                </ul>
                <div class='border-b border-gray-400'></div>
                <div className='p-2'>
                    <details className=' text-[#585785] font-bold'>
                        <summary className='text-xl'>Categories</summary>
                        <ul class='text-[#585785]'>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize underline hover:text-[#FFA857] transition-all duration-300 ease-in-outtext-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    All Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    Books
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    Gaming
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    Clothes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    Shoes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    Food
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    Transportation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='capitalize hover:text-[#FFA857] transition-all duration-300 ease-in-out  text-lg inline-block ml-4 p-1 md:text-sm md:ml-0 md:py-2 lg:text-md lg:ml-0  '
                                >
                                    Furniture
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

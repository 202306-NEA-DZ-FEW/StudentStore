import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import {
    MdOutlineGTranslate,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Language() {
    const router = useRouter();
    return (
        <Menu as='div' className='relative  inline-block text-left '>
            <div>
                <Menu.Button className='bg-none md:inline-flex md:bg-[#F1F6FA] md:justify-center md:gap-x-1.5 md:rounded-full md:px-3 md:py-2 md:text-sm md:font-semibold md:shadow-sm md:ring-1 md:ring-inset md:ring-transparent hover:ring-[#585785] hover:bg-gray-50'>
                    <MdOutlineGTranslate className='text-[#585785] text-xl' />
                    <MdOutlineKeyboardArrowDown className='text-[#585785] text-xl hidden md:block' />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <Menu.Items className='absolute  font-semibold z-10 mt-2  origin-top-right rounded-md bg-[#F1F6FA] shadow-lg ring-1 ring-[#585785] ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={router.pathname}
                                    className={classNames(
                                        active
                                            ? "bg-white text-grey"
                                            : "text-[#7874F2]",
                                        "block px-4 pt-2 pb-1 text-sm"
                                    )}
                                    locale='en'
                                >
                                    English
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={router.pathname}
                                    className={classNames(
                                        active
                                            ? "bg-white text-grey"
                                            : "text-[#7874F2]",
                                        "block px-4 py-1 text-sm"
                                    )}
                                    locale='ar'
                                >
                                    العربية
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={router.pathname}
                                    className={classNames(
                                        active
                                            ? "bg-white text-grey"
                                            : "text-[#7874F2]",
                                        "block px-4 pb-2 pt-1 text-sm"
                                    )}
                                    locale='fr'
                                >
                                    Français
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default Language;

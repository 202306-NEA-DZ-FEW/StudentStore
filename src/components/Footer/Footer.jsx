import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPhoneSquareAlt,
    FaRegPlusSquare,
    FaWallet,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer({ t }) {
    const route = useRouter();
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className='' dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}>
            <div className=' hidden lg:block larger-screen'>
                <div className='flex justify-evenly  bg-[#32314C] w-full h-full break-all mt-auto '>
                    <div className=' flex p-4  flex-col       items-center justify-center  space-y-4'>
                        <Link className='' href='/'>
                            <Image
                                src='/images/logo-footer.svg'
                                width={130}
                                height={40}
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <div className=' mt-4 p-6'>
                        <ul className='space-y-3  text-white font-small text-sm'>
                            <li>
                                <Link
                                    href='/aboutus'
                                    className='flex cursor-pointer items-center  space-x-2 text-white hover:text-[#FF8A57]'
                                >
                                    {t("about_us")}
                                </Link>
                            </li>

                            <li>
                                <h2>{t("contact_us")}</h2>
                            </li>
                            <li>
                                <ul className='text-gray-600 space-y-1 dark:text-gray-400 font-small'>
                                    <li>
                                        <div className=' flex space-x-2 gap-2 text-xs'>
                                            <FaPhoneSquareAlt
                                                size={15}
                                                style={{ color: "#FFFFFF" }}
                                            />
                                            <Link href='tel:+2130699514862'>
                                                +213 699 514 862
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex space-x-2 gap-2 text-xs'>
                                            <FaEnvelope
                                                size={15}
                                                style={{ color: "#FFFFFF" }}
                                            />
                                            <Link href='mailto:adresse@email.com'>
                                                Contact@studentstore.com
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='flex space-y-8 flex-col items-center justify-center'>
                        <ul className='  space-y-4 text-white font-small text-xs'>
                            <li>
                                <Link
                                    className='flex cursor-pointer items-center  space-x-2 gap-2 text-white hover:text-[#FF8A57]'
                                    href='/listing'
                                >
                                    <FaRegPlusSquare size={12} />
                                    <p> {t("start_selling")}</p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/products'
                                    className='flex cursor-pointer items-center  space-x-2 gap-2 text-white hover:text-[#FF8A57]'
                                >
                                    <FaWallet size={12} />
                                    <p>{t("buy_products")}</p>
                                </Link>
                            </li>
                        </ul>

                        <div className='social-media flex  gap-4 '>
                            <Link href='https://web.facebook.com/recodedofficial'>
                                <FaFacebook
                                    className=' text-white hover:text-[#1877f2]                     	'
                                    size={25}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/school/re-coded/'>
                                <FaLinkedin
                                    className=' text-white hover:text-[#0a66c2]	'
                                    size={25}
                                />
                            </Link>
                            <Link href='https://www.instagram.com/recodedofficial/'>
                                <FaInstagram
                                    className=' text-white hover:text-[#c32aa3]                     	'
                                    size={25}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tablets hidden md:block lg:hidden '>
                <div className='flex-col   bg-[#32314C] w-full h-full break-all mt-auto '>
                    <div className=' flex p-4 justify-evenly '>
                        <Link className='' href='/'>
                            <Image
                                src='/images/logo-footer.svg'
                                width={100}
                                height={50}
                                alt='logo'
                            />
                        </Link>
                        <div className='social-media items-center  flex gap-4 '>
                            <Link
                                className='items-center'
                                href='https://web.facebook.com/recodedofficial'
                            >
                                <FaFacebook
                                    className='items-center'
                                    size={25}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/school/re-coded/'>
                                <FaLinkedin
                                    size={25}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </Link>
                            <Link href='https://www.instagram.com/recodedofficial/'>
                                <FaInstagram
                                    size={25}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-around p-2'>
                        <ul className='space-y-3 text-white font-small text-sm'>
                            <li>
                                <Link
                                    href='/aboutus'
                                    className='flex cursor-pointer items-center  space-x-2 text-white hover:text-[#FF8A57]'
                                >
                                    {t("about_us")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://github.com/202306-NEA-DZ-FEW/StudentStore/graphs/contributors'
                                    target='_blank'
                                    className='flex cursor-pointer items-center  space-x-2 text-white hover:text-[#FF8A57]'
                                >
                                    {t("our_team")}
                                </Link>
                            </li>
                        </ul>
                        <ul className='text-gray-600 space-y-2 dark:text-gray-400 font-small text-xs'>
                            <li>
                                <h2 className=' text-white font-medium text-md'>
                                    {t("contact_us")}
                                </h2>
                            </li>
                            <li>
                                <div className=' flex space-x-2 gap-2'>
                                    <FaPhoneSquareAlt
                                        size={15}
                                        style={{ color: "#FFFFFF" }}
                                    />
                                    <p> +213 123 456 789</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex space-x-2 gap-2'>
                                    <FaEnvelope
                                        size={15}
                                        style={{ color: "#FFFFFF" }}
                                    />
                                    <p> Contact@studentstore.com</p>
                                </div>
                            </li>
                        </ul>
                        <div className='flex p-2 space-y-8 flex-col  items-center justify-center '>
                            <ul className='  space-y-4 text-white font-small text-sm '>
                                <li className='hover:underline hover:text-orange'>
                                    <Link
                                        className='flex cursor-pointer items-center  space-x-2 gap-2 text-white hover:text-[#FF8A57]'
                                        href='/listing'
                                    >
                                        <FaRegPlusSquare size={12} />
                                        <p> {t("start_selling")}</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/products'
                                        className='flex cursor-pointer items-center  space-x-2 text-white hover:text-[#FF8A57] gap-2'
                                    >
                                        <FaWallet size={12} />
                                        <p>{t("buy_products")}</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mobile block md:hidden '>
                <div className='flex-col   bg-[#32314C] w-full h-full break-all mt-auto '>
                    <div className=' flex justify-center p-2 '>
                        <Link className='' href='/'>
                            <Image
                                src='/images/logo-footer.svg'
                                width={100}
                                height={70}
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <div className='flex justify-around p-0'>
                        <ul className='space-y-3 text-white font-small text-xs'>
                            <li>
                                <Link
                                    href='/aboutus'
                                    className='flex cursor-pointer items-center  space-x-2 text-white hover:text-[#FF8A57]'
                                >
                                    {t("about_us")}
                                </Link>
                            </li>

                            <li>
                                <ul className='text-gray-600 space-y-1 dark:text-gray-400 font-small text-xs'>
                                    <li>
                                        <h2 className=' text-white font-sm pb-2'>
                                            {t("contact_us")}:
                                        </h2>
                                    </li>
                                    <li>
                                        <div className=' flex space-x-2'>
                                            <FaPhoneSquareAlt
                                                size={15}
                                                style={{ color: "#FFFFFF" }}
                                            />
                                            <p> +213 123 456 789</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex space-x-2'>
                                            <FaEnvelope
                                                size={15}
                                                style={{ color: "#FFFFFF" }}
                                            />
                                            <p> Contact@studentstore.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className='flex p-2 space-y-8 flex-col items-center justify-center'></div>
                        <div className='social-media items-center flex  flex-col space-y-4 '>
                            <Link
                                className='items-center'
                                href='https://web.facebook.com/recodedofficial'
                            >
                                <FaFacebook
                                    className='items-center '
                                    size={20}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/school/re-coded/'>
                                <FaLinkedin
                                    size={20}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </Link>
                            <Link href='https://www.instagram.com/recodedofficial/'>
                                <FaInstagram
                                    size={20}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </Link>
                        </div>
                    </div>
                    <li className='flex justify-center '>
                        <div className=' p-4 text-white font-small text-xs flex gap-10'>
                            <div className='hover:underline hover:text-orange '>
                                <Link
                                    className='flex cursor-pointer items-center  space-x-2 gap-1 text-white hover:text-[#FF8A57]'
                                    href='/listing'
                                >
                                    <FaRegPlusSquare size={12} />
                                    <p> {t("start_selling")}</p>
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href='/products'
                                    className='flex cursor-pointer items-center  space-x-2 gap-1  text-white hover:text-[#FF8A57]'
                                >
                                    <FaWallet size={12} />
                                    <p>{t("buy_products")}</p>
                                </Link>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
            <div className='flex justify-center p-2  bg-[#32314C] text-center text-white font-xs text-xs '>
                <p className=' text-[8px] '>
                    {t(
                        "© 2023 Team 10, Re:Coded Front-End Web Development - Algeria Bootcamp. All rights reserved."
                    )}
                </p>
            </div>
            <div className='relative '>
                <button
                    onClick={goToTop}
                    style={{
                        display: "inline-block",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 999,
                        margin: "8px",
                        color: "white",
                    }}
                    className='absolute scroll-arrow animate-bounce bottom-4 right-4 '
                >
                    <IoIosArrowUp size={40} />
                </button>
            </div>
        </footer>
    );
}
export default Footer;

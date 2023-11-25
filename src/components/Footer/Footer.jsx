import { useAuth } from "@/context/AuthContext";
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
    const { currentUser } = useAuth();
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className='bg-[#32314C]'
            dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
        >
            <div className=' md:w-full lg:w-[80vw] mx-auto flex flex-col font-semibold gap-4 p-2 md:flex-row md:justify-around'>
                {/* for logo */}
                <div className='flex justify-center items-center'>
                    {/* image container */}
                    <div className='w-full hidden sm:flex justify-center items-center md:w-[1/5]'>
                        <Link href='/home'>
                            <Image
                                src='/images/logo-footer.svg'
                                width={150}
                                height={60}
                                alt='logo'
                            />
                        </Link>
                    </div>
                </div>
                {/* for links */}
                <div className='text-white gap-2 ml-4 sm:flex justify-around md:w-[60%]'>
                    {/* services */}
                    <div className='flex flex-col gap-1 mb-2'>
                        <h1 className='text-[#FF8A57] font-bold'>
                            {t("Services")}
                        </h1>
                        <Link
                            className='flex items-center gap-1 transition-all duration-300 hover:text-[#FF8A57]'
                            href={currentUser ? "/listing" : "/signin"}
                        >
                            <FaRegPlusSquare size={15} />
                            <p className='capitalize'> {t("Start Selling")}</p>
                        </Link>
                        <Link
                            href='/products'
                            className='flex items-center gap-1 transition-all duration-300 hover:text-[#FF8A57]'
                        >
                            <FaWallet size={15} />
                            <p className='capitalize'>{t("Buy Products")}</p>
                        </Link>
                    </div>
                    {/* additional links */}
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-end justify-between'>
                            <div className=''>
                                <h1 className='text-[#FF8A57] mb-1 font-bold'>
                                    {t("Contact")}
                                </h1>
                                <Link
                                    href='/aboutus'
                                    className='transition-all inline-block mb-1 duration-300 hover:text-[#FF8A57]'
                                >
                                    {t("About us")}
                                </Link>
                                <h2 className='mb-1'>{t("Contact us")}:</h2>
                                <Link
                                    href='tel:+2130699514862'
                                    className='flex items-center gap-1 transition-all duration-300 hover:text-[#FF8A57]'
                                >
                                    <FaPhoneSquareAlt size={15} />
                                    <p
                                        dir={
                                            route.locale === "en" &&
                                            route.locale === "fr"
                                                ? "rtl"
                                                : "ltr"
                                        }
                                    >
                                        +213 699 514 862
                                    </p>
                                </Link>
                            </div>
                            {/* image container */}
                            <div className='pr-8 sm:hidden'>
                                <Link href='/home'>
                                    <Image
                                        src='/images/logo-footer.svg'
                                        width={150}
                                        height={70}
                                        alt='logo'
                                    />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <Link
                                href='mailto:adresse@email.com'
                                className='flex items-center gap-1 transition-all duration-300 hover:text-[#FF8A57]'
                            >
                                <FaEnvelope size={15} />
                                Contact@studentstore.com
                            </Link>
                        </div>
                    </div>
                </div>
                {/* social media links */}
                <div className='flex justify-center md:flex-col md:justify-start items-center gap-3 md:w-1/5'>
                    <h1 className='hidden md:block text-[#FF8A57] font-bold'>
                        {t("Follow us")}
                    </h1>
                    <div className='flex gap-3'>
                        <Link
                            href='https://web.facebook.com/recodedofficial'
                            target='_blank'
                        >
                            <FaFacebook
                                className='text-white hover:text-[#1877f2] transition-all duration-300'
                                size={25}
                            />
                        </Link>
                        <Link
                            href='https://www.linkedin.com/school/re-coded/'
                            target='_blank'
                        >
                            <FaLinkedin
                                className='text-white hover:text-[#0a66c2] transition-all duration-300'
                                size={25}
                            />
                        </Link>
                        <Link
                            href='https://www.instagram.com/recodedofficial/'
                            target='_blank'
                        >
                            <FaInstagram
                                className='text-white hover:text-[#c32aa3] transition-all duration-300'
                                size={25}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-2 bg-[#32314C] text-center text-sm text-white'>
                <p className='max-w-[14rem] sm:max-w-full'>
                    {t(
                        "© 2023 Team 10, Re:Coded - Algeria Bootcamp. All rights reserved."
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
                    }}
                    className='absolute scroll-arrow animate-bounce bottom-8 right-4 sm:bottom-4 text-[#FF8A57]'
                >
                    <IoIosArrowUp size={40} />
                </button>
            </div>
        </footer>
    );
}
export default Footer;

import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer({ t }) {
    const [showArrow, setShowArrow] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className='dir-rtl'>
            <div className='relative lg:flex lg:justify-evenly bg-[#32314C] w-full h-full break-all mt-auto pb-32'>
                <div className='ml-5 pt-5 rtl:mr-[180px] rtl:sm:mr-[550px] rtl:lg:mr-[0px]'>
                    <Link href='/'>
                        <Image
                            src='/images/logo-footer.svg'
                            width={400}
                            height={300}
                            alt='logo'
                        />
                    </Link>
                </div>

                <div className='pl-14 pt-5 md:pt-14 rtl:w-96 rtl:mr-[150px] rtl:sm:mr-[400px] rtl:lg:mr-[0px]'>
                    <ul className='font-poppins text-white font-bold text-2xl'>
                        <li>
                            <Link
                                href='/about'
                                className='hover:underline hover:text-orange'
                            >
                                {t("About us")}
                            </Link>
                        </li>
                        <li>
                            <h2 className='pt-4'>{t("Contact-us")}</h2>
                            <ul className='text-gray-600 dark:text-gray-400 font-medium'>
                                <li className='pt-4'> +213 123 456 789</li>
                                <li className='pt-2'>
                                    contact@studentstore.com
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='pl-14 pt-10 md:pt-14 rtl:w-96 rtl:mr-[150px] rtl:sm:mr-[400px] rtl:lg:mr-[0px]'>
                    <ul className='font-poppins text-white font-bold text-2xl'>
                        <li className='mb-4'>
                            <Link
                                href='/listing'
                                className='hover:underline hover:text-orange'
                            >
                                {t("Start selling")}
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link
                                href='/'
                                className='hover:underline hover:text-orange'
                            >
                                {t("Buy products")}
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='absolute md:flex justify-between bottom-64 right-0 lg:right-96 lg:top-64'>
                    <a
                        href='https://web.facebook.com/recodedofficial'
                        className='mr-4'
                    >
                        <FaFacebook size={64} style={{ color: "#1877f2" }} />
                    </a>
                    <a
                        href='https://www.linkedin.com/school/re-coded/'
                        className='mr-4'
                    >
                        <FaLinkedin size={64} style={{ color: "#0077B5" }} />
                    </a>
                    <a
                        href='https://www.instagram.com/recodedofficial/'
                        className='mr-4'
                    >
                        <FaInstagram size={64} style={{ color: "#bc2a8d" }} />
                    </a>
                </div>
            </div>

            {showArrow && (
                <div className='fixed bottom-4 right-4 lg:top-1/2 lg-left-1/2 lg-translate-y-[-50%] lg-translate-x-[-50%]'>
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
                    >
                        <IoIosArrowUp size={48} color='white' />
                    </button>
                </div>
            )}

            {showArrow && (
                <div className='flex justify-end h-36 pt-32 lg:pt-14 lg:rtl:ml-0 rtl:ml-56'>
                    <h2 className='m-0 font-poppins text-white font-bold md:text-2xl lg:text-2xl pt-2 lg:pt-7'>
                        {t("scroll-up")}
                    </h2>
                    <button onClick={goToTop} className='ml-2 mr-5 lg:mr-0'>
                        <IoIosArrowUp size={45} color='white' />
                    </button>
                </div>
            )}
        </footer>
    );
}

export default withTranslation("common")(Footer);

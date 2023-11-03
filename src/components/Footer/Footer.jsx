import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer({ t }) {
    const [showArrow, setShowArrow] = useState(false);
    const [isInsideFooter, setIsInsideFooter] = useState(true);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }

        // Check if the scroll arrow is inside or outside the footer
        const footer = document.querySelector("footer");
        const scrollArrow = document.querySelector(".scroll-arrow");
        if (footer && scrollArrow) {
            const footerRect = footer.getBoundingClientRect();
            const scrollArrowRect = scrollArrow.getBoundingClientRect();
            setIsInsideFooter(
                scrollArrowRect.top >= footerRect.top &&
                    scrollArrowRect.bottom <= footerRect.bottom
            );
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const arrowColor = isInsideFooter ? "white" : "#585785";

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

                <div className='absolute md:flex justify-between bottom-64 right-[30px] lg:right-96 lg:top-64'>
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
                <div className='fixed bottom-4 right-4'>
                    <button
                        onClick={goToTop}
                        style={{
                            display: "inline-block",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            zIndex: 999,
                            margin: "8px",
                            color: arrowColor,
                        }}
                        className='scroll-arrow'
                    >
                        <IoIosArrowUp size={48} color={arrowColor} />
                    </button>
                </div>
            )}
        </footer>
    );
}

export default withTranslation("common")(Footer);

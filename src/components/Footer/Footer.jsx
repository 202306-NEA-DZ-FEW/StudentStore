import Image from "next/image";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
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
                    <a href='#' className='mr-2'>
                        <FaFacebook size={48} style={{ color: "#1877f2" }} />
                    </a>
                    <a href='#' className='mr-2'>
                        <FaTwitter size={48} style={{ color: "#1da1f2" }} />
                    </a>
                    <a href='#'>
                        <FaInstagram size={48} style={{ color: "#bc2a8d" }} />
                    </a>
                </div>

                <div className='flex justify-center items-center h-36 pt-14'>
                    {showArrow && (
                        <button
                            onClick={goToTop}
                            style={{
                                display: "inline-block",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            <IoIosArrowUp size={32} color='white' />
                        </button>
                    )}
                </div>
            </div>
        </footer>
    );
}

export default withTranslation("common")(Footer);

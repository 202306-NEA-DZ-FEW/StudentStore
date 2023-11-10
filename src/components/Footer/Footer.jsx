import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPhoneSquareAlt,
    FaWallet,
    FaEnvelope,
    FaRegPlusSquare,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer({ t }) {
    const router = useRouter();

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

    const navigateToPage = (path) => {
        router.push(path);
    };

    return (
        <footer className=''>
            <div className=' hidden lg:block larger-screen'>
                <div className='flex justify-evenly  bg-[#32314C] w-full h-full break-all mt-auto '>
                    <div className=' flex p-4  flex-col       items-center justify-center  space-y-4'>
                        <Link className='' href='/'>
                            <Image
                                src='/images/logo-footer.svg'
                                width={200}
                                height={100}
                                alt='logo'
                            />
                        </Link>
                        <Link href='/' className=' '>
                            <Image
                                src='/google_play.png'
                                width={150}
                                height={150}
                                alt='logo'
                            />
                        </Link>
                        <Link className='' href='/'>
                            <Image
                                src='/app_store.png'
                                width={150}
                                height={150}
                                alt='logo'
                            />
                        </Link>
                    </div>

                    <div className=' mt-4 p-6'>
                        <ul className='space-y-3  text-white font-bold text-lg'>
                            <li>
                                <a
                                    className='hover:underline hover:text-orange'
                                    onClick={() =>
                                        navigateToPage("/AboutUs/AboutUs")
                                    }
                                >
                                    {t("About us")}
                                </a>
                            </li>
                            <li>
                                {" "}
                                <h2 className=''>{t("Our Team")}</h2>{" "}
                            </li>
                            <li>
                                {" "}
                                <h2 className=''>{t("Contact Us:")}</h2>{" "}
                            </li>

                            <li>
                                <ul className='text-gray-600 space-y-1 dark:text-gray-400 font-medium'>
                                    <li>
                                        {" "}
                                        <div className=' flex space-x-2'>
                                            {" "}
                                            <FaPhoneSquareAlt
                                                size={25}
                                                style={{ color: "#FFFFFF" }}
                                            />{" "}
                                            <p> +213 123 456 789</p>{" "}
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex space-x-2'>
                                            {" "}
                                            <FaEnvelope
                                                size={25}
                                                style={{ color: "#FFFFFF" }}
                                            />{" "}
                                            <p> Contact@studentstore.com</p>{" "}
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className='flex space-y-8 flex-col items-center justify-center'>
                        <ul className='  space-y-4 text-white font-bold text-xl'>
                            <li className='hover:underline hover:text-orange'>
                                <div className='flex space-x-2'>
                                    {" "}
                                    <FaRegPlusSquare
                                        size={20}
                                        style={{
                                            color: "#FFFFFF",
                                            alignSelf: "center",
                                        }}
                                    />{" "}
                                    <a
                                        className=''
                                        onClick={() =>
                                            navigateToPage("/Listings")
                                        }
                                    >
                                        {t("Start selling")}
                                    </a>{" "}
                                </div>
                            </li>
                            <li>
                                <div className='flex space-x-2'>
                                    <FaWallet
                                        size={20}
                                        style={{
                                            color: "#FFFFFF",
                                            alignSelf: "center",
                                        }}
                                    />
                                    <a
                                        className='hover:underline hover:text-orange'
                                        onClick={() =>
                                            navigateToPage(
                                                "/AllProducts/AllProducts"
                                            )
                                        }
                                    >
                                        {t("Buy products")}
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <div className='social-media flex space-x-4 '>
                            <a href='https://web.facebook.com/recodedofficial'>
                                <FaFacebook
                                    size={30}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>
                            <a href='https://www.linkedin.com/school/re-coded/'>
                                <FaLinkedin
                                    size={30}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>
                            <a href='https://www.instagram.com/recodedofficial/'>
                                <FaInstagram
                                    size={30}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>{" "}
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
                                width={200}
                                height={100}
                                alt='logo'
                            />
                        </Link>
                        <div className='social-media items-center  flex space-x-4 '>
                            <a
                                className='items-center'
                                href='https://web.facebook.com/recodedofficial'
                            >
                                <FaFacebook
                                    className='items-center'
                                    size={40}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>
                            <a href='https://www.linkedin.com/school/re-coded/'>
                                <FaLinkedin
                                    size={40}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>
                            <a href='https://www.instagram.com/recodedofficial/'>
                                <FaInstagram
                                    size={40}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>
                        </div>
                    </div>

                    <div className='flex justify-around p-2'>
                        <ul className='space-y-3 text-white font-bold text-lg'>
                            <li>
                                <a
                                    className='hover:underline hover:text-orange'
                                    onClick={() =>
                                        navigateToPage("/AboutUs/AboutUs")
                                    }
                                >
                                    {t("About us")}
                                </a>
                            </li>
                            <li>
                                {" "}
                                <h2 className=''>{t("Our Team")}</h2>{" "}
                            </li>
                        </ul>
                        <ul className='text-gray-600 space-y-1 dark:text-gray-400 font-bold'>
                            <li>
                                {" "}
                                <h2 className=' text-white font-bold text-lg'>
                                    {t("Contact Us:")}
                                </h2>{" "}
                            </li>
                            <li>
                                {" "}
                                <div className=' flex space-x-2'>
                                    {" "}
                                    <FaPhoneSquareAlt
                                        size={25}
                                        style={{ color: "#FFFFFF" }}
                                    />{" "}
                                    <p> +213 123 456 789</p>{" "}
                                </div>
                            </li>
                            <li>
                                <div className='flex space-x-2'>
                                    {" "}
                                    <FaEnvelope
                                        size={25}
                                        style={{ color: "#FFFFFF" }}
                                    />{" "}
                                    <p> Contact@studentstore.com</p>{" "}
                                </div>
                            </li>
                        </ul>

                        <div className='flex p-2 space-y-8 flex-col items-center justify-center'>
                            <ul className='  space-y-4 text-white font-bold text-xl'>
                                <li className='hover:underline hover:text-orange'>
                                    <div className='flex space-x-2'>
                                        {" "}
                                        <FaRegPlusSquare
                                            size={20}
                                            style={{
                                                color: "#FFFFFF",
                                                alignSelf: "center",
                                            }}
                                        />{" "}
                                        <a
                                            className=''
                                            onClick={() =>
                                                navigateToPage("/Listings")
                                            }
                                        >
                                            {t("Start selling")}
                                        </a>{" "}
                                    </div>
                                </li>
                                <li>
                                    <div className='flex space-x-2'>
                                        <FaWallet
                                            size={20}
                                            style={{
                                                color: "#FFFFFF",
                                                alignSelf: "center",
                                            }}
                                        />
                                        <a
                                            className='hover:underline hover:text-orange'
                                            onClick={() =>
                                                navigateToPage(
                                                    "/AllProducts/AllProducts"
                                                )
                                            }
                                        >
                                            {t("Buy products")}
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className=' p-4 flex justify-center space-x-8'>
                        <Link href='/' className=' '>
                            <Image
                                src='/google_play.png'
                                width={150}
                                height={150}
                                alt='logo'
                            />
                        </Link>
                        <Link className='' href='/'>
                            <Image
                                src='/app_store.png'
                                width={150}
                                height={150}
                                alt='logo'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' mobile block md:hidden '>
                <div className='flex-col   bg-[#32314C] w-full h-full break-all mt-auto '>
                    <div className=' flex justify-center p-4 '>
                        <Link className='' href='/'>
                            <Image
                                src='/images/logo-footer.svg'
                                width={180}
                                height={75}
                                alt='logo'
                            />
                        </Link>
                    </div>

                    <div className='flex justify-around p-2'>
                        <ul className='space-y-3 text-white font-bold text-lg'>
                            <li>
                                <a
                                    className='hover:underline hover:text-orange'
                                    onClick={() =>
                                        navigateToPage("/AboutUs/AboutUs")
                                    }
                                >
                                    {t("About us")}
                                </a>
                            </li>
                            <li>
                                {" "}
                                <h2 className=''>{t("Our Team")}</h2>{" "}
                            </li>
                            <li>
                                {" "}
                                <ul className='text-gray-600 space-y-1 dark:text-gray-400 font-bold'>
                                    <li>
                                        {" "}
                                        <h2 className=' text-white font-bold text-lg'>
                                            {t("Contact Us:")}
                                        </h2>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <div className=' flex space-x-2'>
                                            {" "}
                                            <FaPhoneSquareAlt
                                                size={25}
                                                style={{ color: "#FFFFFF" }}
                                            />{" "}
                                            <p> +213 123 456 789</p>{" "}
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex space-x-2'>
                                            {" "}
                                            <FaEnvelope
                                                size={25}
                                                style={{ color: "#FFFFFF" }}
                                            />{" "}
                                            <p> Contact@studentstore.com</p>{" "}
                                        </div>
                                    </li>
                                </ul>{" "}
                            </li>
                        </ul>

                        <div className='flex p-2 space-y-8 flex-col items-center justify-center'></div>
                        <div className='social-media items-center flex  flex-col space-y-4 '>
                            <a
                                className='items-center'
                                href='https://web.facebook.com/recodedofficial'
                            >
                                <FaFacebook
                                    className='items-center'
                                    size={40}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>
                            <a href='https://www.linkedin.com/school/re-coded/'>
                                <FaLinkedin
                                    size={40}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>
                            <a href='https://www.instagram.com/recodedofficial/'>
                                <FaInstagram
                                    size={40}
                                    style={{ color: "#FFFFFF" }}
                                />
                            </a>
                        </div>
                    </div>
                    <li className='flex justify-center'>
                        {" "}
                        <ul className=' space-y-4 text-white font-bold text-xl'>
                            <li className='hover:underline hover:text-orange'>
                                <div className='flex  space-x-2'>
                                    {" "}
                                    <FaRegPlusSquare
                                        size={20}
                                        style={{
                                            color: "#FFFFFF",
                                            alignSelf: "center",
                                        }}
                                    />{" "}
                                    <a
                                        className=''
                                        onClick={() =>
                                            navigateToPage("/Listings")
                                        }
                                    >
                                        {t("Start selling")}
                                    </a>{" "}
                                </div>
                            </li>
                            <li>
                                <div className='flex space-x-2'>
                                    <FaWallet
                                        size={20}
                                        style={{
                                            color: "#FFFFFF",
                                            alignSelf: "center",
                                        }}
                                    />
                                    <a
                                        className='hover:underline hover:text-orange'
                                        onClick={() =>
                                            navigateToPage(
                                                "/AllProducts/AllProducts"
                                            )
                                        }
                                    >
                                        {t("Buy products")}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <div className=' p-4 flex justify-center space-x-8'>
                        <Link href='/' className=' '>
                            <Image
                                src='/google_play.png'
                                width={150}
                                height={150}
                                alt='logo'
                            />
                        </Link>
                        <Link className='' href='/'>
                            <Image
                                src='/app_store.png'
                                width={150}
                                height={150}
                                alt='logo'
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-center p-2 font-semibold bg-black text-white  text-sm '>
                <p>
                    © 2023 Team 10, Recoded Front-End Bootcamp. All rights
                    reserved.
                </p>
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
                        className='scroll-arrow animate-bounce '
                    >
                        <IoIosArrowUp size={48} color={arrowColor} />
                    </button>
                </div>
            )}
        </footer>
    );
}

export default withTranslation("common")(Footer);

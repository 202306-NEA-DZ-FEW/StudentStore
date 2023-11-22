import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Button from "@/components/Buttons/Button";
import GithubButton from "@/components/GithubButton/GithubButton";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import TwitterButton from "@/components/TwitterButton/TwitterButton";

import { useAuth } from "@/context/AuthContext";
export default function SignIn() {
    const { t } = useTranslation("sign");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const route = useRouter();
    // sign in function
    async function handleSignin(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await login(email, password);
            route.push("/home");
        } catch {
            toast.error(t("failed to log in"), { autoClose: 1000 });
        } finally {
            setLoading(false);
            setEmail("");
            setPassword("");
        }
    }
    // signup bg style
    const signinbg = {
        backgroundImage: `linear-gradient(to left, #F1F6FA 35%, rgba(217, 217, 217, 0) 100%),url(/images/signin-bg.jpg)`,
        backgroundPosition: "right",
    };
    return (
        <div
            style={signinbg}
            className='min-h-screen w-full flex justify-center lg:justify-between items-center text-center  pb-6 '
        >
            {/* container for image to add later */}
            <div className='lg:w-[45%] lg:py-16 lg:px-16'>
                <Image
                    src='/hands_box.png'
                    alt='hands box image'
                    height={500}
                    width={500}
                    layout='responsive'
                    className='hidden lg:block'
                />
            </div>
            {/* form container */}
            <div className='py-10 lg:w-[55%] lg:px-10'>
                <div className='lg:w-[60%] mx-auto'>
                    <h1 className='text-[#FF8A57] text-[30px] font-bold mb-6 md:text-6xl md:mb-14 lg:text-5xl xl:text-5xl'>
                        {t("sign-in")}
                    </h1>
                    <form>
                        <input
                            type='email'
                            placeholder={t("email")}
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className='text-center py-2 rounded-md placeholder-[#21567e] block w-[100%] mx-auto md:w-[100%] lg:w-full my-3 focus:outline-[#FF8A57]'
                        />

                        <input
                            type='password'
                            placeholder={t("password")}
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className='text-center py-2 rounded-md placeholder-[#21567e] block w-[100%] mx-auto md:w-[100%] lg:w-full my-3 focus:outline-[#FF8A57]'
                        />
                        <div className='flex w-[100%] justify-between mx-auto  '>
                            <Button
                                onClick={handleSignin}
                                disabled={loading}
                                className='mt-7 mb-5 w-[48%]  px-0'
                            >
                                {t("sign-in")}
                            </Button>

                            <Link
                                href='/forgotpassword'
                                className='mt-7 mb-5 w-[48%] py-2 px-0 border-2 border-[#FF8A57]  rounded-lg text-[#FF8A57] shadow-sm text-md hover:bg-[#FF8A57] hover:text-white hover:border-2  hover:duration-300 font-bold  bg-white    hover:border-[#FF8A57]'
                            >
                                {t("forgot password")}
                            </Link>
                        </div>
                    </form>
                    {/* devider */}
                    <div className='relative flex items-center w-[100%] mx-auto md:w-[100%] lg:w-full'>
                        <div className='flex-grow border-t border-[#a7b8c4]'></div>
                        <span className='flex-shrink mx-4 text-[#a7b8c4]'>
                            {t("or")}
                        </span>
                        <div className='flex-grow border-t border-[#a7b8c4]'></div>
                    </div>
                    <h3 className='text-center text-[#647581] mt-1'>
                        {t("sign-in with")}
                    </h3>
                    {/* sign in with socials */}
                    <div className='flex justify-center gap-2 mt-7 w-[80%] mx-auto md:w-[100%] lg:w-full'>
                        <GoogleButton t={t}>{t("google")}</GoogleButton>
                        <TwitterButton t={t}>{t("twitter")}</TwitterButton>
                        <GithubButton t={t}>{t("github")}</GithubButton>
                    </div>
                    <h2 className='mt-5 text-[#647581]'>
                        {t("dont have an account")}
                    </h2>
                    <Link href='/signup' className='block'>
                        <Button className='mt-3 py-1 px-10'>
                            {t("sign-up")}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "sign"])),
            // Will be passed to the page component as props
        },
    };
}

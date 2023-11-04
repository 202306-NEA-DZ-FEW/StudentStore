import Button from "@/components/Buttons/Button";
import FacebookButton from "@/components/FacebookButton/FacebookButton";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import TwitterButton from "@/components/TwitterButton/TwitterButton";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
            route.push("/");
        } catch (error) {
            toast.error(t("failed to log in"));
        }
        setLoading(false);
    }

    return (
        <Layout>
            <div className='min-h-screen w-full bg-cover flex justify-between items-center text-center py-10'>
                {/* container for image to add later */}
                <div className='lg:w-3/6 lg:py-16 lg:px-16'></div>
                {/* form container */}
                <div className='py-10 lg:w-3/6 lg:px-10'>
                    <div className='lg:w-[60%] mx-auto'>
                        <h1 className='text-[#FF8A57] text-[30px] font-bold mb-6 md:text-6xl md:mb-14 lg:text-5xl xl:text-7xl'>
                            {t("sign-in")}
                        </h1>
                        <form>
                            <input
                                type='email'
                                placeholder={t("email")}
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className='text-center py-2 rounded-sm placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3'
                            />

                            <input
                                type='password'
                                placeholder={t("password")}
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className='text-center py-2 rounded-sm placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3'
                            />
                            <div className='flex w-[80%] justify-between mx-auto  md:w-[100%] lg:w-full'>
                                <Button
                                    onClick={handleSignin}
                                    disabled={loading}
                                    className='mt-7 mb-5 w-[45%] p-0'
                                >
                                    {t("sign-in")}
                                </Button>
                                <Button className='mt-7 mb-5 w-[50%] p-0'>
                                    <Link href='/signin/forgotPassword'>
                                        {t("forgot password")}
                                    </Link>
                                </Button>
                            </div>
                        </form>
                        {/* devider */}
                        <div className='relative flex items-center w-[80%] mx-auto md:w-[100%] lg:w-full'>
                            <div className='flex-grow border-t border-[#a7b8c4]'></div>
                            <span className='flex-shrink mx-4 text-[#a7b8c4]'>
                                {t("or")}
                            </span>
                            <div className='flex-grow border-t border-[#a7b8c4]'></div>
                        </div>
                        <h3 className='text-center text-[#647581] mt-1'>
                            {t("sign-in with")}
                        </h3>
                        {/* sign up with socials */}
                        <div className='flex justify-center gap-2 mt-7 w-[80%] mx-auto md:w-[100%] lg:w-full'>
                            <GoogleButton>{t("google")}</GoogleButton>
                            <FacebookButton>{t("facebook")}</FacebookButton>
                            <TwitterButton>{t("twitter")}</TwitterButton>
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
                <ToastContainer />
            </div>
        </Layout>
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

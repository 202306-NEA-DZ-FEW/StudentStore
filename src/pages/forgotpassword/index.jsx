import Button from "@/components/Buttons/Button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ForgotPassword() {
    const { t } = useTranslation("sign");
    const [email, setEmail] = useState("");
    const { resetPassword } = useAuth();
    const route = useRouter();

    // reset password function
    async function handleResetPassword(e) {
        e.preventDefault();
        if (email) {
            try {
                await resetPassword(email);
                toast.success(t("check your inbox for further instructions"));
                setTimeout(() => {
                    route.push("/signin");
                }, 3000);
            } catch {
                toast.error(t("failed to reset password"));
            }
        } else {
            toast.error(t("please enter your email"));
        }
        setTimeout(() => {
            setEmail("");
        }, 1000);
    }
    const signinbg = {
        backgroundImage: `linear-gradient(to left, #F1F6FA 35%, rgba(217, 217, 217, 0) 100%),url(/images/signin-bg.jpg)`,
        backgroundPosition: "right",
    };
    return (
        <div
            style={signinbg}
            className='min-h-screen w-full lg:flex lg:justify-between flex justify-center items-center text-center'
        >
            {/* container for image to add later */}
            <div className='lg:w-3/6 lg:py-16 lg:px-16'>
                <Image
                    src='/hands_box.png'
                    alt='hands box image'
                    height={500}
                    width={500}
                    className='hidden lg:block'
                />
            </div>
            {/* form container */}
            <div className='py-10 w-full md:w-[60%] lg:w-3/6 lg:px-10'>
                <div className='lg:w-[70%] mx-auto'>
                    <h1 className='text-[#FF8A57] text-[30px] font-bold mb-6 md:text-5xl md:mb-14 lg:mb-10 lg:text-3xl xl:text-4xl'>
                        {t("password reset")}
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

                        <Button
                            className='mt-7 mb-5'
                            onClick={handleResetPassword}
                        >
                            {t("reset password")}
                        </Button>
                    </form>
                </div>
            </div>
            <ToastContainer />
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

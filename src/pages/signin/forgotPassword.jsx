import Button from "@/components/Buttons/Button";
import FacebookButton from "@/components/FacebookButton/FacebookButton";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import TwitterButton from "@/components/TwitterButton/TwitterButton";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    // const [checkEmail, setCheckEmail] = useState("");

    const { resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const route = useRouter();

    // reset password function
    async function handleResetPassword() {
        if (email) {
            try {
                setLoading(true);
                await resetPassword(email);
            } catch (error) {
                console.log(error);
            }
        } else {
            // Show a message to require filling the email input
            console.log("Please enter your email.");
        }
        setEmail("");
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
                            reset Password
                        </h1>
                        <form>
                            <input
                                type='email'
                                placeholder='email'
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className='text-center py-2 rounded-sm placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3'
                            />

                            <div className='flex w-[80%] justify-between mx-auto  md:w-[100%] lg:w-full'>
                                <Button className='mt-7 mb-5 w-[50%] p-0'>
                                    Reset Passowrd
                                </Button>
                            </div>
                        </form>

                        {/* devider */}
                        <div className='relative flex items-center w-[80%] mx-auto md:w-[100%] lg:w-full'>
                            <div className='flex-grow border-t border-[#a7b8c4]'></div>
                            <span className='flex-shrink mx-4 text-[#a7b8c4]'>
                                or
                            </span>
                            <div className='flex-grow border-t border-[#a7b8c4]'></div>
                        </div>
                        <h3 className='text-center text-[#647581] mt-1'>
                            sign-in with
                        </h3>
                        {/* sign up with socials */}
                        <div className='flex justify-center gap-2 mt-7 w-[80%] mx-auto md:w-[100%] lg:w-full'>
                            <GoogleButton>google</GoogleButton>
                            <FacebookButton>facebook</FacebookButton>
                            <TwitterButton>twitter</TwitterButton>
                        </div>
                        <h2 className='mt-5 text-[#647581]'>
                            dont have an account
                        </h2>
                        <Link href='/signup' className='block'>
                            <Button className='mt-3 py-1 px-10'>sign up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

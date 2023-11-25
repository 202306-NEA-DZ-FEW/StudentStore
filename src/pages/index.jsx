import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";

const TypingText = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (displayText.length < text.length) {
                setDisplayText(text.substring(0, displayText.length + 1));
            } else {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [displayText, text, speed]);

    return (
        <p className='font-poppins leading-loose font-normal text-2xl text-[#585785] '>
            <strong>{displayText}</strong>
        </p>
    );
};

export default function splashpage() {
    return (
        <motion.div className='bg-blue-100 min-h-screen flex justify-center items-center mt-[-96px] flex-col pt-6 p-8 lg:fixed lg:w-full'>
            <div className='flex items-center'>
                <motion.div
                    className=' flex'
                    initial={{ opacity: 0, x: -300, rotate: 180 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <Image src='Logo.svg' width={130} height={130} alt='Logo' />
                </motion.div>
                <motion.div
                    className='w-full h-full pt-6'
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <span className="text-orange-500 text-4xl font-bold ,   fontFamily: 'Clash Display Variable', wordWrap: 'break-word'">
                        Student
                        <br />
                    </span>
                    <span
                        className="text-indigo-800  text-4xl  font-bold ,  fontFamily: 'Clash Display Variable', wordWrap: 'break-word'"
                        style={{ marginTop: "10px" }}
                    >
                        Store
                    </span>
                </motion.div>
            </div>
            <div className='flex flex-col  items-center h-[80%] gap-x-8 lg:flex-row-reverse	'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <Image
                        src='/splash.png'
                        width={500}
                        height={500}
                        alt='Picture of the author'
                    />
                </motion.div>
                <div className='ml-2  text-center flex justify-center flex-col min-h-[500px] '>
                    <p className='min-w-[488px]'>
                        <TypingText
                            text='Empowering Futures, Connecting Students'
                            speed={100}
                        />
                    </p>
                    <div className='container mx-auto py-4 '>
                        <h1 className='text-2xl text-[#585785] mb-2'>
                            Your Exclusive Student Marketplace!
                        </h1>

                        <div className='flex justify-center pt-6 gap-10 lg:flex-row md:flex-row sm: flex-col'>
                            <div className='text-[#5452b0]'>
                                <AnimatedCounter targetCount={2562} />
                                <h1 className='text-xl '>Students</h1>
                            </div>
                            <div className='text-[#7874F2]'>
                                <AnimatedCounter targetCount={1658} />
                                <h1 className='text-xl '>Products</h1>
                            </div>
                            <div className='text-[#6165D7]'>
                                <AnimatedCounter targetCount={25} />
                                <h1 className='text-xl '>Universities</h1>
                            </div>
                        </div>
                    </div>
                    <div className='  flex justify-center gap-10 lg:flex-row md:flex-row  '>
                        <button class='bg-[#585785] font-normal  text-xl text-white rounded-md mx-auto block  mt-10 py-2 px-6 transition ease-in-out    hover:bg-orange-500 duration-300'>
                            <Link href='/home'> Explore</Link>
                        </button>
                        <button class='bg-[#585785] font-normal  text-xl text-white rounded-md mx-auto block  mt-10 py-2 px-6 transition ease-in-out   hover:bg-orange-500 duration-300'>
                            <Link href='/signup'> Join us</Link>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

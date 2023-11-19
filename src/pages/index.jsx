import Image from "next/image";
import Link from "next/link";
import React from "react";

import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";

export default function splashpage() {
    return (
        <div className='bg-blue-100 min-h-screen flex justify-center items-center mt-[-96px] flex-col pt-6 p-8 lg:fixed lg:w-full'>
            {/* <div className='flex pt-2 justify-center gap-3 items-center '>
                <div className=''>
                    <Image
                        src='/logo.png'
                        width={65}
                        height={65}
                        alt='Picture of the author'
                    />
                </div>
                <div>
                    <h1 className='text-center text-4xl  text-[#141E46]  font-semibold  drop-shadow-md lg:text-5xl '>
                        Student Store
                    </h1>
                </div>
            </div> */}

            <div className=' glow flex'>
                <Image src='Logo.svg' width={130} height={130} alt='Logo' />
                <div className='w-full h-full pt-6'>
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
                </div>
            </div>
            <div className='flex flex-col  items-center h-[80%] gap-x-8 lg:flex-row-reverse	'>
                <div className='lg:w-[50%] flex justify-center  '>
                    <Image
                        src='/splash.png'
                        width={500}
                        height={500}
                        alt='Picture of the author'
                    />
                </div>
                <div className='ml-2 text-center flex justify-center flex-col	'>
                    <p className='font-poppins leading-loose font-normal	 text-2xl text-[#585785] '>
                        <strong>Empowering Futures,</strong>
                        Connecting Students
                    </p>
                    <div className='container mx-auto py-4 '>
                        <h1 className='text-2xl text-[#585785] mb-2'>
                            Your Exclusive Student Marketplace!
                        </h1>

                        <div className='flex justify-center pt-6 gap-10 lg:flex-row md:flex-row sm: flex-col'>
                            <div className='text-[#5452b0]'>
                                {" "}
                                <AnimatedCounter targetCount={2562} />{" "}
                                <h1 className='text-xl '>Students</h1>{" "}
                            </div>
                            <div className='text-[#7874F2]'>
                                {" "}
                                <AnimatedCounter targetCount={1658} />{" "}
                                <h1 className='text-xl '>Products </h1>{" "}
                            </div>
                            <div className='text-[#6165D7]'>
                                {" "}
                                <AnimatedCounter targetCount={25} />{" "}
                                <h1 className='text-xl '>Universities </h1>{" "}
                            </div>
                        </div>
                    </div>
                    <div className='  flex justify-center gap-10 lg:flex-row md:flex-row  '>
                        <button class='bg-[#585785] font-normal  text-xl text-white rounded-full mx-auto block  mt-10 py-2 px-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300'>
                            <Link href='/signup'> Join us</Link>
                        </button>
                        <button class='bg-[#585785] font-normal  text-xl text-white rounded-full mx-auto block  mt-10 py-2 px-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300'>
                            <Link href='/home'> Explore</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

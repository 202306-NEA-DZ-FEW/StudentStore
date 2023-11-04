import React from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar";
import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";
import Link from "next/link";

export default function splashpage() {
    return (
        <div className='bg-blue-100 min-h-screen'>
            <div className='flex pt-2 justify-center'>
                <div className=''>
                    <Image
                        src='/logo.png'
                        width={50}
                        height={50}
                        alt='Picture of the author'
                    />
                </div>
                <div>
                    <h1 className='text-center text-4xl  text-[#141E46]  font-semibold  drop-shadow-md lg:text-6xl '>
                        Student Store
                    </h1>
                </div>
            </div>

            <div className='flex flex-col  items-center h-[80%] lg:flex-row-reverse	'>
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
                    <div className='container mx-auto py-4'>
                        <h1 className='text-2xl text-[#585785] mb-2'>
                            Your Exclusive Student Marketplace!
                        </h1>

                        <div className='flex justify-center gap-10'>
                            <div className='text-[#585785]'>
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
                    <button class='bg-[#585785] font-normal  text-2xl text-white rounded-full mx-auto block  mt-10 py-2 px-6'>
                        <Link href='/signup'> Join us</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

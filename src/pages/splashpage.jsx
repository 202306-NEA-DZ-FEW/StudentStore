import React from "react";
import Image from "next/image";

export default function splashpage() {
    return (
        <div className='bg-blue-100'>
            <div className='flex justify-center'>
                <div>
                    {" "}
                    <Image
                        src='/logo.png'
                        width={50}
                        height={50}
                        alt='Picture of the author'
                    />{" "}
                </div>
                <div>
                    {" "}
                    <h1 className='text-center text-5xl  text-[#141E46]  font-semibold font-poppins drop-shadow-md '>
                        {" "}
                        Student Store
                    </h1>{" "}
                </div>
            </div>

            <div className='flex mt-10 items-center'>
                <div className='w-2/3 p-4 ml-12'>
                    <p className='font-poppins leading-loose font-normal	 text-2xl text-[#585785] '>
                        The purpose of this website is to create a marketplace
                        for <strong>students</strong> to easily sell, buy, or
                        borrow affordable and used products, including
                        electronics, games, and study books.
                    </p>
                </div>

                <div className='w-1/3 p-4'>
                    <Image
                        src='/overview.png'
                        width={500}
                        height={500}
                        layout='responsive'
                        alt='Picture of the author'
                    />
                </div>
            </div>

            <div className='flex'>
                <div className='ml-5 w-1/2 p-4'>
                    <Image
                        src='/goals.png'
                        width={500}
                        height={500}
                        layout='responsive'
                        alt='Picture of the author'
                    />
                </div>
                <div className='w-1/2 mt-10'>
                    <ul className='  font-normal list-disc leading-loose 	text-2xl text-[#585785] mt-10'>
                        <li>
                            To provide students with a platform to trade and
                            share products within their community.
                        </li>
                        <li>
                            Facilitate the easy listing of products for sale or
                            borrowing.
                        </li>
                        <li>
                            Create a seamless user experience for filtering and
                            buying products.
                        </li>
                    </ul>
                    <button class='bg-[#585785] font-normal  text-2xl text-white rounded-full mx-auto block  mt-10 py-2 px-6'>
                        Join us
                    </button>
                </div>
            </div>
            <br></br>
        </div>
    );
}

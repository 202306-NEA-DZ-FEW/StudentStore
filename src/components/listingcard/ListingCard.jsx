import Image from "next/image";
import Link from "next/link";
import React from "react";

function ListingCard({ product }) {
    return (
        <div className='w-56 bg-white shadow-md rounded-xl duration-500  hover:shadow-xl'>
            <Link href='/'>
                <div className='relative border-b-2 border-gray-300'>
                    <Image
                        src={product?.pictures[1]}
                        height={364}
                        width={288}
                        alt='Product'
                        className='h-64 w-56 object-cover rounded-t-xl'
                        loading='lazy'
                    />
                    <div className='absolute top-0 m-2  left-0 rounded-full '>
                        <p
                            className={`${
                                product?.type === "sale"
                                    ? "bg-[#1B96EF]"
                                    : "bg-[#FF8A57]"
                            } rounded-full px-2  p-1 text-[12px] font-bold capitalize tracking-wide text-white  sm:py-1 sm:px-3`}
                        >
                            {product?.type}
                        </p>
                    </div>
                </div>
            </Link>
            <div className='px-4 py-3 w-56'>
                <div className='flex justify-between'>
                    <span className='text-gray-400 mr-3 uppercase text-xs'>
                        {product?.category}
                    </span>
                    <span className='text-gray-400 ml-3 capitalize font-semibold text-xs'>
                        {product?.condition}
                    </span>
                </div>
                <Link href='/'>
                    <p className='text-lg font-bold  mt-2 text-black truncate block capitalize'>
                        {product?.title}
                    </p>
                </Link>
                <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black cursor-auto my-3'>
                        {product?.price}$
                    </p>
                    <div className='ml-auto'>
                        <button className='hover:text-purple-700'>
                            <svg
                                className=''
                                xmlns='http://www.w3.org/2000/svg'
                                width='26'
                                height='26'
                                fill='currentColor'
                                viewBox='0 0 16 16'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
                                />
                                <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";

import { CartContext } from "@/context/CartContext";

function ProductCard({ product }) {
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <div className='card w-[220px]  bg-white shadow-xl'>
            <div className='relative'>
                <Link href=''>
                    <figure className='w-full h-[180px] rounded-t-2xl  relative'>
                        <Image
                            fill
                            className='w-full h-full group-hover:scale-110 duration-200 object-cover'
                            src={product.pictures[1]}
                            alt={product.title}
                            priority
                        />
                    </figure>
                </Link>
                <div className='absolute top-0 m-2  left-0 rounded-full '>
                    <p
                        className={`${
                            product?.type === "sale"
                                ? "bg-[#1B96EF]"
                                : "bg-[#FF8A57]"
                        } rounded-full  p-1 text-[11px] font-bold capitalize tracking-wide text-white sm:py-1 sm:px-3`}
                    >
                        {product?.type}
                    </p>
                </div>
            </div>

            <div className='mt-1 flex flex-col justify-between px-3 p-2  mb-2 '>
                <h2 className=' text-slate-900 text-xl max-w-lg  tracking-tight font-semibold text-center '>
                    {product.title.length > 18
                        ? product.title.substring(0, 18) + "..."
                        : product.title}
                </h2>
                <div className='mt-3 mb-4 w-full flex items-center justify-between text-slate-600'>
                    <p className='badge bg-slate-600 text-white'>
                        {product?.category}
                    </p>
                    <p className='capitalize'>{product?.location.city}</p>
                </div>
                <div className=' flex items-center   justify-between font-semibold text-slate-900 '>
                    <p className='text-xl '>{product?.price}$</p>
                    <button
                        onClick={addProductToCart}
                        className='text-3xl  text-[#4fd65a] hover:text-[#76be7c]'
                    >
                        <FaCartPlus />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

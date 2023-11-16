import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { CartContext } from "@/context/CartContext";

function ProductCard({ product }) {
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <div className='card w-[220px] bg-white shadow-xl'>
            <div className='relative flex justify-center items-center m-4 mb-0 rounded-lg h-[80%]  '>
                <figure className='  rounded-lg '>
                    <Image
                        className='object-cover  scale-100 rounded-lg transition-transform hover:scale-105 duration-300 ease-in-out overflow-hidden'
                        src={product?.pictures[1]}
                        width={200}
                        height={200}
                        alt='Picture of the product'
                    />
                    <div className='absolute top-0 m-2  left-0 rounded-full '>
                        <p className='rounded-full bg-[#7874F2] p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3'>
                            {product?.type}
                        </p>
                    </div>
                </figure>
            </div>

            <div className='mt-1 px-5 p-4  mb-2 '>
                <h2 className='card-title text-slate-900 text-xl max-w-lg tracking-tight font-bold text-center '>
                    {product?.title}
                </h2>
                <div className='mt-3 mb-4 w-full  flex items-center   justify-between   text-slate-600 '>
                    <p className=' badge badge-outline '>{product?.category}</p>
                    <p className='capitalize'>{product?.location.city}</p>
                </div>
                <div className=' flex items-center   justify-between font-semibold text-slate-900 '>
                    <p className='text-xl '>{product?.price}</p>
                    <button
                        onClick={addProductToCart}
                        className='text-3xl  text-[#FF8A57] hover:text-orange-500'
                    >
                        <FaShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

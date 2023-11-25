import { deleteDoc, doc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { db } from "@/util/firebase";

function ListingCard({ product, route }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (confirmDelete) {
            try {
                setIsDeleting(true);

                const productRef = doc(db, "products", product.id);
                await deleteDoc(productRef);

                toast.success("Product deleted successfully!");
            } catch (error) {
                console.error("Error deleting product:", error);
                toast.error(`Failed to delete product: ${error.message}`);
            } finally {
                setIsDeleting(false);
            }
        }
    };

    return (
        <div
            className='w-56 bg-white shadow-md rounded-xl duration-500  hover:shadow-xl'
            dir={`${route?.locale === "ar" ? "ltr" : ""}`}
        >
            <Link href={`/singleproduct/${product?.id}`}>
                <div className='relative border-b-2 border-gray-300'>
                    <Image
                        src={product?.pictures[1]}
                        height={364}
                        width={288}
                        alt='Product image'
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
                        <button onClick={handleDelete} className='text-red-500'>
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingCard;

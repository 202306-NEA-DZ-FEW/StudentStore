import React, { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "../../util/firebase.js";
import { doc, getDoc, collection } from "firebase/firestore";
import Link from "next/link.js";

function ProductDetails() {
    const [productData, setProductData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            const productRef = doc(db, "products", "3AMbn2OGg7MdOmLMsMqo");
            const productDoc = await getDoc(productRef);
            if (productDoc.exists()) {
                setProductData(productDoc.data());
            } else {
                console.log("No such document!");
            }
        };

        const fetchUserData = async () => {
            const userRef = doc(db, "userinfo", "e43JDIG05abGPsH43xEKBNsD49e2");
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
                setUserData(userDoc.data());
            } else {
                console.log("No such document!");
            }
        };

        fetchProductData();
        fetchUserData();
    }, []);

    if (!productData || !userData) {
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{ margin: "40px" }}
            className='flex flex-col gap-6 sm:gap-6 sm:flex-col md:flex-col  md:justify-center lg:flex-row lg:justify-between'
        >
            <div className='grid grid-cols-3  md:flex lg:grid lg:grid-rows-3  w-full sm:w-full md:w-full lg:w-1/2  justify-between  gap-4'>
                <div className='col-span-3 row-span-1 md:grid-rows-2 items-center justify-center overflow-hidden w-full lg:h-80 md:w-[60%] lg:w-full bg-[#EEF2F4]  border rounded-md border-[#979797]'>
                    <Image
                        className='object-cover w-full h-full rounded-md '
                        src={productData.pictures[0]}
                        width={1600}
                        height={1000}
                        alt='product image'
                    />
                </div>
                <div className=' col-span-3 row-span-1    md:w-[40%] lg:w-full rounded-md gap-1'>
                    <div className='flex justify-between  gap-4 md:grid md:grid-cols-2 md:grid-rows-1 sm:gap-2  lg:flex   '>
                        <div className='col-span-2 row-span-1 md:row-span-2 w-full  bg-[#EEF2F4] h-20 sm:h-28 md:h-64 lg:h-28  border rounded-md border-[#979797] overflow-hidden'>
                            <Image
                                className='object-cover w-full h-full rounded-md '
                                src={productData.pictures[1]}
                                width={1600}
                                height={1000}
                                alt='product image'
                            />
                        </div>

                        <div className='w-full col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-28  border rounded-md border-[#979797] overflow-hidden'>
                            <Image
                                className='object-cover w-full h-full '
                                src={productData.pictures[2]}
                                width={1600}
                                height={1000}
                                alt='product image'
                            />
                        </div>
                        <div className='col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-28  w-full border  rounded-md border-[#979797] overflow-hidden lg:w-full'>
                            <Image
                                className='object-cover w-full h-full '
                                src={productData.pictures[3]}
                                width={1600}
                                height={1000}
                                alt='product image'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
                <h1 className='text-2xl font-bold text-[#7874F2] bg-background-title bg-no-repeat sm:text-3xl'>
                    {productData.title}
                </h1>
                <div className='mt-5 items-center  pl-4 flex justify-between'>
                    <span className='flex flex-col gap-5'>
                        <p className='text-1xl text-[#585785]'>
                            <span className='font-bold'>Category: </span>
                            {productData.category}
                        </p>
                        <p className='text-1xl text-[#585785]'>
                            <span className='font-bold'>
                                For {productData.type}
                            </span>
                            {/* {data?.location} */}
                        </p>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <p className='text-1xl text-[#585785]'>
                            <span className='font-bold'>Condition </span>
                            {productData.condition}
                        </p>
                        <p className='text-1xl text-[#585785]'>
                            <span className='font-bold'>
                                {" "}
                                <button className='bg-[#585785] shadow-lg text-white px-2 rounded-lg'>
                                    Add to favorites
                                </button>
                            </span>
                        </p>
                    </span>
                </div>
                <span className='flex justify-between mx-4 mt-8'>
                    <h2 className=' text-[#585785] text-2xl'>Details:</h2>
                </span>
                <br />
                <hr className='border-2 ml-4 bg-[#7874F2]' />
                <div className='flex flex-col text-[#585785] items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0'></div>
                <div className=' text-[#585785] text-1xl pl-4 h-8 overflow-y-scroll'>
                    <p>{productData.description}</p>
                </div>
                <div className='mt-10 mb-6 flex select-none mx-auto items-center gap-1 sm:ml-28 lg:ml-0'>
                    {/* User Info */}

                    <div className='flex flex-row bg-[#585785] w-auto h-20 lg:w-96 lg:h-36 md:w-auto md:h-36 rounded-l-full  border-r-4 border-dashed'>
                        <div className='m-auto ml-2'>
                            <Image
                                src={userData.photo}
                                width={100}
                                height={100}
                                alt='profile'
                                className='w-16 h-16 lg:w-32 lg:h-28 md:w-32 md:h-28 rounded-full'
                            />
                        </div>
                        <div className='m-auto lg:m-auto text-white text-[14px] lg:text-lg md:text-lg'>
                            <h1 className='font-semibold '>
                                {userData.name} {userData.surname}
                            </h1>
                            <h2 className='w-[20vh] '>{userData.email}</h2>
                            <h2>
                                {productData.location.city},{" "}
                                {productData.location.country}
                            </h2>
                        </div>
                    </div>

                    <div className='grid justify-items-center bg-orange-500 w-20 h-20 lg:w-36 lg:h-36 md:w-36 md:h-36'>
                        <h1 className=' text-white font-semibold text-[14px] lg:text-3xl md:text-3xl m-auto'>
                            {productData.price}
                            <span>$</span>
                        </h1>
                    </div>
                    <div className='grid justify-items-center bg-transparent w-20 h-20 lg:w-36 lg:h-36 md:w-36 md:h-36'></div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

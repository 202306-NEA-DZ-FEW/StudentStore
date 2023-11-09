import React, { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "../../util/firebase.js";
import { doc, getDoc, collection } from "firebase/firestore";
function ProductDetails() {
    const [productData, setProductData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            const productRef = doc(db, "products", "HfUS2i3IGbErrayIPPz8");
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
            <div className=' grid w-full sm:w-full md:w-full  lg:w-1/2  grid-cols-4 grid-rows-6 gap-4 text-[#585785]'>
                {/* Product Details */}
                <div className='col-span-4 md:col-span-2'>
                    <h1 className='text-3xl font-bold text-[#7874F2] mb-4'>
                        {productData.title}
                    </h1>

                    <div className='flex mb-2'>
                        <p className='mr-20'>
                            <span className='font-bold'>Condition: </span>
                            {productData.condition}
                        </p>

                        <p className=''>
                            <span className='font-bold'>Category: </span>
                            {productData.category}
                        </p>
                    </div>
                    <div className='flex mb-2'>
                        <p className='bg-orange-500 py-1 px-2 rounded font-bold text-white mr-20'>
                            For {productData.type}
                        </p>
                        <button className='bg-[#7874F2] py-1 px-2 rounded font-bold text-white ml-12'>
                            Add to Favorites
                        </button>
                    </div>
                </div>

                <div className='col-span-4 row-span-1 '>
                    <h1 className='text-xl font-bold'>Details:</h1>
                    <hr />
                    <div className='overflow-y-scroll max-h-[100px]'>
                        {productData.description}
                    </div>
                </div>

                {/* User Info */}

                <div className='flex flex-row items-center bg-[#585785] ml-16  w-64 h-16 lg:w-80 lg:h-24 md:w-80 md:h-24 rounded-l-full border-r-4 border-dashed'>
                    <div className='m-auto ml-2'>
                        <Image
                            alt='profile'
                            width='80'
                            height='80'
                            className='w-8 h-8 lg:w-16 lg:h-16 md:w-16 md:h-16 rounded-full sm:w-4'
                            src={userData.photo}
                        />
                    </div>
                    <div className='m-auto  text-white text-sm lg:text-base md:text-base'>
                        <h1 className='font-semibold text-xs lg:text-sm'>
                            {userData.name} {userData.surname}
                        </h1>
                        <h2 className='w-[27vh] overflow-hidden'>
                            <span className='font-bold'></span>{" "}
                            <span className='truncate'>{userData.email}</span>
                        </h2>
                        <h2>
                            <span className='font-bold'></span>{" "}
                            {productData.location.city},
                            {productData.location.country}
                        </h2>
                    </div>
                </div>
                <div className='bg-transparent w-12 h-16 lg:w-24 lg:h-24 md:w-24 md:h-24'></div>

                <div className='bg-orange-500  grid justify-items-center w-16 h-16 lg:w-24 lg:h-24 md:w-24 md:h-24'>
                    <h1 className='text-white font-semibold text-xs lg:text-xl md:text-base m-auto'>
                        {productData.price}
                        {"$"}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "../../util/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext.js";
import { CartContext } from "@/context/CartContext.js";
import { useContext } from "react";
import Link from "next/link";
import Loader from "../Loader/Loader.jsx";

const ProductDetails = ({ productId }) => {
    const { addItemToCart } = useContext(CartContext);
    const [productData, setProductData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();
    const [selectedPicture, setSelectedPicture] = useState(null);

    useEffect(() => {
        const fetchProductAndUserData = async () => {
            try {
                const productRef = doc(db, "products", productId);
                const productDoc = await getDoc(productRef);

                if (productDoc.exists()) {
                    const productData = {
                        ...productDoc.data(),
                        id: productDoc.id,
                    };
                    setProductData(productData);
                    setSelectedPicture(productData?.pictures[0]);

                    if (currentUser) {
                        const userRef = doc(
                            db,
                            "userinfo",
                            productData.currentUserUid
                        );
                        const userDoc = await getDoc(userRef);

                        if (userDoc.exists()) {
                            setUserData(userDoc.data());
                        } else {
                            console.log("No such user document!");
                            // Optionally set userData to a default value or handle accordingly
                        }
                    }
                } else {
                    console.log("No such product document!");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProductAndUserData();
        }
    }, [productId, currentUser]);

    const handleAddToCart = () => {
        if (productData) {
            addItemToCart(productData);
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='flex flex-col lg:mt-[10px] lg:mb-[-700px] lg:mr-[80px] lg:ml-[40px] md:mb-[80px] md:mt-[20px] md:mr-[20px] md:ml-[20px] sm:mb-[20px] sm:mt-[80px] sm:mr-[80px] sm:ml-[80px] sm:gap-6 sm:flex-col md:flex-col md:justify-center lg:flex-row lg:justify-between'>
            <div className='lg:p-12 md:p-10  grid grid-cols-3 md:flex lg:grid lg:grid-rows-3 w-full sm:w-full md:w-full lg:w-2/3 justify-between gap-4'>
                <div className='col-span-3 row-span-1 md:grid-rows-2 items-center justify-center overflow-hidden w-full lg:h-80 md:w-[60%] lg:w-full bg-[#EEF2F4] border rounded-md border-[#979797]'>
                    <Image
                        className='object-cover w-full h-full rounded-md cursor-pointer'
                        src={selectedPicture}
                        width={1600}
                        height={1000}
                        alt='product image'
                        onClick={() =>
                            setSelectedPicture(productData?.pictures[0])
                        }
                    />
                </div>
                <div className=' col-span-3 row-span-1 md:w-[40%] lg:w-full rounded-md gap-1'>
                    <div className='flex justify-between gap-4 md:grid md:grid-cols-2 md:grid-rows-1 sm:gap-2 lg:flex'>
                        <div className='col-span-2 row-span-1 md:row-span-2 w-full bg-[#EEF2F4] h-20 sm:h-28 md:h-64 lg:h-28 border rounded-md border-[#979797] overflow-hidden'>
                            <Image
                                className='object-cover w-full h-full rounded-md cursor-pointer'
                                src={productData?.pictures[1]}
                                width={1600}
                                height={1000}
                                alt='product image'
                                onClick={() =>
                                    setSelectedPicture(productData?.pictures[1])
                                }
                            />
                        </div>
                        {/* Render other small pictures similarly with onClick handler */}
                        <div className='w-full col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-28 border rounded-md border-[#979797] overflow-hidden'>
                            <Image
                                className='object-cover w-full h-full cursor-pointer'
                                src={productData?.pictures[2]}
                                width={1600}
                                height={1000}
                                alt='product image'
                                onClick={() =>
                                    setSelectedPicture(productData?.pictures[2])
                                }
                            />
                        </div>
                        <div className='col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-28 w-full border rounded-md border-[#979797] overflow-hidden lg:w-full'>
                            <Image
                                className='object-cover w-full h-full cursor-pointer'
                                src={productData?.pictures[3]}
                                width={1600}
                                height={1000}
                                alt='product image'
                                onClick={() =>
                                    setSelectedPicture(productData?.pictures[3])
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid w-full sm:w-full md:w-full lg:w-1/2  text-[#585785]'>
                {/* Product Details */}
                <div className='pt-8 col-span-4 md:col-span-2'>
                    <h1 className='font-bold text-[#7874F2] mb-4 lg:text-3xl md:text-2xl sm:text-lg'>
                        {productData?.title}
                    </h1>

                    <div className='flex mb-2 '>
                        <p className='bg-orange-500 py-1 px-2 rounded-2xl font-bold text-white mr-20'>
                            For {productData?.type}
                        </p>
                    </div>

                    <div className='flex mb-2 mt-6'>
                        <p className='mr-20'>
                            <span className='font-bold'>Condition: </span>
                            {productData?.condition}
                        </p>

                        <p className=''>
                            <span className='font-bold'>Category: </span>
                            {productData?.category}
                        </p>
                    </div>
                    <br />

                    <div className='col-span-4 row-span-1 flex items-center'>
                        <h1 className='text-xl font-bold mr-4'>Details:</h1>
                        <div className='flex-grow' />
                        <div className='flex items-center'>
                            <button
                                onClick={handleAddToCart}
                                className='text-orange-500 border border-orange-500 rounded hover:text-[#F1F6FA] hover:bg-orange-500 text-lg cursor-pointer pl-4 pr-4 pt-1 pb-1 mb-1'
                                pb-2
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className='overflow-y-scroll max-h-[100px]'>
                        {productData?.description}
                    </div>

                    {/* User Info */}
                    <div className='mt-2'>
                        {currentUser ? (
                            <div className='flex items-center mt-4  shadow-xl lg:p-4'>
                                <div className='rounded-full overflow-hidden '>
                                    <Image
                                        src={
                                            userData?.photo ||
                                            "/images/profile.jpg"
                                        }
                                        width={85}
                                        height={85}
                                        className='object-cover w-full h-full hidden sm:block md:block'
                                        alt='user picture'
                                    />
                                </div>
                                <div className='ml-4 flex-1'>
                                    <div className='flex flex-col'>
                                        <h2 className='lg:text-xl md:text-lg font-bold '>
                                            {userData?.name} {userData?.surname}
                                        </h2>
                                        <div className='flex items-center'>
                                            <p className='lg:text-lg mr-2'>
                                                {userData?.email}
                                            </p>
                                            <div className='text-center  ml-auto'>
                                                <p className='lg:text-4xl md:text-4xl sm:text-2xl font-bold'>
                                                    {productData?.price}$
                                                </p>
                                            </div>
                                        </div>
                                        <p className='lg:text-lg '>
                                            {productData?.location?.city},{" "}
                                            {productData?.location?.country}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-center justify-center mt-4 text-center'>
                                <p className='text-[#32314D] font-bold'>
                                    Please log in to get in touch with the owner
                                    of this product.{" "}
                                    <Link
                                        href='/login'
                                        className='text-[#7874F2]'
                                    >
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

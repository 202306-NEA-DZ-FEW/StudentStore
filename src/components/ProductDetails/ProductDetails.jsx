import React, { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "../../util/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext.js";
import { CartContext } from "@/context/CartContext.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import Link from "next/link";

const ProductDetails = ({ productId }) => {
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(productId);
    const [productData, setProductData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const productRef = doc(db, "products", productId);
                const productDoc = await getDoc(productRef);

                if (productDoc.exists()) {
                    setProductData(productDoc.data());
                    setLoading(false); // Set loading to false once product data is fetched
                } else {
                    console.log("No such product document!");
                }
            } catch (error) {
                console.error("Error fetching product data:", error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        const fetchUserData = async () => {
            try {
                if (productData) {
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
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (productId) {
            fetchProductData();
        }

        // Fetch user data whenever productData is updated
        if (productData) {
            fetchUserData();
        }
    }, [productId, productData]);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{
                margin: "180px 160px 0px 180px",
                // "@media (max-width: 768px)": {
                //     margin: "180px 80px 50px 100px", // Adjust these values for smaller screens
                // },
            }}
            className='flex flex-col  sm:gap-6 sm:flex-col md:flex-col md:justify-center lg:flex-row lg:justify-between'
        >
            <div className='grid grid-cols-3 md:flex lg:grid lg:grid-rows-3 w-full sm:w-full md:w-full lg:w-2/3 justify-between gap-4'>
                <div className='col-span-3 row-span-1 md:grid-rows-2 items-center justify-center overflow-hidden w-full lg:h-80 md:w-[60%] lg:w-full bg-[#EEF2F4] border rounded-md border-[#979797]'>
                    <Image
                        className='object-cover w-full h-full rounded-md '
                        src={productData?.pictures[0]}
                        width={1600}
                        height={1000}
                        alt='product image'
                    />
                </div>
                <div className=' col-span-3 row-span-1 md:w-[40%] lg:w-full rounded-md gap-1'>
                    <div className='flex justify-between gap-4 md:grid md:grid-cols-2 md:grid-rows-1 sm:gap-2 lg:flex'>
                        <div className='col-span-2 row-span-1 md:row-span-2 w-full bg-[#EEF2F4] h-20 sm:h-28 md:h-64 lg:h-28 border rounded-md border-[#979797] overflow-hidden'>
                            <Image
                                className='object-cover w-full h-full rounded-md '
                                src={productData?.pictures[1]}
                                width={1600}
                                height={1000}
                                alt='product image'
                            />
                        </div>

                        <div className='w-full col-span-1 row-span-1 bg-[#EEF2F4] sm:h-28 border rounded-md border-[#979797] overflow-hidden'>
                            <Image
                                className='object-cover w-full h-full '
                                src={productData?.pictures[2]}
                                width={1600}
                                height={1000}
                                alt='product image'
                            />
                        </div>
                        <div className='col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-28 w-full border rounded-md border-[#979797] overflow-hidden lg:w-full'>
                            <Image
                                className='object-cover w-full h-full '
                                src={productData?.pictures[3]}
                                width={1600}
                                height={1000}
                                alt='product image'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid w-full sm:w-full md:w-full lg:w-1/2  text-[#585785]'>
                {/* Product Details */}
                <div className='col-span-4 md:col-span-2'>
                    <h1 className='text-5xl font-bold text-[#7874F2] mb-4'>
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
                                onClick={addItemToCart}
                                className='text-[#7874F2] mr-4 ml-4 border border-[#7874F2] rounded hover:text-[#F1F6FA] hover:bg-[#7874F2] text-lg cursor-pointer'
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
                        {userData && currentUser ? (
                            <div className='flex items-center mt-4  shadow-xl p-4'>
                                <div className='rounded-full overflow-hidden'>
                                    <Image
                                        src={userData?.photo}
                                        width={65}
                                        height={65}
                                        className='object-cover w-full h-full'
                                        alt='user picture'
                                    />
                                </div>
                                <div className='ml-4 flex-1'>
                                    <div className='flex flex-col'>
                                        <h2 className='text-xl font-bold '>
                                            {userData?.name}{" "}
                                            {userData?.username}
                                        </h2>
                                        <div className='flex items-center'>
                                            <p className='text-lg mr-2'>
                                                {userData?.email}
                                            </p>
                                            <div className='text-center  ml-auto'>
                                                <p className='text-4xl font-bold'>
                                                    {productData?.price}$
                                                </p>
                                            </div>
                                        </div>
                                        <p className='text-lg '>
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

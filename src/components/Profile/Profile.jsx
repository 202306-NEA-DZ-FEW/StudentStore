import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import {
    doc,
    getDoc,
    updateDoc,
    collection,
    query,
    limit,
    where,
    getDocs,
} from "firebase/firestore";
import Link from "next/link";
import { db } from "@/util/firebase";
import { CartContext } from "@/context/CartContext";
import { UserListingsContext } from "@/context/UserListingsContext";
import Image from "next/image";
import {
    ShoppingCartIcon,
    CheckCircleIcon,
    AcademicCapIcon,
    UserIcon,
    TruckIcon,
    SwitchHorizontalIcon,
    ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

<svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
>
    <path d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
    <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
    />
</svg>;

const ProfileComponent = () => {
    const auth = useAuth();
    const { cartCount } = useContext(CartContext);
    const { userSaleItemCount, userBorrowItemCount, userProducts } =
        useContext(UserListingsContext);

    const [userData, setUserData] = useState(null);
    const [cartUsers, setCartUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const userDocRef = doc(db, "userinfo", auth.currentUser.uid);
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    console.log("User document not found");
                }
            }
        };

        const fetchStudentsDealtWith = async () => {
            // Query the userinfo collection for three users
            const usersQuery = query(collection(db, "userinfo"), limit(5));

            const usersSnapshot = await getDocs(usersQuery);

            const users = usersSnapshot.docs.map((doc) => ({
                userId: doc.id,
                surname: doc.data().surname,
                email: doc.data().email,
                phoneNumber: doc.data().phoneNumber,
                city: doc.data().city,
                country: doc.data().country,

                name: doc.data().name,
                photo: doc.data().photo,
            }));

            setCartUsers(users);
        };

        fetchUserData();
        fetchStudentsDealtWith();
    }, [auth.currentUser, userProducts]);
    const handleEditClick = (field) => {
        setEditMode(true);
        // Set the initial value of the input field
        setEditedData({ [field]: userData[field] || "" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSaveClick = async () => {
        // Update the user's data in Firestore
        const userDocRef = doc(db, "userinfo", auth.currentUser.uid);
        await updateDoc(userDocRef, editedData);

        // Turn off edit mode
        setEditMode(false);
    };

    return (
        <>
            <main className='p-6 sm:p-10 space-y-6'>
                <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between'>
                    <div className='mr-6'>
                        <h1 className='text-4xl font-semibold mb-2'>
                            Welcome {userData?.name} {userData?.surname}
                        </h1>
                        <h2 className='text-gray-600 ml-0.5'>
                            Student at {userData?.school}
                        </h2>
                    </div>
                    <div className='flex flex-wrap items-start justify-end -mb-3'>
                        <Link href='/editprofile'>
                            <button className='inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3'>
                                <svg
                                    aria-hidden='true'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    className='flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                                    />
                                </svg>
                                Edit profile
                            </button>
                        </Link>
                    </div>
                </div>
                <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
                    <div className='flex items-center p-8 bg-white shadow rounded-lg'>
                        <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6'>
                            <TruckIcon className='h-6 w-6' />
                        </div>
                        <div>
                            <span className='block text-2xl font-bold'>
                                {" "}
                                {cartCount}
                            </span>
                            <span className='block text-gray-500'>
                                Products ordered
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center p-8 bg-white shadow rounded-lg'>
                        <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6'>
                            <CheckCircleIcon className='h-6 w-6' />
                        </div>
                        <div>
                            <span className='block text-2xl font-bold'>
                                {userSaleItemCount}
                            </span>
                            <span className='block text-gray-500'>
                                Products sold
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center p-8 bg-white shadow rounded-lg'>
                        <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6'>
                            <SwitchHorizontalIcon className='h-6 w-6' />
                        </div>
                        <div>
                            <span className='block text-2xl font-bold'>
                                {userBorrowItemCount}
                            </span>
                            <span className='block text-gray-500'>
                                Products borrowed
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center p-8 bg-white shadow rounded-lg'>
                        <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6'>
                            <ShoppingCartIcon className='h-6 w-6' />
                        </div>
                        <div>
                            <span className='block text-2xl font-bold'>
                                {cartCount}
                            </span>
                            <span className='block text-gray-500'>
                                Products added to cart
                            </span>
                        </div>
                    </div>
                </section>
                <section className='grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6'>
                    <div className='flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg'>
                        <div className='px-6 py-5 font-semibold border-b border-gray-100'>
                            Personal information
                        </div>
                        <div className='p-4 flex-grow flex flex-col md:flex-row items-start'>
                            {/* User Information (60%) */}
                            <div className='flex flex-col lg:w-[60%] md:w-60 md:mr-4 flex-grow items-center justify-center'>
                                <p className='text-lg font-semibold text-[#585785] mb-2'>
                                    Name:
                                    <span className='text-base text-gray-500'>
                                        {" "}
                                        {userData?.name} {userData?.surname}
                                    </span>
                                </p>
                                <p className='text-lg font-semibold text-[#585785] mb-2'>
                                    Email:
                                    <span className='text-base text-gray-500'>
                                        {" "}
                                        {userData?.email}
                                    </span>
                                </p>
                                <p className='text-lg font-semibold text-[#585785] mb-2'>
                                    Phone:
                                    <span className='text-base text-gray-500'>
                                        {" "}
                                        {userData?.phoneNumber}
                                    </span>
                                </p>
                                <p className='text-lg font-semibold text-[#585785] mb-2'>
                                    School:
                                    <span className='text-base text-gray-500'>
                                        {" "}
                                        {userData?.school}
                                    </span>
                                </p>
                                <p className='text-lg font-semibold text-[#585785] mb-2'>
                                    Address:
                                    <span className='text-base text-gray-500'>
                                        {" "}
                                        {userData?.city}, {userData?.country}
                                    </span>
                                </p>
                            </div>

                            {/* User Picture (40%) */}
                            <div className='mt-4 p-0 lg:w-[40%] md:mt-0 md:ml-4 md:w-40'>
                                {userData?.photo ? (
                                    <Image
                                        src={userData?.photo}
                                        alt='User Profile'
                                        height={52}
                                        width={52}
                                        className='h-52 w-52 rounded-full object-cover border border-gray-200'
                                    />
                                ) : (
                                    <Image
                                        src='/images/profile.jpg'
                                        alt='Default Profile Picture'
                                        height={52}
                                        width={52}
                                        className='h-52 w-52 rounded object-cover float-right border border-gray-200'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <Link
                            href='/mylistings'
                            className='flex items-center mb-2'
                        >
                            <span className='mr-2'>
                                Your Transactions: Sales and Loans
                            </span>
                            <ArrowNarrowRightIcon className='h-6 w-6' />
                        </Link>
                        <Link
                            href='/myorders'
                            className='flex items-center mb-2'
                        >
                            <span className='mr-2'>
                                Your Acquisitions: Purchases and Borrowings
                            </span>
                            <ArrowNarrowRightIcon className='h-6 w-6' />
                        </Link>
                    </div>

                    <div className='flex flex-col row-span-3 bg-white shadow rounded-lg'>
                        <div className='flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100'>
                            <span>Owners of products that interested you</span>
                        </div>
                        <div
                            className='overflow-y-auto'
                            style={{ maxHeight: "24rem" }}
                        >
                            <ul className='p-6 space-y-6'>
                                {cartUsers.map((user) => (
                                    <li
                                        key={user.userId}
                                        className='flex items-center'
                                    >
                                        <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                            {/* Use an Image component or img tag to display the user's profile picture */}
                                            {user.photo ? (
                                                <Image
                                                    src={user?.photo}
                                                    alt='Profile Picture'
                                                    className='object-cover w-full h-full'
                                                    width={40}
                                                    height={40}
                                                />
                                            ) : (
                                                // You can use a default image or other fallback
                                                <img
                                                    src='https://via.placeholder.com/40'
                                                    alt='Default Profile Picture'
                                                    className='object-cover w-full h-full'
                                                />
                                            )}
                                        </div>
                                        <span className='text-gray-600'>
                                            {user?.name} {user?.surname}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col row-span-3 bg-white shadow rounded-lg'>
                        <div className='px-6 py-5 font-semibold border-b border-gray-100'>
                            Students interested in your products
                        </div>
                        <div
                            className='overflow-y-auto'
                            style={{ maxHeight: "24rem" }}
                        >
                            <ul className='p-6 space-y-6'>
                                {cartUsers.map((user) => (
                                    <li
                                        key={user.userId}
                                        className='flex items-center'
                                    >
                                        <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                            {/* Use an Image component or img tag to display the user's profile picture */}
                                            {user.photo ? (
                                                <Image
                                                    src={user?.photo}
                                                    alt='Profile Picture'
                                                    className='object-cover w-full h-full'
                                                    width={40}
                                                    height={40}
                                                />
                                            ) : (
                                                // You can use a default image or other fallback
                                                <img
                                                    src='https://via.placeholder.com/40'
                                                    alt='Default Profile Picture'
                                                    className='object-cover w-full h-full'
                                                />
                                            )}
                                        </div>
                                        <span className='text-gray-600'>
                                            {user?.name} {user?.surname}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProfileComponent;

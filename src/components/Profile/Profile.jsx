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
import { db } from "@/util/firebase";
import { CartContext } from "@/context/CartContext";
import { UserListingsContext } from "@/context/UserListingsContext";
import Image from "next/image";

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
                    </div>
                </div>
                <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
                    <div className='flex items-center p-8 bg-white shadow rounded-lg'>
                        <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6'>
                            <svg
                                aria-hidden='true'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                                />
                            </svg>
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
                            <svg
                                aria-hidden='true'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                                />
                            </svg>
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
                        <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6'>
                            <svg
                                aria-hidden='true'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                                />
                            </svg>
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
                            <svg
                                aria-hidden='true'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                                />
                            </svg>
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
                            The number of applied and left students per month
                        </div>
                        <div className='p-4 flex-grow'>
                            <div className='flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md'>
                                Chart
                            </div>
                        </div>
                    </div>

                    <div className='row-span-3 bg-white shadow rounded-lg'>
                        <div className='flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100'>
                            <span>Students you dealt with</span>
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

        // <div className='flex items-center justify-center h-screen'>
        //     <div className='container mx-auto p-4 bg-gray-100 rounded-md'>
        //         <h1 className='text-4xl font-bold mb-4 text-[#32314D] text-center'>
        //             Profile
        //         </h1>
        //         {userData ? (
        //             <div className='flex flex-col items-center mb-4'>
        //                 <div className='w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full mb-4'>
        //                     {/* Add the user's profile picture here */}
        //                     <img
        //                         src={
        //                             userData.photo ||
        //                             "https://via.placeholder.com/150"
        //                         }
        //                         alt='Profile Picture'
        //                         className='object-cover w-full h-full'
        //                     />
        //                 </div>
        //                 <div className='text-center'>
        //                     <p className='text-2xl font-bold text-[#585785] mb-2'>
        //                         {userData.name} {userData.surname}
        //                     </p>
        //                     <div className='flex items-center text-lg text-gray-600 mb-4'>
        //                         <span className='mr-2'>
        //                             <i className='fas fa-envelope'></i>
        //                         </span>
        //                         {editMode ? (
        //                             <input
        //                                 type='text'
        //                                 name='email'
        //                                 value={editedData.email || ""}
        //                                 onChange={handleInputChange}
        //                             />
        //                         ) : (
        //                             userData.email
        //                         )}
        //                         {editMode && (
        //                             <button
        //                                 className='ml-2 text-[#FF8A57] cursor-pointer'
        //                                 onClick={() => handleSaveClick()}
        //                             >
        //                                 Save
        //                             </button>
        //                         )}
        //                         {!editMode && (
        //                             <span
        //                                 className='ml-2 text-[#FF8A57] cursor-pointer'
        //                                 onClick={() => handleEditClick("email")}
        //                             >
        //                                 <i className='fas fa-edit'></i>
        //                             </span>
        //                         )}
        //                     </div>
        //                 </div>
        //             </div>
        //         ) : (
        //             <p>Loading...</p>
        //         )}
        //         {userData && (
        //             <>
        //                 <div className='flex items-center text-[#585785] text-lg mb-4'>
        //                     <span className='mr-2'>
        //                         <i className='fas fa-phone-alt'></i>
        //                     </span>
        //                     Phone Number: {userData.phoneNumber}
        //                     {editMode && (
        //                         <span
        //                             className='ml-2 text-[#FF8A57] cursor-pointer'
        //                             onClick={() =>
        //                                 handleEditClick("phoneNumber")
        //                             }
        //                         >
        //                             <i className='fas fa-edit'></i>
        //                         </span>
        //                     )}
        //                 </div>
        //                 <div className='flex items-center text-[#585785] text-lg mb-4'>
        //                     <span className='mr-2'>
        //                         <i className='fas fa-venus-mars'></i>
        //                     </span>
        //                     Gender: {userData.gender}
        //                     {editMode && (
        //                         <span
        //                             className='ml-2 text-[#FF8A57] cursor-pointer'
        //                             onClick={() => handleEditClick("gender")}
        //                         >
        //                             <i className='fas fa-edit'></i>
        //                         </span>
        //                     )}
        //                 </div>
        //                 <div className='flex items-center text-[#585785] text-lg mb-4'>
        //                     <span className='mr-2'>
        //                         <i className='fas fa-school'></i>
        //                     </span>
        //                     School: {userData.school}
        //                     {editMode && (
        //                         <span
        //                             className='ml-2 text-[#FF8A57] cursor-pointer'
        //                             onClick={() => handleEditClick("school")}
        //                         >
        //                             <i className='fas fa-edit'></i>
        //                         </span>
        //                     )}
        //                 </div>
        //                 <div className='flex items-center text-[#585785] text-lg mb-4'>
        //                     <span className='mr-2'>
        //                         <i className='fas fa-map-marker-alt'></i>
        //                     </span>
        //                     Location: {userData.city}, {userData.country}
        //                     {editMode && (
        //                         <span
        //                             className='ml-2 text-[#FF8A57] cursor-pointer'
        //                             onClick={() => handleEditClick("location")}
        //                         >
        //                             <i className='fas fa-edit'></i>
        //                         </span>
        //                     )}
        //                 </div>
        //             </>
        //         )}
        //     </div>
        // </div>
    );
};

export default ProfileComponent;

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/util/firebase";

const ProfileComponent = () => {
    const auth = useAuth();
    const [userData, setUserData] = useState(null);
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

        fetchUserData();
    }, [auth.currentUser]);

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
                            Welcome {userData.name} {userData.surname}
                        </h1>
                        <h2 className='text-gray-600 ml-0.5'>
                            Student at {userData.school}
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
                            <span className='block text-2xl font-bold'>62</span>
                            <span className='block text-gray-500'>
                                Products listed
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
                                6.8
                            </span>
                            <span className='block text-gray-500'>
                                Products ordered
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
                                83%
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
                    <div className='flex items-center p-8 bg-white shadow rounded-lg'>
                        <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6'>
                            <svg
                                aria-hidden='true'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='h-6 w-6'
                            >
                                <path fill='#fff' d='M12 14l9-5-9-5-9 5 9 5z' />
                                <path
                                    fill='#fff'
                                    d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                                />
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                                />
                            </svg>
                        </div>
                        <div>
                            <span className='block text-2xl font-bold'>25</span>
                            <span className='block text-gray-500'>
                                Lections left
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center p-8 bg-white shadow rounded-lg'>
                        <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6'>
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
                                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>
                        </div>
                        <div>
                            <span className='block text-2xl font-bold'>
                                139
                            </span>
                            <span className='block text-gray-500'>
                                Hours spent on lections
                            </span>
                        </div>
                    </div>

                    <div className='row-span-3 bg-white shadow rounded-lg'>
                        <div className='flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100'>
                            <span>Students by average mark</span>
                            <button
                                type='button'
                                className='inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600'
                                id='options-menu'
                                aria-haspopup='true'
                                aria-expanded='true'
                            >
                                Descending
                                <svg
                                    className='-mr-1 ml-1 h-5 w-5'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </button>
                            {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns */}
                        </div>
                        <div
                            className='overflow-y-auto'
                            style={{ maxHeight: "24rem" }}
                        >
                            <ul className='p-6 space-y-6'>
                                <li className='flex items-center'>
                                    <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                        <img
                                            src='https://randomuser.me/api/portraits/women/82.jpg'
                                            alt='Annette Watson profile picture'
                                        />
                                    </div>
                                    <span className='text-gray-600'>
                                        Annette Watson
                                    </span>
                                    <span className='ml-auto font-semibold'>
                                        9.3
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/81.jpg'
                                            alt='Calvin Steward profile picture'
                                        />
                                    </div>
                                    <span className='text-gray-600'>
                                        Calvin Steward
                                    </span>
                                    <span className='ml-auto font-semibold'>
                                        8.9
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/80.jpg'
                                            alt='Ralph Richards profile picture'
                                        />
                                    </div>
                                    <span className='text-gray-600'>
                                        Ralph Richards
                                    </span>
                                    <span className='ml-auto font-semibold'>
                                        8.7
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/79.jpg'
                                            alt='Bernard Murphy profile picture'
                                        />
                                    </div>
                                    <span className='text-gray-600'>
                                        Bernard Murphy
                                    </span>
                                    <span className='ml-auto font-semibold'>
                                        8.2
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                        <img
                                            src='https://randomuser.me/api/portraits/women/78.jpg'
                                            alt='Arlene Robertson profile picture'
                                        />
                                    </div>
                                    <span className='text-gray-600'>
                                        Arlene Robertson
                                    </span>
                                    <span className='ml-auto font-semibold'>
                                        8.2
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                        <img
                                            src='https://randomuser.me/api/portraits/women/77.jpg'
                                            alt='Jane Lane profile picture'
                                        />
                                    </div>
                                    <span className='text-gray-600'>
                                        Jane Lane
                                    </span>
                                    <span className='ml-auto font-semibold'>
                                        8.1
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/76.jpg'
                                            alt='Pat Mckinney profile picture'
                                        />
                                    </div>
                                    <span className='text-gray-600'>
                                        Pat Mckinney
                                    </span>
                                    <span className='ml-auto font-semibold'>
                                        7.9
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <div className='h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/75.jpg'
                                            alt='Norman Walters profile picture'
                                        />
                                    </div>
                                    <span className='text-gray-600'>
                                        Norman Walters
                                    </span>
                                    <span className='ml-auto font-semibold'>
                                        7.7
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col row-span-3 bg-white shadow rounded-lg'>
                        <div className='px-6 py-5 font-semibold border-b border-gray-100'>
                            Students by type of studying
                        </div>
                        <div className='p-4 flex-grow'>
                            <div className='flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md'>
                                Chart
                            </div>
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

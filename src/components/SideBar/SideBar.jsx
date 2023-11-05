import React, { useEffect, useState } from "react";
import Link from "next/link";
import firebase from "firebase/app";
import "firebase/firestore";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../util/firebase.js";

import { BiLogOut } from "react-icons/bi";

const SideBar = () => {
    const [open, setOpen] = useState(false);

    const [selectedLink, setSelectedLink] = useState(null);

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userId = "e43JDIG05abGPsH43xEKBNsD49e2";
            const userInfoRef = doc(
                db,
                "userinfo",
                "e43JDIG05abGPsH43xEKBNsD49e2"
            );
            const userInfoSnapshot = await getDoc(userInfoRef);

            if (userInfoSnapshot.exists()) {
                const userInfoData = userInfoSnapshot.data();
                setUserInfo(userInfoData);
            }
        };
        fetchUserInfo();
    }, []);

    return (
        <div className='bg-gray-200 w-64 min-h-screen p-4 flex flex-col'>
            {userInfo && (
                <>
                    <div className='mb-4'>
                        <img
                            src={userInfo.photo}
                            alt='User'
                            className='w-16 h-16 rounded-full mb-2'
                        />
                        <h2 className='text-xl font-bold'>{`${userInfo.name} ${userInfo.surname}`}</h2>
                        <p className='text-gray-600'>{userInfo.email}</p>
                    </div>
                    <div className='mb-4'>
                        <p>{` ${userInfo.address.city}, ${userInfo.address.country}`}</p>
                    </div>
                    <div className='flex flex-col'>
                        <a href='#' className='text-blue-500 mb-2'>
                            Edit Profile
                        </a>
                        <a href='#' className='text-blue-500 mb-2'>
                            My Listings
                        </a>
                        <a href='#' className='text-blue-500 mb-2'>
                            My Orders
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default SideBar;

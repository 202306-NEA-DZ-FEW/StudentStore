import { createUserWithEmailAndPassword } from "firebase/auth";
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Button from "@/components/Buttons/Button";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import GithubButton from "@/components/GithubButton/GithubButton";
import TwitterButton from "@/components/TwitterButton/TwitterButton";

import { auth, db } from "@/util/firebase";
export default function SignUp() {
    const { t } = useTranslation("sign");
    // using useRouter to redirect him to products page
    const route = useRouter();
    // create a state for handelling validation errors
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        userName: "",
        surname: "",
        email: "",
        school: "",
        password: "",
        confirm_password: "",
    });
    // handle input change function
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    function checkEmailExists(email) {
        const usersCollection = collection(db, "userinfo");
        const q = query(usersCollection, where("email", "==", email));

        return getDocs(q).then((querySnapshot) => {
            return !querySnapshot.empty;
        });
    }
    function handleSignUp(event) {
        event.preventDefault();
        checkEmailExists(formData.email)
            .then((emailExists) => {
                if (emailExists) {
                    // The email already exists in Firestore, show an error message using toastify
                    toast.error(t("email already exist"));
                } else {
                    // setting an empty object to fill it with text if the condition is applied and pass it to the state
                    const validationErrors = {};
                    // regex variables
                    const nameAndSurnameRegEx = /^[a-z ]+$/i;
                    const nameAndSurnameLengthRegEx = /^.{3,24}$/;
                    const emailRegEx = /^\w+@\w+(\.\w{2,4})+$/;
                    const schoolNameRegEx = /^[A-Za-z\s&,.':()/-]+$/;
                    const schoolNameLengthRegEx = /^.{3,}$/;
                    const passwordRegEx =
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
                    // name validation
                    if (!formData.userName.trim()) {
                        validationErrors.userName = t("please enter your name");
                    } else if (!nameAndSurnameRegEx.test(formData.userName)) {
                        validationErrors.userName = t(
                            "your name can only contain letters and spaces"
                        );
                    } else if (
                        !nameAndSurnameLengthRegEx.test(formData.userName)
                    ) {
                        validationErrors.userName = t(
                            "your name must be between 3 and 24 characters"
                        );
                    }

                    // surname validation
                    if (!formData.surname.trim()) {
                        validationErrors.surname = t(
                            "please enter your surname"
                        );
                    } else if (!nameAndSurnameRegEx.test(formData.surname)) {
                        validationErrors.surname = t(
                            "your surname can only contain letters and spaces"
                        );
                    } else if (
                        !nameAndSurnameLengthRegEx.test(formData.surname)
                    ) {
                        validationErrors.surname = t(
                            "your surname must be between 3 and 24 characters"
                        );
                    }
                    // email validation
                    if (!formData.email.trim()) {
                        validationErrors.email = t("please enter your email");
                    } else if (!emailRegEx.test(formData.email)) {
                        validationErrors.email = t(
                            "please enter a valid email address"
                        );
                    }
                    // school validation
                    if (!formData.school.trim()) {
                        validationErrors.school = t("please enter your school");
                    } else if (!schoolNameRegEx.test(formData.school)) {
                        validationErrors.school = t(
                            "your school name can only contain letters, spaces, and common symbols"
                        );
                    } else if (!schoolNameLengthRegEx.test(formData.school)) {
                        validationErrors.school = t(
                            "your school name must be at least 3 characters"
                        );
                    }
                    // password validation
                    if (!formData.password.trim()) {
                        validationErrors.password = t("please enter password");
                    } else if (formData.password.length < 8) {
                        validationErrors.password = t(
                            "your password must be at least 8 characters"
                        );
                    } else if (!passwordRegEx.test(formData.password)) {
                        validationErrors.password = t(
                            "password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                        );
                    }
                    // confirm password validation
                    if (!formData.confirm_password.trim()) {
                        validationErrors.confirm_password = t(
                            "please confirm your password"
                        );
                    } else if (
                        formData.confirm_password !== formData.password
                    ) {
                        validationErrors.confirm_password = t(
                            "passwords do not match. Please try again"
                        );
                    }
                    if (Object.keys(validationErrors).length === 0) {
                        // if The email is not in Firestore, now we can continue with the signup process
                        createUserWithEmailAndPassword(
                            auth,
                            formData.email,
                            formData.password
                        )
                            .then((userCredential) => {
                                // Registration successful, you can add user data to Firestore here
                                toast.loading(t("please wait"));
                                const colRef = doc(
                                    db,
                                    "userinfo",
                                    userCredential.user.uid
                                );
                                setDoc(colRef, {
                                    name: formData.userName,
                                    surname: formData.surname,
                                    email: formData.email,
                                    password: formData.password,
                                    school: formData.school,
                                    phoneNumber: "",
                                    photo: "",
                                    gender: "",
                                    country: "",
                                    city: "",
                                    zipcode: "",
                                })
                                    .then(() => {
                                        //clear the form data
                                        setTimeout(() => {
                                            setFormData({
                                                userName: "",
                                                surname: "",
                                                email: "",
                                                school: "",
                                                password: "",
                                                confirm_password: "",
                                            });
                                        }, 3000);
                                        // after the user data is added to the firestore now we will redirect the user to the home page
                                        route.push("/home");
                                    })
                                    .catch((error) => {
                                        console.error(
                                            "Error adding user data to Firestore:",
                                            error
                                        );
                                    });
                            })
                            .catch((error) => {
                                // i added this condition to prevent console log error when we try to submit the same email
                                if (
                                    error.code === "auth/email-already-in-use"
                                ) {
                                    toast.error(t("email already in use"));
                                }
                            });
                    } else {
                        setErrors(validationErrors);
                    }
                }
            })
            .catch(() => {
                toast.error(t("failed to sign up"), { autoClose: 1000 });
            });
    }
    // signup bg style
    const signupbg = {
        backgroundImage: `linear-gradient(to left, #F1F6FA 35%, rgba(217, 217, 217, 0) 100%), url(/images/signup-bg.jpg)`,
    };
    return (
        <div
            style={signupbg}
            className=' min-h-screen w-full bg-cover flex justify-between items-center text-center pb-2'
        >
            {/* container for image to add later */}
            <div className='lg:w-3/6 lg:py-16 lg:px-24'>
                <Image
                    src='/hands_box.png'
                    alt='hands box image'
                    height={500}
                    width={500}
                    layout='responsive'
                    className='hidden lg:block'
                />
            </div>
            {/* form container */}
            <div className='py-10 lg:w-3/6 lg:px-10'>
                <div className='lg:w-[60%] mx-auto'>
                    <h1 className='text-[#7874F2] text-[30px] font-bold my-6 md:text-6xl md:mb-14 lg:text-5xl xl:text-5xl'>
                        {t("sign-up")}
                    </h1>
                    <form>
                        <input
                            type='text'
                            placeholder={t("name")}
                            name='userName'
                            value={formData.userName}
                            onChange={handleChange}
                            className='text-center py-2 rounded-md placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3 focus:outline-[#21567e]'
                        />
                        {errors.userName && (
                            <span className='text-red-500 inline-block w-[80%] mx-auto md:w-[100%] lg:w-full'>
                                {errors.userName}
                            </span>
                        )}
                        <input
                            type='text'
                            placeholder={t("surname")}
                            name='surname'
                            value={formData.surname}
                            onChange={handleChange}
                            className='text-center py-2 rounded-md placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3 focus:outline-[#21567e]'
                        />
                        {errors.surname && (
                            <span className='text-red-500 inline-block w-[80%] mx-auto md:w-[100%] lg:w-full'>
                                {errors.surname}
                            </span>
                        )}
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='text-center py-2 rounded-md placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3 focus:outline-[#21567e]'
                        />
                        {errors.email && (
                            <span className='text-red-500 inline-block w-[80%] mx-auto md:w-[100%] lg:w-full'>
                                {errors.email}
                            </span>
                        )}
                        <input
                            type='text'
                            placeholder={t("school")}
                            name='school'
                            value={formData.school}
                            onChange={handleChange}
                            className='text-center py-2 rounded-md placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3 focus:outline-[#21567e]'
                        />
                        {errors.school && (
                            <span className='text-red-500 inline-block w-[80%] mx-auto md:w-[100%] lg:w-full'>
                                {errors.school}
                            </span>
                        )}
                        <input
                            type='password'
                            placeholder={t("password")}
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='text-center py-2 rounded-md placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3 focus:outline-[#21567e]'
                        />
                        {errors.password && (
                            <span className='text-red-500 inline-block w-[80%] mx-auto md:w-[100%] lg:w-full'>
                                {errors.password}
                            </span>
                        )}
                        <input
                            type='password'
                            placeholder={t("re-enter password")}
                            name='confirm_password'
                            value={formData.confirm_password}
                            onChange={handleChange}
                            className='text-center py-2 rounded-md placeholder-[#21567e] block w-[80%] mx-auto md:w-[100%] lg:w-full my-3 focus:outline-[#21567e]'
                        />
                        {errors.confirm_password && (
                            <span className='text-red-500 inline-block w-[80%] mx-auto md:w-[100%] lg:w-full'>
                                {errors.confirm_password}
                            </span>
                        )}
                        <Button
                            onClick={handleSignUp}
                            className='bg-[#585785] border-[#585785] hover:text-[#7874f2] hover:border-[#7874f2] mt-7 mb-5 block mx-auto'
                        >
                            {t("sign-up")}
                        </Button>
                    </form>
                    {/* devider */}
                    <div className='relative flex items-center w-[80%] mx-auto md:w-[100%] lg:w-full'>
                        <div className='flex-grow border-t border-[#a7b8c4]'></div>
                        <span className='flex-shrink mx-4 text-[#a7b8c4]'>
                            {t("or")}
                        </span>
                        <div className='flex-grow border-t border-[#a7b8c4]'></div>
                    </div>
                    <h3 className='text-center text-[#647581] mt-1'>
                        {t("sign-up with")}
                    </h3>
                    {/* sign up with socials */}
                    <div className='flex justify-center gap-2 mt-7 w-[80%] mx-auto md:w-[100%] lg:w-full'>
                        <GoogleButton t={t}>{t("google")}</GoogleButton>
                        <TwitterButton t={t}>{t("twitter")}</TwitterButton>
                        <GithubButton t={t}>{t("github")}</GithubButton>
                    </div>
                    <h2 className='mt-5 text-[#647581]'>
                        {" "}
                        {t("already have an account?")}
                    </h2>
                    <Link href='/signin' className='block'>
                        <Button className='bg-[#585785] border-[#585785] hover:text-[#7874f2] hover:border-[#7874f2] mt-3 py-1 px-10'>
                            {t("sign-in")}
                        </Button>
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "sign"])),
            // Will be passed to the page component as props
        },
    };
}

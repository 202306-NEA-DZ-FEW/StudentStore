import Button from "@/components/Buttons/Button";
import FacebookButton from "@/components/FacebookButton/FacebookButton";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import TwitterButton from "@/components/TwitterButton/TwitterButton";
import { auth, db } from "@/util/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/layout/Layout";
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
                    toast.error("email already exist");
                } else {
                    // if The email is not in Firestore, now we can continue with the signup process
                    createUserWithEmailAndPassword(
                        auth,
                        formData.email,
                        formData.password
                    )
                        .then((userCredential) => {
                            // Registration successful, you can add user data to Firestore here
                            toast.warning("Please wait");
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
                                phone: "",
                            })
                                .then(() => {
                                    // after the user data is added to the firestore now we will redirect the user to the product page i am using / but later we will chnage it with the products page path
                                    route.push("/");
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
                            if (error.code === "auth/email-already-in-use") {
                                toast.error("Email already in use");
                            }
                        });
                }
            })
            .catch((error) => {
                console.error("Error checking email existence:", error);
            });
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
            validationErrors.userName = "Please enter your name";
        } else if (!nameAndSurnameRegEx.test(formData.userName)) {
            validationErrors.userName =
                "Your name can only contain letters and spaces";
        } else if (!nameAndSurnameLengthRegEx.test(formData.userName)) {
            validationErrors.userName =
                "Your name must be between 3 and 24 characters";
        }

        // surname validation
        if (!formData.surname.trim()) {
            validationErrors.surname = "Please enter your surname";
        } else if (!nameAndSurnameRegEx.test(formData.surname)) {
            validationErrors.surname =
                "Your surname can only contain letters and spaces";
        } else if (!nameAndSurnameLengthRegEx.test(formData.surname)) {
            validationErrors.surname =
                "Your surname must be between 3 and 24 characters";
        }
        // email validation
        if (!formData.email.trim()) {
            validationErrors.email = "Please enter your email";
        } else if (!emailRegEx.test(formData.email)) {
            validationErrors.email = "Please enter a valid email address";
        }
        // school validation
        if (!formData.school.trim()) {
            validationErrors.school = "Please enter your school";
        } else if (!schoolNameRegEx.test(formData.school)) {
            validationErrors.school =
                "Your school name can only contain letters, spaces, and common symbols";
        } else if (!schoolNameLengthRegEx.test(formData.school)) {
            validationErrors.school =
                "Your school name must be at least 3 characters";
        }
        // password validation
        if (!formData.password.trim()) {
            validationErrors.password = "Please enter password";
        } else if (formData.password.length < 8) {
            validationErrors.password =
                "Your password must be at least 8 characters";
        } else if (!passwordRegEx.test(formData.password)) {
            validationErrors.password =
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        }
        // confirm password validation
        if (!formData.confirm_password.trim()) {
            validationErrors.confirm_password = "Please confirm your password";
        } else if (formData.confirm_password !== formData.password) {
            validationErrors.confirm_password =
                "Passwords do not match. Please try again";
        }
        setErrors(validationErrors);
        setFormData({
            userName: "",
            surname: "",
            email: "",
            school: "",
            password: "",
            confirm_password: "",
        });
    }
    return (
        <Layout>
            <div>
                {/* container for image to add later */}
                <div></div>
                {/* form container */}
                <div>
                    <h1>{t("sign-up")}</h1>
                    <form className='flex flex-col'>
                        <input
                            type='text'
                            placeholder={t("name")}
                            name='userName'
                            value={formData.userName}
                            onChange={handleChange}
                        />
                        {errors.userName && <span>{errors.userName}</span>}
                        <input
                            type='text'
                            placeholder={t("surname")}
                            name='surname'
                            value={formData.surname}
                            onChange={handleChange}
                        />
                        {errors.surname && <span>{errors.surname}</span>}
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span>{errors.email}</span>}
                        <input
                            type='text'
                            placeholder={t("school")}
                            name='school'
                            value={formData.school}
                            onChange={handleChange}
                        />
                        {errors.school && <span>{errors.school}</span>}
                        <input
                            type='password'
                            placeholder={t("password")}
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span>{errors.password}</span>}
                        <input
                            type='password'
                            placeholder={t("re-enter password")}
                            name='confirm_password'
                            value={formData.confirm_password}
                            onChange={handleChange}
                        />
                        {errors.confirm_password && (
                            <span>{errors.confirm_password}</span>
                        )}
                        <Button
                            onClick={handleSignUp}
                            className='bg-[#7874F2] border-[#7874f2] hover:text-[#7874f2] hover:border-[#7874f2]'
                        >
                            {t("sign-up")}
                        </Button>
                    </form>
                    {/* devider */}
                    <div className='relative flex py-5 items-center'>
                        <div className='flex-grow border-t border-[#9DAFBD]'></div>
                        <span className='flex-shrink mx-4 text-[#9DAFBD]'>
                            {t("or")}
                        </span>
                        <div className='flex-grow border-t border-[#9DAFBD]'></div>
                    </div>
                    <h3 className='text-center'>{t("sign-up with")}</h3>
                    {/* sign up with socials */}
                    <div className='flex justify-center gap-2 mt-7'>
                        <GoogleButton>{t("google")}</GoogleButton>
                        <FacebookButton>{t("facebook")}</FacebookButton>
                        <TwitterButton>{t("twitter")}</TwitterButton>
                    </div>
                    <h2> {t("already have an account?")}</h2>
                    <Link href='/' className='block'>
                        <Button className='bg-[#7874F2] border-[#7874f2] hover:text-[#7874f2] hover:border-[#7874f2]'>
                            {t("sign-in")}
                        </Button>
                    </Link>
                </div>
                <ToastContainer />
            </div>
        </Layout>
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

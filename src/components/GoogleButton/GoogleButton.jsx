import { auth, db } from "@/util/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BsGoogle } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export default function GoogleButton({ children, className, t }) {
    useEffect(() => {
        return () => {
            toast.dismiss();
        };
    }, []);
    const route = useRouter();
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((cred) => {
                const user = cred.user;
                const userRef = doc(db, "userinfo", user.uid);
                toast.loading(t("please wait"));
                setDoc(userRef, {
                    name: user.displayName,
                    surname: "",
                    email: user.email,
                    password: "",
                    school: "",
                    photo: user.photoURL,
                    phoneNumber: user.phoneNumber,
                    gender: "",
                    country: "",
                    city: "",
                    zipcode: "",
                }).then(() => {
                    route.push("/home");
                });
            })
            .catch(() => {
                toast.error(t("failed to log in"), { autoClose: 1000 });
            });
    }
    return (
        <div>
            <button
                className={twMerge(
                    "border-[#F26F6F] text-[#F26F6F] bg-white border p-1 flex gap-1 items-center rounded-[22px] hover:shadow-lg hover:shadow-[rgba(50,49,77,0.3)] ",
                    className
                )}
                onClick={signInWithGoogle}
            >
                <BsGoogle className='text-2xl' />
                <p className='text-md mx-1  font-semibold lg:mx-2 lg:mr-4'>
                    {children}
                </p>
            </button>
            <ToastContainer />
        </div>
    );
}

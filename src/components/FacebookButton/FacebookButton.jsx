import { auth, db } from "@/util/firebase";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { BsFacebook } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export default function FacebookButton({ children, className }) {
    const route = useRouter();
    async function signInWithFacebook() {
        try {
            const provider = new FacebookAuthProvider();
            const cred = await signInWithPopup(auth, provider);
            const user = cred.user;
            const userRef = doc(db, "userinfo", user.uid);
            toast.loading("Please wait");
            await setDoc(userRef, {
                address: {
                    country: "",
                    city: "",
                    zipcode: "",
                    street: "",
                },
                gender: "",
                name: user.displayName,
                surname: "",
                email: user.email,
                password: "",
                school: "",
                phone: user.phoneNumber,
                photo: user.photoURL,
            });
            route.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button
                className={twMerge(
                    "border-[#485DCF] text-[#485DCF] border p-1 flex gap-1 items-center rounded-[22px] hover:shadow-lg hover:shadow-[rgba(50,49,77,0.3)]",
                    className
                )}
                onClick={signInWithFacebook}
            >
                <BsFacebook className='text-2xl' />
                <p className='text-md mx-1 font-semibold lg:mx-2 lg:mr-4'>
                    {children}
                </p>
            </button>
            <ToastContainer />
        </div>
    );
}

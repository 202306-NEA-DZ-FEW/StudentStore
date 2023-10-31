import { auth, db } from "@/util/firebase";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export default function TwitterButton({ children, className }) {
    const route = useRouter();
    function signInWithTwitter() {
        const provider = new TwitterAuthProvider();
        signInWithPopup(auth, provider)
            .then((cred) => {
                console.log(cred);
                const user = cred.user;
                const userRef = doc(db, "userinfo", user.uid);
                toast.loading("Please wait");
                setDoc(userRef, {
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
                }).then(() => {
                    route.push("/");
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <button
                className={twMerge(
                    "border-[#28C7FA] text-[#28C7FA]  border p-1 flex gap-1 items-center rounded-[22px] hover:shadow-lg hover:shadow-[rgba(50,49,77,0.3)]",
                    className
                )}
                onClick={signInWithTwitter}
            >
                <BsTwitter className='text-2xl ml-1' />
                <p className='text-md mx-1 font-semibold lg:mx-2 lg:mr-4'>
                    {children}
                </p>
            </button>
            <ToastContainer />
        </div>
    );
}

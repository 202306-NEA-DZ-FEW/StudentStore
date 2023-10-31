import { auth, db } from "@/util/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { BsGoogle } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function GoogleButton({ children, className }) {
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((cred) => {
                console.log(cred.user);
                const user = cred.user;
                const userRef = doc(db, "userinfo", user.uid);
                setDoc(userRef, {
                    name: user.displayName,
                    email: user.email,
                    phone: user.phoneNumber,
                    photo: user.photoURL,
                }).then(() => {
                    console.log("User data added to Firestore");
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
                    "border-[#F26F6F] text-[#F26F6F] border p-1 flex gap-1 items-center rounded-[22px] hover:shadow-lg hover:shadow-[rgba(50,49,77,0.3)]",
                    className
                )}
                onClick={signInWithGoogle}
            >
                <BsGoogle className='text-2xl' />
                <p className='text-md mx-1  font-semibold lg:mx-2 lg:mr-4'>
                    {children}
                </p>
            </button>
        </div>
    );
}

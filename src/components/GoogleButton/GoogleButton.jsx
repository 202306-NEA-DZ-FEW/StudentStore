import { auth } from "@/util/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { BsGoogle } from "react-icons/bs";

export default function GoogleButton({ children }) {
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <button
                className='border-[#F26F6F] text-[#F26F6F] border p-1 flex gap-1 items-center rounded-[22px]'
                onClick={signInWithGoogle}
            >
                <BsGoogle className='text-2xl' />
                <p className='text-md mx-2 mr-4 font-semibold'>{children}</p>
            </button>
        </div>
    );
}

import { auth } from "@/util/firebase";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { BsFacebook } from "react-icons/bs";

export default function FacebookButton({ children }) {
    function signInWithFacebook() {
        const provider = new FacebookAuthProvider();
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
                className='border-[#485DCF] text-[#485DCF] border p-1 flex gap-1 items-center rounded-[22px]'
                onClick={signInWithFacebook}
            >
                <BsFacebook className='text-2xl' />
                <p className='text-md mx-2 mr-4 font-semibold'>Facebook</p>
            </button>
        </div>
    );
}

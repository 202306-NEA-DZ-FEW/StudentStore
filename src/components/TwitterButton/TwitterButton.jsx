import { auth } from "@/util/firebase";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { BsTwitter } from "react-icons/bs";

export default function TwitterButton({ children }) {
    function signInWithTwitter() {
        const provider = new TwitterAuthProvider();
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
                className='border-[#28C7FA] text-[#28C7FA]  border p-1 flex gap-1 items-center rounded-[22px]'
                onClick={signInWithTwitter}
            >
                <BsTwitter className='text-2xl ml-1' />
                <p className='text-md mx-1 font-semibold lg:mx-2 lg:mr-4'>
                    {children}
                </p>
            </button>
        </div>
    );
}

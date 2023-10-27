import Button from "@/components/Buttons/Button";
import FacebookButton from "@/components/FacebookButton/FacebookButton";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import TwitterButton from "@/components/TwitterButton/TwitterButton";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
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
    function handleSignUp(event) {
        event.preventDefault();
    }
    return (
        <div>
            {/* container for image to add later */}
            <div></div>
            {/* form container */}
            <div>
                <h1>Sign Up</h1>
                <form className='flex flex-col'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='userName'
                        value={formData.userName}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='Surname'
                        name='surname'
                        value={formData.surname}
                        onChange={handleChange}
                    />

                    <input
                        type='email'
                        placeholder='E-mail Addres'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='School Name'
                        name='school'
                        value={formData.school}
                        onChange={handleChange}
                    />

                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        type='password'
                        placeholder='Re-enter Password'
                        name='confirm_password'
                        value={formData.confirm_password}
                        onChange={handleChange}
                    />

                    <Button
                        onClick={handleSignUp}
                        className={
                            "bg-[#7874F2] border-[#7874f2] hover:text-[#7874f2] hover:border-[#7874f2]"
                        }
                    >
                        Sign-up
                    </Button>
                </form>
                {/* devider */}
                <div className='relative flex py-5 items-center'>
                    <div className='flex-grow border-t border-[#9DAFBD]'></div>
                    <span className='flex-shrink mx-4 text-[#9DAFBD]'>Or</span>
                    <div className='flex-grow border-t border-[#9DAFBD]'></div>
                </div>
                <h3 className='text-center'>sign-up with</h3>
                {/* sign up with socials */}
                <div className='flex justify-center gap-2 mt-7'>
                    <GoogleButton>Google</GoogleButton>
                    <FacebookButton>Facebook</FacebookButton>
                    <TwitterButton>Twitter</TwitterButton>
                </div>
                <h2>Already have an account</h2>
                <Link href='/' className='block'>
                    <Button className='bg-[#7874F2] border-[#7874f2] hover:text-[#7874f2] hover:border-[#7874f2]'>
                        sign-in
                    </Button>
                </Link>
            </div>
        </div>
    );
}

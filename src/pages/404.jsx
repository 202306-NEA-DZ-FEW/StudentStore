import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// import Layout from "@/layout/Layout";

export default function NotFoundPage() {
    const [countdown, setCountdown] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/home");
        }, 6000);
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(countdownInterval);
        };
    }, [router]);

    return (
        <main class='flex min-h-full justify-center py-10 md:py-4 lg:py-1 items-center bg-white px-6 pb-4 sm:pb-12 lg:px-8'>
            <div class='text-center'>
                <div className='h-[80%] w-[90%]'>
                    <Image
                        className='h-[60%] object-cover'
                        src='/images/404_error.svg'
                        width={500}
                        height={500}
                        alt='404 error'
                    />
                </div>
                <p class='mt-2 text-base leading-7 font-semibold text-gray-600'>
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div class='mt-2 mb-0 md:mb-4 flex items-center justify-center flex-wrap gap-x-6'>
                    <p className='mt-2 m-2 sm:mb-0 text-base leading-7 font-semibold text-gray-600'>
                        Redirecting to the homepage in {countdown} seconds...
                    </p>
                    <Link
                        href='/home'
                        class='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    );
}

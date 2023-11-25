import Image from "next/image";
import Link from "next/link";
import * as React from "react";

// import Layout from "@/layout/Layout";

export default function NotFoundPage() {
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
                <p class='mt-2 text-base leading-7 text-gray-600'>
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div class='mt-6 mb-0 md:mb-4 flex items-center justify-center gap-x-6'>
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

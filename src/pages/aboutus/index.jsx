import Image from "next/image";
import React from "react";

function AboutUs() {
    return (
        <div className='min-h-screen'>
            {/* Section 1 */}
            <div>
                <div className='flex flex-col md:flex-row-reverse'>
                    <div className='w-full md:w-1/2 md:flex md:items-center'>
                        <Image
                            src='/images/aboutus.svg'
                            alt='Our Mission Photo'
                            loading='lazy'
                            width={1200}
                            height={1200}
                            layout='responsive'
                        />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 w-full md:w-1/2 p-4'>
                        <h1 className='text-3xl text-[#32314D] font-bold'>
                            Our Mission
                        </h1>
                        <p className='text-center text-[#32314D] md:text-md lg:text-lg leading-8 md:leading-5 '>
                            Student Store is an exclusive online marketplace
                            designed for students, providing a platform to buy,
                            sell, and borrow affordable, new or used items such
                            as electronics, games, and study materials. With a
                            focus on fostering a sense of community and
                            resource-sharing, the website encourages students to
                            list real information about their products. The
                            platform, accessible on mobile and desktop Web,
                            features, essential functionalities like user
                            profiles, product listings, orders, and a donation
                            page, creating a dedicated space where students can
                            easily connect and fulfill their academic and
                            personal needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

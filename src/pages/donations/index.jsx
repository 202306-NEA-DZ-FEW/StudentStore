import React from "react";

import DonationSlider from "@/components/DonationSlider/DonationSlider";

import Layout from "@/layout/Layout";

function donations() {
    return (
        <Layout>
            <div className='p-4 flex justify-center flex-col'>
                <DonationSlider />
                <div className='text-[#7874F2] flex flex-col '>
                    <h1 className=' text-2xl  md:text-3xl mt-[-60px] sm:mt-[-90px] md:mt-[-100px] lg:mt-[-150px] font-bold mx-auto mb-3'>
                        Why Donate?
                    </h1>
                    <p className='mx-auto text-justify  px-10 text-[24px] sm:px-12 font-semibold w-[85%] md:w-[70%]  sm:text-2xl leading-8  pb-2 '>
                        Life is busy, and it can sometimes be easy to forget to
                        show your gratitude for all that you’ve been given.
                        Students have low budgets and they’re in need of
                        financial support. When you are ready to give and are
                        researching groups of people to support, this can remind
                        us of all that we have, and the act of donating to
                        charity is a way to express our feelings gratitude.
                        Inspire others to give by posting your kind action on
                        social media to inspire others to give generously.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default donations;

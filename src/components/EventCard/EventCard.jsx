import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "../Buttons/Button";

const EventCard = ({ title, description }) => {
    return (
        <div className='Events-Section '>
            <section class=' p-8'>
                <div class='max-w-lg mx-auto relative'>
                    <input
                        id='article-01'
                        type='radio'
                        name='slider'
                        className='sr-only peer/01'
                    />

                    <input
                        id='article-03'
                        type='radio'
                        name='slider'
                        className='sr-only peer/03'
                        checked
                    />

                    <input
                        id='article-05'
                        type='radio'
                        name='slider'
                        className='sr-only peer/05'
                    />

                    <div
                        class='
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/01:[&_article]:ring
            peer-focus-visible/01:[&_article]:ring-indigo-300
            peer-checked/01:relative
            peer-checked/01:z-50
            peer-checked/01:translate-x-0
            peer-checked/01:scale-100
            peer-checked/01:[&>label]:pointer-events-none
            peer-checked/03:-translate-x-40
            md:peer-checked/03:-translate-x-80

            peer-checked/03:z-30
            md:peer-checked/05:-translate-x-80
            peer-checked/05:-translate-x-40

        '
                    >
                        <label class='absolute inset-0' for='article-01'>
                            <span class='sr-only'>
                                Focus on the big picture
                            </span>
                        </label>
                        <article class='bg-white   p-6 rounded-lg shadow-2xl'>
                            <header class='mb-2'>
                                <h1 class='text-xl font-bold text-slate-900'>
                                    Journey Through Iconic Worlds: Campus Book
                                    Reading Stand
                                </h1>
                            </header>

                            <div class='text-sm md:flex leading-relaxed text-slate-500 space-y-4 mb-2'>
                                <p className='p-2'>
                                    See you through the month of december On
                                    campus 📚✨
                                </p>

                                <Image
                                    src='/Events.png'
                                    width={300}
                                    height={300}
                                    alt='Picture of the author'
                                />
                            </div>
                            <footer class='flex justify-between '>
                                <div className='flex space-x-2  text-[#585785] '>
                                    {" "}
                                    <FaCalendarAlt
                                        size={25}
                                    ></FaCalendarAlt>{" "}
                                    <p className=' text-lg font-semibold'>
                                        {" "}
                                        15 December 2023{" "}
                                    </p>
                                </div>
                                <Button className='bg-[#585785] py-1 px-2 border-none	 '>
                                    Join us
                                </Button>
                            </footer>
                        </article>
                    </div>

                    <div
                        class='
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/03:[&_article]:ring
            peer-focus-visible/03:[&_article]:ring-indigo-300                          
            peer-checked/01:translate-x-40
            peer-checked/01:z-30
            md:peer-checked/01:translate-x-60

            peer-checked/03:relative
            peer-checked/03:z-50
            peer-checked/03:translate-x-0
            peer-checked/03:scale-100
            peer-checked/03:[&>label]:pointer-events-none
            peer-checked/05:-translate-x-40

            md:peer-checked/05:-translate-x-30

            peer-checked/05:z-30                  
        '
                    >
                        <label class='absolute inset-0' for='article-03'>
                            <span class='sr-only'>
                                Focus on the big picture
                            </span>
                        </label>
                        <article class='bg-white p-6 rounded-lg shadow-2xl'>
                            <header class='mb-2'>
                                <h1 class='text-xl font-bold text-slate-900'>
                                    🌍 Project Green Challenge 2024: Join the
                                    Global Movement for Climate Action!
                                </h1>
                            </header>
                            <div class='text-sm leading-relaxed  md:flex text-slate-500 space-y-4 mb-2'>
                                <p className='p-2'>
                                    Competition Details: 🌟 October 1-30, 2024
                                    Register Now! What to Expect: 🌿 30 days of
                                    eco-challenges to empower and inform. 🌏
                                    Join students worldwide in shaping a
                                    sustainable future.
                                </p>

                                <Image
                                    src='/Event3.jpg'
                                    width={300}
                                    height={300}
                                    alt='Picture of the author'
                                />
                            </div>
                            <footer class='flex justify-between '>
                                <div className='flex space-x-2  text-[#585785] '>
                                    {" "}
                                    <FaCalendarAlt
                                        size={25}
                                    ></FaCalendarAlt>{" "}
                                    <p className=' text-lg font-semibold'>
                                        {" "}
                                        22 December 2023{" "}
                                    </p>
                                </div>
                                <Button className='bg-[#585785] py-1 px-2 border-none	 '>
                                    Join us
                                </Button>
                            </footer>
                        </article>
                    </div>

                    <div
                        class='
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/05:[&_article]:ring
            peer-focus-visible/05:[&_article]:ring-indigo-300                          
            peer-checked/01:translate-x-20 
            md:peer-checked/01:translate-x-80 
            md:peer-checked/03:translate-x-80
            peer-checked/03:translate-x-40
            peer-checked/03:z-30
            peer-checked/05:relative
            peer-checked/05:z-50
            peer-checked/05:translate-x-0
            peer-checked/05:scale-100
            peer-checked/05:[&>label]:pointer-events-none
        '
                    >
                        <label class='absolute inset-0' for='article-05'>
                            <span class='sr-only'>
                                Focus on the big picture
                            </span>
                        </label>
                        <article class='bg-white p-6 rounded-lg shadow-2xl'>
                            <header class='mb-2'>
                                <h1 class='text-xl font-bold text-slate-900'>
                                    Exciting News: 2024 National & Regional
                                    Photography Awards!
                                </h1>
                            </header>
                            <div class='text-sm  md:flex leading-relaxed text-slate-500 space-y-4 mb-2'>
                                <p className='p-2'>
                                    Calling all photographers, amateurs and pros
                                    alike! The 2024 National & Regional Awards
                                    are here to shine a spotlight on your
                                    talent.
                                </p>

                                <Image
                                    src='/Event2.jpg'
                                    width={300}
                                    height={300}
                                    alt='Picture of the author'
                                />
                            </div>
                            <footer class='flex justify-between '>
                                <div className='flex space-x-2  text-[#585785] '>
                                    {" "}
                                    <FaCalendarAlt
                                        size={25}
                                    ></FaCalendarAlt>{" "}
                                    <p className=' text-lg font-semibold'>
                                        {" "}
                                        25 December 2023{" "}
                                    </p>
                                </div>
                                <Button className='bg-[#585785] py-1 px-2 border-none	 '>
                                    Join us
                                </Button>
                            </footer>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventCard;

import React from "react";
import EventCard from "@/components/EventCard/EventCard";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const events = [
    {
        title: "Event 1",
        description: "Description for Event 1.",
        imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    {
        title: "Event 2",
        description: "Description for Event 2.",
        imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    // Add more events as needed
];

const EventPage = () => {
    return (
        <Layout>
            <div className='event-page mt-40'>
                <h1 className=' p-4 text-center shadow-lg text-3xl font-bold text-[#7874F2]'>
                    Upcoming Events :
                </h1>
                <div className='card-list flex '>
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>
            <div>
                <section class='px-12'>
                    <div class='max-w-lg mx-auto relative'>
                        <input
                            id='article-01'
                            type='radio'
                            name='slider'
                            className='sr-only peer/01'
                        />
                        <input
                            id='article-02'
                            type='radio'
                            name='slider'
                            className='sr-only peer/02'
                        />
                        <input
                            id='article-03'
                            type='radio'
                            name='slider'
                            className='sr-only peer/03'
                            checked
                        />
                        <input
                            id='article-04'
                            type='radio'
                            name='slider'
                            className='sr-only peer/04'
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
            peer-checked/02:-translate-x-20
            peer-checked/02:scale-[83.75%]
            peer-checked/02:z-40
            peer-checked/03:-translate-x-40
            peer-checked/03:z-30
            peer-checked/04:-translate-x-40                    
            peer-checked/04:opacity-0
            peer-checked/05:-translate-x-40
        '
                        >
                            <label class='absolute inset-0' for='article-01'>
                                <span class='sr-only'>
                                    Focus on the big picture
                                </span>
                            </label>
                            <article class='bg-white p-6 rounded-lg shadow-2xl'>
                                <header class='mb-2'>
                                    <h1 class='text-xl font-bold text-slate-900'>
                                        Journey Through Iconic Worlds: Campus
                                        Book Reading Stand
                                    </h1>
                                </header>

                                <div class='text-sm leading-relaxed text-slate-500 space-y-4 mb-2'>
                                    <p>
                                        See you through the month of december On
                                        campus 📚✨
                                    </p>

                                    <Image
                                        src='/Events.png'
                                        width={900}
                                        height={700}
                                        alt='Picture of the author'
                                    />

                                    <p>Winter is coming... </p>
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
                                    <a
                                        class='text-sm font-medium text-[#585785]  hover:underline'
                                        href='#0'
                                    >
                                        Join Us{" "}
                                    </a>
                                </footer>
                            </article>
                        </div>

                        <div
                            class='
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/02:[&_article]:ring
            peer-focus-visible/02:[&_article]:ring-indigo-300                        
            peer-checked/01:translate-x-20
            peer-checked/01:scale-[83.75%]
            peer-checked/01:z-40
            peer-checked/02:relative
            peer-checked/02:z-50
            peer-checked/02:translate-x-0
            peer-checked/02:scale-100
            peer-checked/02:[&>label]:pointer-events-none
            peer-checked/03:-translate-x-20
            peer-checked/03:scale-[83.75%]
            peer-checked/03:z-40
            peer-checked/04:-translate-x-40
            peer-checked/04:z-30
            peer-checked/05:-translate-x-40 
            peer-checked/05:opacity-0
        '
                        >
                            <label class='absolute inset-0' for='article-02'>
                                <span class='sr-only'>
                                    Focus on the big picture
                                </span>
                            </label>
                            <article class='bg-white p-6 rounded-lg shadow-2xl'>
                                <header class='mb-2'>
                                    <h1 class='text-xl font-bold text-slate-900'>
                                        Give BLOOD Save Lifes
                                    </h1>
                                </header>
                                <div class='text-sm leading-relaxed text-slate-500 space-y-4 mb-2'>
                                    <p>
                                        Many desktop publishing packages and web
                                        page editors now use Pinky as their
                                        default model text, and a search for
                                        more variants will uncover many web
                                        sites still in their infancy.
                                    </p>
                                    <Image
                                        src='/Events.png'
                                        width={900}
                                        height={700}
                                        alt='Picture of the author'
                                    />
                                    <p>
                                        All the generators tend to repeat
                                        predefined chunks as necessary, making
                                        this the first true generator on the
                                        Internet.
                                    </p>
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
                                    <a
                                        class='text-sm font-medium text-[#585785]  hover:underline'
                                        href='#0'
                                    >
                                        Join Us{" "}
                                    </a>
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
            peer-checked/02:translate-x-20
            peer-checked/02:scale-[83.75%]
            peer-checked/02:z-40
            peer-checked/03:relative
            peer-checked/03:z-50
            peer-checked/03:translate-x-0
            peer-checked/03:scale-100
            peer-checked/03:[&>label]:pointer-events-none
            peer-checked/04:-translate-x-20
            peer-checked/04:scale-[83.75%]
            peer-checked/04:z-40
            peer-checked/05:-translate-x-40
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
                                        🌍 Project Green Challenge 2024: Join
                                        the Global Movement for Climate Action!
                                    </h1>
                                </header>
                                <div class='text-sm leading-relaxed text-slate-500 space-y-4 mb-2'>
                                    <p>
                                        Competition Details: 🌟 October 1-30,
                                        2024 Register Now! What to Expect: 🌿 30
                                        days of eco-challenges to empower and
                                        inform. 💪 Gain knowledge, resources,
                                        and mentorship for change. 🌏 Join
                                        students worldwide in shaping a
                                        sustainable future.
                                    </p>
                                    <Image
                                        src='/Events.png'
                                        width={900}
                                        height={700}
                                        alt='Picture of the author'
                                    />
                                    <p>
                                        All the generators tend to repeat
                                        predefined chunks as necessary, making
                                        this the first true generator on the
                                        Internet.
                                    </p>
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
                                    <a
                                        class='text-sm font-medium text-[#585785]  hover:underline'
                                        href='#0'
                                    >
                                        Join Us{" "}
                                    </a>
                                </footer>
                            </article>
                        </div>

                        <div
                            class='
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/04:[&_article]:ring
            peer-focus-visible/04:[&_article]:ring-indigo-300                          

            peer-checked/01:translate-x-40 
            peer-checked/01:opacity-0
            
            peer-checked/02:translate-x-40
            peer-checked/02:z-30
            
            peer-checked/03:translate-x-20
            peer-checked/03:scale-[83.75%]
            peer-checked/03:z-40

            peer-checked/04:relative
            peer-checked/04:z-50
            peer-checked/04:translate-x-0
            peer-checked/04:scale-100
            peer-checked/04:[&>label]:pointer-events-none
            
            peer-checked/05:-translate-x-20
            peer-checked/05:scale-[83.75%]
            peer-checked/05:z-40
        '
                        >
                            <label class='absolute inset-0' for='article-04'>
                                <span class='sr-only'>
                                    Focus on the big picture
                                </span>
                            </label>
                            <article class='bg-white p-6 rounded-lg shadow-2xl'>
                                <header class='mb-2'>
                                    <h1 class='text-xl font-bold text-slate-900'>
                                        Focus on the big picture
                                    </h1>
                                </header>
                                <div class='text-sm leading-relaxed text-slate-500 space-y-4 mb-2'>
                                    <p>
                                        Many desktop publishing packages and web
                                        page editors now use Pinky as their
                                        default model text, and a search for
                                        more variants will uncover many web
                                        sites still in their infancy.
                                    </p>
                                    <Image
                                        src='/Events.png'
                                        width={900}
                                        height={700}
                                        alt='Picture of the author'
                                    />
                                    <p>
                                        All the generators tend to repeat
                                        predefined chunks as necessary, making
                                        this the first true generator on the
                                        Internet.
                                    </p>
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
                                    <a
                                        class='text-sm font-medium text-[#585785]  hover:underline'
                                        href='#0'
                                    >
                                        Join Us{" "}
                                    </a>
                                </footer>
                            </article>
                        </div>

                        <div
                            class='
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/05:[&_article]:ring
            peer-focus-visible/05:[&_article]:ring-indigo-300                          
            peer-checked/01:translate-x-40 
            peer-checked/02:translate-x-40 
            peer-checked/02:opacity-0
            peer-checked/03:translate-x-40
            peer-checked/03:z-30
            peer-checked/04:translate-x-20
            peer-checked/04:scale-[83.75%]
            peer-checked/04:z-40
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
                                        Focus on the big picture
                                    </h1>
                                </header>
                                <div class='text-sm leading-relaxed text-slate-500 space-y-4 mb-2'>
                                    <p>
                                        Many desktop publishing packages and web
                                        page editors now use Pinky as their
                                        default model text, and a search for
                                        more variants will uncover many web
                                        sites still in their infancy.
                                    </p>
                                    <Image
                                        src='/Events.png'
                                        width={900}
                                        height={700}
                                        alt='Picture of the author'
                                    />
                                    <p>
                                        All the generators tend to repeat
                                        predefined chunks as necessary, making
                                        this the first true generator on the
                                        Internet.
                                    </p>
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
                                    <a
                                        class='text-sm font-medium text-[#585785]  hover:underline'
                                        href='#0'
                                    >
                                        Join Us{" "}
                                    </a>
                                </footer>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default EventPage;

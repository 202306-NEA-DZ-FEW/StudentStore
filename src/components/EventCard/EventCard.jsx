import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "../Buttons/Button";
import Link from "next/link";
const EventCard = () => {
    const data = [
        {
            id: 1,
            image: "/Events.png",
            title: "Book Buddies",
            description:
                "The buddies will read a book together and then spend time talking about the pictures, story and characters to help the story to come alive.📚✨",
            date: "Tuesday, 21 November",
            link: "https://www.eventbrite.com/e/book-buddies-tickets-704664549637?aff=ebdssbdestsearch&keep_tld=1",
        },
        {
            id: 2,
            image: "/Event3.jpg",
            title: " 🌍 How to be human in the time of the climate crisis",
            description:
                "Join us for a day's workshop to explore The Work that Reconnects. 🌏 Join students worldwide in shaping a sustainable future.",
            date: "Saturday, December 16 ",
            link: "https://www.eventbrite.com/e/how-to-be-human-in-the-time-of-the-climate-crisis-work-that-reconnects-tickets-747705686837?aff=ebdssbdestsearch",
        },
        {
            id: 3,
            image: "/Event2.jpg",
            title: "Discover Photography!",
            description:
                "Have you ever felt that you could be getting more from your digital camera? Would you like to unlock its full potential? If so, this half-day course is for you.",
            date: "Saturday, 16 December",
            link: "https://www.eventbrite.com/e/discover-photography-registration-36242436102?aff=ebdssbdestsearch&keep_tld=1",
        },
    ];
    const [event, setEvent] = useState(data);
    return (
        <section className='p-4'>
            <div className='mx-auto  lg:flex-row flex-col text-center  flex items-center overflow-hidden'>
                {event.map((event, eventIndex) => {
                    const { id, image, title, description, date, link } = event;
                    return (
                        <div key={id} className='p-4 '>
                            <article
                                className={` w-full  rounded-lg bg-white shadow-lg  `}
                            >
                                <header class='pt-1'>
                                    <h4 className=' font-bold lg:text-lg text-[#585785] '>
                                        {title}
                                    </h4>
                                </header>
                                <div class=' space-y-4 p-4 mb-2'>
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={275}
                                        height={250}
                                        className='object-cover  mx-auto block  rounded-md '
                                    />
                                    <p className='max-w-[15rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem] xl:max-w-[40rem] mx-auto text-[#585785] leading-loose'>
                                        {description}
                                    </p>
                                </div>
                                <footer class='flex lg:justify-around  lg:flex-row flex-col p-2 '>
                                    <div className='flex space-x-2 justify-center text-center text-[#585785] '>
                                        {" "}
                                        <FaCalendarAlt
                                            size={25}
                                        ></FaCalendarAlt>{" "}
                                        <p className=' text-center text-lg font-semibold'>
                                            {date}
                                        </p>
                                    </div>
                                    <Button className='bg-[#585785] py-1 lg:px-2 border-none px-1  w-24 m-auto  '>
                                        {" "}
                                        <Link href={`${link}`}>
                                            {" "}
                                            Join us{" "}
                                        </Link>{" "}
                                    </Button>
                                </footer>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default EventCard;

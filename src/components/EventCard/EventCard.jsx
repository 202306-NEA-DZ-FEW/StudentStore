import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import Button from "../Buttons/Button";

const EventCard = ({ t }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const data = [
        {
            id: 1,
            image: "/bookbuddies.jpg",
            title: t("Book Buddies"),
            description: t(
                "The buddies will read a book together and then spend time talking about the pictures, story and characters to help the story to come alive.📚✨"
            ),
            date: t("Tuesday, 21 November"),
            link: "https://www.eventbrite.com/e/book-buddies-tickets-704664549637?aff=ebdssbdestsearch&keep_tld=1",
        },
        {
            id: 2,
            image: "/Event.jpg",
            title: t("The climate crisis"),
            description: t(
                "Join us for a day's workshop to explore The Work that Reconnects. 🌏 Join students worldwide in shaping a sustainable future."
            ),
            date: t("Saturday, 16 December "),
            link: "https://www.eventbrite.com/e/how-to-be-human-in-the-time-of-the-climate-crisis-work-that-reconnects-tickets-747705686837?aff=ebdssbdestsearch",
        },
        {
            id: 3,
            image: "/photography.jpg",
            title: t("Discover Photography!"),
            description: t(
                "Have you ever felt that you could be getting more from your digital camera? Would you like to unlock its full potential? "
            ),
            date: t("Saturday, 16 December "),
            link: "https://www.eventbrite.com/e/discover-photography-registration-36242436102?aff=ebdssbdestsearch&keep_tld=1",
        },
    ];
    const [event, setEvent] = useState(data);
    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0, y: 0 });
        }
    }, [controls, inView]);
    return (
        <section className='p-4' ref={ref}>
            <div className='flex flex-col justify-center items-center shadow-lg border-t-2 bg-gray-200 pt-10 pb-5'>
                <h1 className='mb-10 text-3xl font-bold text-[#585785]'>
                    {t("Upcoming Events")}
                </h1>
                <div className='mx-auto  lg:flex-row flex-col text-center  flex items-center overflow-hidden'>
                    {event.map((event, i) => {
                        const { id, image, title, description, date, link } =
                            event;
                        return (
                            <motion.div
                                key={id}
                                className='p-4 w-120 h-120  flex-1'
                                initial={{
                                    opacity: 0,
                                    x: i % 2 === 0 ? -50 : 50,
                                    y: -50,
                                }}
                                animate={controls}
                                transition={{ duration: 0.8, delay: i * 0.7 }}
                            >
                                <article
                                    className={` w-full   rounded-lg bg-white shadow-lg  `}
                                >
                                    <header className='pt-2 flex-shrink'>
                                        <h4 className=' font-bold md:text-lg text-[#585785] '>
                                            {title}
                                        </h4>
                                    </header>
                                    <div className=' space-y-4 md:w-[60vw]   lg:w-[30vw] p-4 mb-0'>
                                        <Image
                                            src={image}
                                            alt={title}
                                            width={275}
                                            height={250}
                                            className='object-cover  mx-auto block  rounded-md '
                                        />
                                        <p className='  text-[#585785] '>
                                            {description}
                                        </p>
                                    </div>
                                    <footer className='flex lg:justify-around items-center lg:flex-row flex-col p-2 '>
                                        <div className='flex items-center space-x-2 justify-center text-center text-[#585785] mb-2'>
                                            <FaCalendarAlt
                                                size={20}
                                                className=' flex items-center'
                                            ></FaCalendarAlt>
                                            <p className=' text-center text-medium font-small'>
                                                {date}
                                            </p>
                                        </div>
                                        <Button className='bg-[#585785] border-[#585785] text-white hover:border-[#585785] font-semibold hover:text-[#585785] py-1 lg:px-2  px-1 text-sm  w-24 m-auto  '>
                                            <Link
                                                href={`${link}`}
                                                target='_blank'
                                            >
                                                {t("interested")}
                                            </Link>
                                        </Button>
                                    </footer>
                                </article>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EventCard;

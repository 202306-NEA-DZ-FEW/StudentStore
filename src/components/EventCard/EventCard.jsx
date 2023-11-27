import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import Button from "../Buttons/Button";
import { useRouter } from "next/router";

const EventCard = ({ t }) => {
    const controls = useAnimation();
    const route = useRouter();
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
            title: t("Discover Photography"),
            description: t(
                "Have you ever felt that you could be getting more from your digital camera? Would you like to unlock its full potential? "
            ),
            date: t("Saturday, 16 December "),
            link: "https://www.eventbrite.com/e/discover-photography-registration-36242436102?aff=ebdssbdestsearch&keep_tld=1",
        },
    ];
    const animationStarted = useRef(false);
    const [event, setEvent] = useState(data);
    useEffect(() => {
        if (inView && !animationStarted.current) {
            controls.start({ opacity: 1, x: 0, y: 0 });
            animationStarted.current = true;
        }
    }, [controls, inView]);
    return (
        <section className='p-4' ref={ref}>
            <div className='flex flex-col justify-center items-center shadow-lg border-t-2 bg-gray-200 pt-10 pb-10'>
                <h1 className='mb-10 text-3xl font-bold text-[#585785]'>
                    {t("Upcoming Events")}
                </h1>
                <div className='mx-auto  lg:flex-row flex-col text-center flex items-center overflow-hidden gap-4'>
                    {event.map((event, i) => {
                        const { id, image, title, description, date, link } =
                            event;
                        return (
                            <motion.div
                                className='max-w-2xl mx-auto'
                                key={id}
                                initial={{
                                    opacity: 0,
                                    x: i % 2 === 0 ? -50 : 50,
                                    y: -50,
                                }}
                                animate={controls}
                                transition={{ duration: 0.8, delay: i * 0.7 }}
                            >
                                <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
                                    <Image
                                        className='rounded-t-lg'
                                        src={image}
                                        alt='event image'
                                        width={200}
                                        height={200}
                                        layout='responsive'
                                    />
                                    <div className='p-5'>
                                        <h5 className='text-[#585785] capitalize font-bold text-2xl tracking-tight mb-2'>
                                            {title}
                                        </h5>
                                        <p
                                            className={`font-normal text-[#585785] dark:text-gray-400 lg:h-[96px] xl:[85px]${
                                                route.locale === "fr"
                                                    ? "mb-3 lg:mb-7 xl:mb-3 "
                                                    : "mb-3"
                                            }`}
                                        >
                                            {description}
                                        </p>
                                        <div className='flex items-center justify-center gap-2 flex-col'>
                                            <div className='flex justify-center gap-3'>
                                                <FaCalendarAlt
                                                    size={20}
                                                    className='text-[#585785]'
                                                ></FaCalendarAlt>
                                                <p className='font-semibold text-[#585785]'>
                                                    {date}
                                                </p>
                                            </div>
                                            <Link href={link} target='_blank'>
                                                <Button className='bg-[#585785] border-[#585785] capitalize text-white hover:border-[#585785] hover:text-[#585785] hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center transition-all duration-300'>
                                                    {t("interested")}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EventCard;

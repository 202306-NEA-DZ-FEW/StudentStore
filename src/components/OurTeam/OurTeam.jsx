import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function OurTeam({ t }) {
    const data = [
        {
            id: 1,
            image: "/images/hocine.jpg",
            name: "Hocine Benouddane",
            title: "Front-end Developer",
            bio: "An enthusiastic front-end developer with a deep love for coding and an insatiable curiosity for exploring and mastering new technologies.",
            github: "https://github.com/hocine1212",
            linkedin: "https://www.linkedin.com/in/hocine12/",
        },
        {
            id: 2,
            image: "/images/tewfik.jpg",
            title: "Front-end Developer",
            name: "Benarba Tewfik",
            bio: "Passionate frontend developer from Algeria, always eager to embrace new challenges and learn the latest in web development.",
            github: "https://github.com/Ben-Tewfik",
            linkedin: "https://www.linkedin.com/in/mohammed-tewfik-benarba/",
        },
        {
            id: 3,
            image: "/images/",
            title: "Fullstack Developer",
            name: "Katia Ghezali",
            bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
            github: "https://github.com/KatiaGhezali",
            linkedin: "https://www.linkedin.com/in/katiaghezali/",
        },

        {
            id: 4,
            image: "/images/mounia.png",
            title: "Front-end Developer",
            name: "Mounia Belkheir",
            bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
            github: "https://github.com/MouniaBelkheir",
            linkedin: "https://www.linkedin.com/in/mounia-belkheir-5709011b9/",
        },
        {
            id: 5,
            image: "/images/",
            title: "Front-end Developer",
            name: "Khaoula AOURRA",
            bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
            github: "https://github.com/khaoulasara",
            linkedin: "https://www.linkedin.com/in/khaoula-aourra-2214a31b9/",
        },
        {
            id: 6,
            image: "/images/sami.png",
            title: "Computer Scientist",
            name: "Sami BABOUCHE",
            bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
            github: "https://github.com/samiba6",
            linkedin: "https://www.linkedin.com/in/sami-babouche-4400551b0/",
        },
    ];
    return (
        <section className='py-7 bg-[#32314D]'>
            <div className='text-center  text-black'>
                <h1 className='text-3xl font-bold mb-8 text-white'>
                    {t("Meet Our Team")}
                </h1>
                <p className='text-md px-4 sm:px-0 sm:text-xl leading-relaxed mb-8 text-white '>
                    {t("Team")}
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 md:w-full lg:grid-cols-3 lg:w-[90%] xl:w-[70%] mx-auto place-items-center gap-4 xl:gap-8 '>
                {data?.map((data) => {
                    const { id, image, name, title, github, linkedin } = data;
                    return (
                        <div
                            key={id}
                            className='shadow-lg hover:shadow-[#90EEE1] w-72 md:w-56 lg:w-72 flex p-5 gap-2 rounded-md text-[#575885] text-center transition duration-300 bg-white hover:bg-gradient-to-br from-[#7874F2] to-[#585785] card hover:text-white'
                        >
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={image}
                                    width={100}
                                    height={100}
                                    className='w-32 h-32 border-[#575885] image border-2 rounded-full'
                                    alt='profile picture'
                                />
                            </div>
                            <h1 className='font-bold'>{t(`${name}`)}</h1>
                            <h2 className='font-semibold'>{t(`${title}`)}</h2>
                            <div className='flex justify-center items-center gap-3 p-3'>
                                <Link
                                    href={github}
                                    target='_blank'
                                    className='text-2xl text-black icon'
                                >
                                    <FaGithub />
                                </Link>
                                <Link
                                    href={linkedin}
                                    target='_blank'
                                    className='text-2xl text-[#0a66c2] icon'
                                >
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

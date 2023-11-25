import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Head from "next/head";
const OurTeam = ({ data }) => {
    return (
        <section className='p-2 bg-[#32314D] '>
            <div className='text-center  text-black'>
                {" "}
                <h1 className='text-4xl font-bold text-[#585785]  '>
                    {" "}
                    MEET OUR TEAM
                </h1>
                <p className='text-xl leading-relaxed  '>
                    {" "}
                    Were a dynamic group of individuals who are passionate about
                    what we do and dedicated to delivering the best results for
                    our clients.
                </p>{" "}
            </div>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center p-12'>
                {data?.map((teamMember, key) => {
                    const { id, image, name, title, github, linkedin } =
                        teamMember;
                    return (
                        <div
                            key={id}
                            className='m-6 md:2 flex items-center justify-center '
                        >
                            <div className='group  w-56 h-56 bg-[#F1F6FA]     drop-shadow-lg p-8 rounded-full shadow-md transition-all duration-500 hover:rounded-2xl hover:h-50'>
                                <div className='img group-hover:h-40 w-full h-full'>
                                    <img
                                        src={image}
                                        alt='Profile'
                                        className='w-full h-full rounded-full transition duration-500 transform group-hover:-translate-y-20 group-hover:rounded-xl group-hover:shadow-xl '
                                    />
                                </div>
                                <div className='caption text-center transform -translate-y-20  ease-in-out	 opacity-0 delay-200  transition-all duration-100 group-hover:opacity-100 '>
                                    <div className='card-content  flex-col  '>
                                        <div>
                                            {" "}
                                            <h4 className=' break-normal font-bold text-lg  text-[#585785] '>
                                                {name}
                                            </h4>
                                            <h2 className='text-md text-black'>
                                                {" "}
                                                {title}{" "}
                                            </h2>
                                        </div>

                                        <div className='social-media flex justify-center space-x-4 '>
                                            <Link
                                                className='cursor-pointer hover:text-[#000000]'
                                                href={`${github}`}
                                                target='_blank'
                                            >
                                                <FaGithub size={25} />
                                            </Link>
                                            <Link
                                                className=' cursor-pointer   hover:text-[#0e76a8]'
                                                href={`${linkedin}`}
                                                target='_blank'
                                            >
                                                <FaLinkedin size={25} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default OurTeam;

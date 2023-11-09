import React, { useState, useEffect } from "react";
import {
    IoIosArrowDroprightCircle,
    IoIosArrowDropleftCircle,
} from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";
import data from "@/util/data";
import Image from "next/image";
function TestimonialsSection() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <section className='py-6 mx-auto'>
            <div className='mx-auto mt-0 w-[80vw] lg:w-[65vw] h-[350px] lg:[300px]max-w-[800px] text-center relative flex items-center overflow-hidden'>
                {people.map((person, personIndex) => {
                    const { id, image, name, quote } = person;

                    let position = "translate-x-full";
                    if (personIndex === index) {
                        position = "translate-x-0";
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = "-translate-x-full";
                    }

                    return (
                        <article
                            className={`${position} absolute h-auto w-full py-3 rounded-lg bg-white`}
                            key={id}
                        >
                            <Image
                                src={image}
                                alt={name}
                                width={100}
                                height={100}
                                className='object-cover h-16 w-16 mx-auto block border-2 border-[#7874F2] rounded-full my-4'
                            />

                            <h4 className='uppercase mb-[0.25rem] text-[1rem] font-bold text-[#7874F2]'>
                                {name}
                            </h4>
                            <p className='max-w-[15rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem] xl:max-w-[40rem] mx-auto  leading-loose'>
                                {quote}
                            </p>
                            <div className='flex justify-center text-[#7874F2]'>
                                <FaQuoteRight className='text-3xl mt-2' />
                            </div>
                        </article>
                    );
                })}
                <button
                    className='absolute top-[50%] -translate-y-1/2 w-[1.25rem] h-[1.25rem] grid place-items-center text-[1rem] cursor-pointer text-gray-400 hover:text-[#7874F2] left-0'
                    onClick={() => setIndex(index - 1)}
                >
                    <IoIosArrowDropleftCircle className='text-3xl' />
                </button>
                <button
                    className='absolute top-[50%] -translate-y-1/2 w-[1.25rem] h-[1.25rem] grid place-items-center text-[1rem] cursor-pointer text-gray-400 hover:text-[#7874F2] right-3'
                    onClick={() => setIndex(index + 1)}
                >
                    <IoIosArrowDroprightCircle className='text-3xl' />
                </button>
            </div>
        </section>
    );
}

export default TestimonialsSection;

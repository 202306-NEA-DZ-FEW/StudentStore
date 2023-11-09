import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
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
        <section className='w-[90vw] my-[5rem] mx-auto'>
            <div className='mx-auto mt-0 w-[80vw] h-[450px] max-w-[800px] text-center relative flex overflow-hidden'>
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
                            className={`${position} absolute top-0 left-0 w-full py-3 bg-white`}
                            key={id}
                        >
                            <Image
                                src={image}
                                alt={name}
                                width={100}
                                height={100}
                                className='object-cover h-16 w-16 mx-auto block border-4 border-purple-500 rounded-full my-4'
                            />

                            <h4 className='uppercase mb-[0.25rem] text-[1rem]'>
                                {name}
                            </h4>
                            <p className='max-w-[20rem] lg:max-w-[30rem] lg:mt-8 mx-auto  leading-loose'>
                                {quote}
                            </p>
                            <div className='flex justify-center text-purple-500'>
                                <FaQuoteRight className='text-2xl' />
                            </div>
                        </article>
                    );
                })}
                <button
                    className='absolute top-[200px] -translate-y-1/2 w-[1.25rem] h-[1.25rem] grid place-items-center text-[1rem] cursor-pointer left-0'
                    onClick={() => setIndex(index - 1)}
                >
                    <FiChevronLeft className='text-3xl' />
                </button>
                <button
                    className='absolute top-[200px] -translate-y-1/2 w-[1.25rem] h-[1.25rem] grid place-items-center text-[1rem] cursor-pointer right-2'
                    onClick={() => setIndex(index + 1)}
                >
                    <FiChevronRight className='text-3xl' />
                </button>
            </div>
        </section>
    );
}

export default TestimonialsSection;

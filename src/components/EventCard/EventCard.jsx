import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const EventCard = ({ title, description }) => {
    return (
        <div className='p-4 rounded-lg'>
            <div className='relative w-full rounded-lg  shadow-xl'>
                <div className=''>
                    <Image
                        src='/2.png'
                        width={700}
                        height={700}
                        alt='Picture of the author'
                    />
                </div>
                <div className='rounded-lg absolute left-0 top-0 h-16 w-16 bg-[#585785] text-center  mt-4 ml-4 text-white font-bold shadow-lg flex flex-col items-center space-y-1 hover:opacity-0'>
                    {" "}
                    <p className=''>11 April </p>{" "}
                    <FaCalendarAlt size={30}></FaCalendarAlt>{" "}
                </div>

                <div className='opacity-0 rounded-lg bg-gradient-to-r from-indigo-500  to-red-600  absolute inset-0	hover:opacity-50   '>
                    <h2 className='card-title'>
                        {title}
                        <div className='badge badge-secondary'>NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className='card-actions justify-end'>
                        <div className='badge badge-outline'>Fashion</div>
                        <div className='badge badge-outline'>Products</div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="eventcard p-2 ">
        //   <img src={imageUrl} alt={title} />
        //   <div>
        //     <h3>{title}</h3>
        //     <p>{description}</p>
        //   </div>
        // </div>
    );
};

export default EventCard;

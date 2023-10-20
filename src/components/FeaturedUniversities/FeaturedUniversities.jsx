import React from "react";
import Image from "next/image";

const universities = [
    { id: 1, name: "arkansas", logo: "/arkansas.svg" },
    { id: 2, name: "CIT", logo: "/CaliforniaIT.svg" },
    { id: 3, name: "Duke", logo: "/duke.svg" },
    { id: 4, name: "glasgow", logo: "/glasgow.svg" },
    { id: 5, name: "MIT", logo: "/mit.svg" },
    { id: 6, name: "Nottingham", logo: "/Nottingham.svg" },
    { id: 7, name: "Oxford", logo: "/oxford.svg" },
    { id: 8, name: "Princeton", logo: "/princeton.svg" },
    { id: 9, name: "Purdue", logo: "/purdue.svg" },
    { id: 10, name: "Stanford", logo: "/stanford.svg" },
    { id: 11, name: "Columbia", logo: "/columbia.svg" },
    { id: 12, name: "Chicago", logo: "/chicago.svg" },
    { id: 13, name: "Brown", logo: "/brown.svg" },
    { id: 14, name: "glasgow", logo: "/glasgow1.svg" },
    { id: 15, name: "liverpool", logo: "/liverpool.svg" },
    { id: 16, name: "Pennsylvania", logo: "/Pennsylvania.svg" },
    { id: 17, name: "UIA", logo: "/UIA.svg" },
];

function FeaturedUniversities() {
    return (
        <div className='bg-[#F1F6FA] py-12'>
            <div className='container mx-auto university-logos-container flex flex-wrap justify-center items-center'>
                {universities.map((university) => (
                    <div
                        key={university.id}
                        className=' bg-transparentp-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 mx-2 my-2 animate-moveLogo'
                    >
                        <img
                            src={university.logo}
                            alt={`${university.name} Logo`}
                            width={90}
                            height={90}
                            className='object-contain rounded-full'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedUniversities;

import OurTeam from "@/components/OurTeam/OurTeam";
import React from "react";

const data = [
    {
        id: 1,
        image: "/Hocine.jpg",
        name: "Hocine Benouddane",
        title: "Front-end Developer",
        bio: "An enthusiastic front-end developer with a deep love for coding and an insatiable curiosity for exploring and mastering new technologies.",
        github: "https://github.com/hocine1212",
        linkedin: "www.linkedin.com/in/hocine12",
    },
    {
        id: 2,
        image: "/Tewfik.png",
        title: "Front-end Developer",
        name: "Benarba Tewfik",
        bio: "Passionate frontend developer from Algeria, always eager to embrace new challenges and learn the latest in web development.",
        github: "https://github.com/Ben-Tewfik",
        linkedin: "https://www.linkedin.com/in/mohammed-tewfik-benarba/",
    },
    {
        id: 3,
        image: "/Khaoula.png",
        title: "Financial auditor/ front end developer",
        name: "Khaoula AOURRA",
        bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
        github: "https://github.com/khaoulasara/AOURRAkhaoula",
        linkedin:
            "https://www.eventbrite.com/e/discover-photography-registration-36242436102?aff=ebdssbdestsearch&keep_tld=1",
    },
    {
        id: 4,
        image: "/mounia.jfif",
        title: "Fullstack developer",
        name: "Mounia Belkheir",
        bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
        github: "https://github.com/MouniaBelkheir",
        linkedin: "https://www.linkedin.com/in/mounia-belkheir-5709011b9/",
    },
    {
        id: 5,
        image: "/Samy.jpg",
        title: "Computer Scientist",
        name: "Sami BABOUCHE",
        bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
        github: "https://github.com/samiba6",
        linkedin: "https://www.linkedin.com/in/sami-babouche-4400551b0/",
    },
    {
        id: 6,
        image: "/Katia.png",
        title: "Fullstack Developer",
        name: "Katia Ghezali",
        bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
        github: "https://github.com/KatiaGhezali",
        linkedin: "https://www.linkedin.com/in/katiaghezali/",
    },
];
function AboutUs() {
    return (
        <div>
            AboutUs.
            <OurTeam data={data}></OurTeam>
        </div>
    );
}

export default AboutUs;

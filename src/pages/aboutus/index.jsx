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
        image: "/Event.jpg",
        title: "Front-end Developer",
        name: "Benarba Tewfik",
        bio: "Passionate frontend developer from Algeria, always eager to embrace new challenges and learn the latest in web development.",
        github: "https://github.com/Ben-Tewfik",
        linkedin: "https://www.linkedin.com/in/mohammed-tewfik-benarba/",
    },
    {
        id: 3,
        image: "/photography.jpg",
        title: "Khaoula AOURRA",
        name: "Book Buddies",
        bio: "Hey, I'm Khaoula Aourra—a finance and banking grad turned tech enthusiast! I embraced the world of front-end development through Re-coded's boot camp. Excited to fuse financial savvy with tech skills and make a splash in this dynamic industry! 🚀",
        github: "https://github.com/khaoulasara/AOURRAkhaoula",
        linkedin:
            "https://www.eventbrite.com/e/discover-photography-registration-36242436102?aff=ebdssbdestsearch&keep_tld=1",
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

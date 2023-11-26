import Faq from "@/components/Faq/__test__/Faq";
import OurMission from "@/components/OurMission/OurMission";
import OurTeam from "@/components/OurTeam/OurTeam";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useEffect } from "react";
import {
    SiFirebase,
    SiNextdotjs,
    SiDaisyui,
    SiTailwindcss,
    SiJest,
    SiI18Next,
    SiCommitlint,
} from "react-icons/si";

function AboutUs() {
    const { t } = useTranslation("aboutus");
    const controls = useAnimation();
    const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const sectionOffset = document.getElementById(
            "technologies-section"
        )?.offsetTop;

        if (scrollY > sectionOffset - window.innerHeight / 2) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className='min-h-screen'>
            {/* Section 1 */}
            <OurMission t={t} />
            <OurTeam t={t} />
            {/* how technology section */}
            <motion.div
                id='technologies-section'
                className='flex flex-col justify-center h-72 items-center p-5 gap-8'
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
            >
                <h1 className='text-3xl font-bold'>{t("Technologies Used")}</h1>
                <motion.div className='flex flex-wrap justify-center items-center gap-8'>
                    <SiNextdotjs className='text-7xl text-black' />
                    <SiFirebase className='text-7xl text-[#ffcc2f]' />
                    <SiTailwindcss className='text-7xl text-[#36b7f0]' />
                    <SiDaisyui className='text-7xl' />
                    <SiJest className='text-7xl text-[#c03b13]' />
                    <SiI18Next className='text-7xl text-[#0a9b7c]' />
                    <SiCommitlint className='text-7xl' />
                </motion.div>
            </motion.div>
            {/* faq section */}
            <Faq t={t} />
        </div>
    );
}
export default AboutUs;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "aboutus"])),
            // Will be passed to the page component as props
        },
    };
}

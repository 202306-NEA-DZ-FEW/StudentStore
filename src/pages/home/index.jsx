// import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import EventCard from "@/components/EventCard/EventCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";

export default function HomePage() {
    const { t } = useTranslation("home");

    return (
        <div className=''>
            <HeroSection />
            <EventCard t={t} />
            <TestimonialsSection t={t} />
            <LatestProducts />
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "home"])),
            // Will be passed to the page component as props
        },
    };
}

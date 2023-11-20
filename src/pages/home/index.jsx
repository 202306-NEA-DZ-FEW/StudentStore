// import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import EventCard from "@/components/EventCard/EventCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import LatestProducts from "@/components/LatestProducts/LatestProducts";

export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <div className=''>
            <HeroSection />
            <LatestProducts />
            <EventCard />
            <TestimonialsSection />
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

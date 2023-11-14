import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import EditForm from "@/components/EditForm/EditForm";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";

import Layout from "@/layout/Layout";

export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <Layout>
            <p>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>
            </div>

            <EditForm />
            <TestimonialsSection />
            <Link href='/listings'>go to listings</Link>
            <Link href='/splashpage'>go to splashpage</Link>
            <Link href='/editprofile'>you want to edit your profile?</Link>
        </Layout>
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

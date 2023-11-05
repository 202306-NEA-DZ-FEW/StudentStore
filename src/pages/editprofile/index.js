import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Footer from "@/components/Footer/Footer";
import Language from "@/components/Language/Language";
import ProductCard from "@/components/ProductCard/ProductCard";
import SearchBar from "@/components/SearchBar/SearchBar";

import Layout from "@/layout/Layout";

import Sidebar from "@/components/SideBar/SideBar";

export default function HomePage() {
    const { t } = useTranslation("common");
    return (
        <>
            <Sidebar />
        </>
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
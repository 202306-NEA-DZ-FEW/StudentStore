import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import ProductCard from "@/components/ProductCard/ProductCard";

import Layout from "@/layout/Layout";
import { db } from "@/util/firebase";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function HomePage() {
    const { t } = useTranslation("common");
    const colRef = collection(db, "products");
    getDocs(colRef).then((snapshot) => {
        let products = [];
        snapshot.docs.forEach((doc) =>
            products.push({ ...doc.data(), id: doc.id })
        );
    });
    return (
        <Layout>
            <ProductCard />
            <SearchBar />
            <p>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>
            </div>
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

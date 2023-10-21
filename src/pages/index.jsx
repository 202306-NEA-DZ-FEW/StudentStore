import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { db } from "@/util/firebase";
import { collection, getDocs } from "firebase/firestore";
import Layout from "@/layout/Layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import { onSnapshot } from "firebase/firestore";

export default function HomePage() {
    const { t } = useTranslation("common");
    const colRef = collection(db, "products");
    useEffect(() => {
        onSnapshot(colRef, (snapshot) => {
            let products = [];
            snapshot.docs.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            console.log(products);
        });
    }, []);
    return (
        <div>
            <Layout>
                <p>{t("test")}</p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                    }}
                >
                    <Link href='/' locale='en'>
                        English
                    </Link>
                    <Link href='/' locale='ar'>
                        العربية
                    </Link>
                </div>
            </Layout>
            <SearchBar />
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

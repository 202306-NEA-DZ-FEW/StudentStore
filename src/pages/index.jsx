import * as React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Link from "next/link";


import Map from "@/components/Map"; 
import { collection, getDocs } from "firebase/firestore";

import MapComponent from "@/components/Map";

import * as React from "react";

import Footer from "@/components/Footer/Footer";
import Language from "@/components/Language/Language";
import ProductCard from "@/components/ProductCard/ProductCard";
import SearchBar from "@/components/SearchBar/SearchBar";

import Layout from "@/layout/Layout";
import { db } from "@/util/firebase";
import Sidebar from "@/components/SideBar/SideBar";


export default function HomePage() {
    const { t } = useTranslation("common");
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(db, "products");
            const snapshot = await getDocs(colRef);
            let productsData = [];
            snapshot.forEach((doc) => {
                productsData.push({ ...doc.data(), id: doc.id });
            });
            setProducts(productsData);
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <Layout>
            <div>
                <MapComponent />
            </div>

            <p>{t("test")}</p>
            <div>
                {products.map((product) => (
                    <div key={product.id}>{product.name}</div>
                ))}
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>
            </div>
            <Language />
            <SearchBar />
            <ProductCard />

            <Link href='/Listings'>go to listings</Link>
            <Link href='/splashpage'>go to splashpage</Link>
            <Link href='/editprofile'>you want to edit your profile?</Link>

            <Footer />
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

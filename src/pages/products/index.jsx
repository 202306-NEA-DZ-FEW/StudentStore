import ProductsContainer from "@/components/ProductsContainer/ProductsContainer";
import { db } from "@/util/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

function AllProducts() {
    const { t } = useTranslation("products");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const colRef = collection(db, "products");
        onSnapshot(colRef, (snapshot) => {
            let products = [];
            snapshot.docs.forEach((doc) =>
                products.push({ ...doc.data(), id: doc.id })
            );
            setProducts(products);
        });
    }, []);
    return <ProductsContainer products={products} t={t} />;
}

export default AllProducts;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["products"])),
            // Will be passed to the page component as props
        },
    };
}

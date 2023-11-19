import ProductsContainer from "@/components/ProductsContainer/ProductsContainer";
import { db } from "@/util/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AllProducts() {
    const { t } = useTranslation("products");
    const [products, setProducts] = useState([]);
    const router = useRouter();
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
    const { query } = router;
    const filteredProducts = query.category
        ? products.filter(
              (product) => product.category.toLowerCase() === query.category
          )
        : products;
    return <ProductsContainer products={filteredProducts} t={t} />;
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

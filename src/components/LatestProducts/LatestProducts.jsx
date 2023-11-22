import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

import { db } from "@/util/firebase";

import Button from "../Buttons/Button";
import ProductCard from "../ProductCard/ProductCard";

export default function LatestProducts({ t }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const colRef = collection(db, "products");
        const q = query(colRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            let products = [];
            snapshot.docs.forEach((doc) =>
                products.push({ ...doc.data(), id: doc.id })
            );
            let latestProducts = products?.slice(0, 10);
            setProducts(latestProducts);
        });
    }, []);
    return (
        <div className='flex flex-col justify-center items-center shadow-lg border-t-2 bg-gray-200 pt-10 pb-5'>
            <h1 className='mb-10 text-3xl font-bold text-[#585785]'>
                {t("Recently Added")}
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-4 lg:gap-8 place-items-center'>
                {products?.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </div>
            <Link href='/products'>
                <Button className='bg-[#585785] border-[#585785] hover:text-[#585785] hover:border-[#585785] mt-10 mb-5 '>
                    {t("Explore More")}
                </Button>
            </Link>
        </div>
    );
}

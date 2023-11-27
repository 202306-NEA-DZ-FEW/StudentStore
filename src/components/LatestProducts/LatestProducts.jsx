import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { db } from "@/util/firebase";

import Button from "../Buttons/Button";
import ProductCard from "../ProductCard/ProductCard";

export default function LatestProducts({ t }) {
    const [products, setProducts] = useState([]);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
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
    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0, y: 0 });
        }
    }, [controls, inView]);
    return (
        <div
            ref={ref}
            className='flex flex-col justify-center items-center shadow-lg border-t-2 bg-gray-200 pt-10 pb-5'
        >
            <h1 className='mb-10 text-3xl font-bold text-[#585785]'>
                {t("Recently Added")}
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-4 lg:gap-8 place-items-center'>
                {products?.map((product, i) => {
                    return (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: -50, y: -50 }}
                            animate={controls}
                            transition={{ duration: 0.4, delay: i * 0.3 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    );
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

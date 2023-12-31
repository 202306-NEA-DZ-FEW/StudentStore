import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";

export default function ProductsList({ products, t }) {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowMessage(true);
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className='w-full sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-[80%] xl:max-w-[1000px] py-5'>
            {products && products.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-3 gap-y-4 md:gap-x-0'>
                    {products?.map((product, i) => {
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, x: -50, y: -50 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.3 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        );
                    })}
                </div>
            ) : (
                <div className='flex items-center h-full'>
                    <p
                        className={`text-center text-orange-500 font-bold text-2xl capitalize max-w-[60%] sm:max-w-full mx-auto ${
                            showMessage ? "visible" : "invisible"
                        }`}
                    >
                        {t("sorry,no products match the applied filter.")}
                    </p>
                </div>
            )}
        </div>
    );
}

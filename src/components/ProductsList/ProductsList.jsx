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
                    {products?.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
                </div>
            ) : (
                <p
                    className={`text-center text-gray-500 text-2xl capitalize my-10 md:mt-2 max-w-[60%] sm:max-w-full mx-auto ${
                        showMessage ? "visible" : "invisible"
                    }`}
                >
                    {t("sorry,no products match the applied filter.")}
                </p>
            )}
        </div>
    );
}

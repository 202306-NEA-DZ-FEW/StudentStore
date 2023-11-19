import { db } from "@/util/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function LatestProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const colRef = collection(db, "products");
        onSnapshot(colRef, (snapshot) => {
            let products = [];
            snapshot.docs.forEach((doc) =>
                products.push({ ...doc.data(), id: doc.id })
            );
            let latestProducts = products.slice(1, 9);
            setProducts(latestProducts);
        });
    }, []);
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[70%] mx-auto gap-4 place-items-center'>
                {products?.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
}

import ProductsContainer from "@/components/ProductsContainer/ProductsContainer";
import { db } from "@/util/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function AllProducts() {
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
    return <ProductsContainer products={products} />;
}

export default AllProducts;

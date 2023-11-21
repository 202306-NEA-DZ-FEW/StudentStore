import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "@/util/firebase";
// import { onSnapshot } from "firebase/firestore";
import { CartProvider } from "@/context/CartContext";

function SingleProduct() {
    const router = useRouter();
    const { productId } = router.query;
    const [setProduct] = useState(null);

    return (
        <CartProvider>
            <div>
                <ProductDetails productId={productId} />
                {/* Conditionally render MapComponent based on screen size */}
                {productId && (
                    <div className='hidden lg:block'>
                        {/* This will be visible on screens larger than or equal to lg (large) */}
                        {/* <MapComponent productId={productId} /> */}
                    </div>
                )}
            </div>
        </CartProvider>
    );
}

export default SingleProduct;

import ProductDetails from "@/components/ProductDetails/ProductDetails";
import MapComponent from "@/components/Map";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "@/components/NavBar/NavBar";

function SingleProduct() {
    const router = useRouter();
    const { productId } = router.query;

    return (
        <div>
            <Navbar />
            <ProductDetails productId={productId} />
            {/* Conditionally render MapComponent based on screen size */}
            {productId && (
                <div className='hidden lg:block'>
                    {/* This will be visible on screens larger than or equal to lg (large) */}
                    <MapComponent productId={productId} />
                </div>
            )}
        </div>
    );
}

export default SingleProduct;

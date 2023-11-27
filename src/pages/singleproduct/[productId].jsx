import dynamic from "next/dynamic";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { useRouter } from "next/router";
import { CartProvider } from "@/context/CartContext";

const MapComponent = dynamic(() => import("@/components/Map/Map"), {
    ssr: false,
});

function SingleProduct() {
    const router = useRouter();
    const { productId } = router.query;

    return (
        <div className='relative'>
            <ProductDetails productId={productId} />

            {/* Conditionally render MapComponent based on screen size */}
            {productId && (
                <div className='hidden lg:block  lg:relative lg:z-0'>
                    <MapComponent productId={productId} />
                </div>
            )}
        </div>
    );
}

export default SingleProduct;

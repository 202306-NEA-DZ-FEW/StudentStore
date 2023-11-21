import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { useRouter } from "next/router";
import { CartProvider } from "@/context/CartContext";
// import MapComponent from "@/components/Map/Map";

function SingleProduct() {
    const router = useRouter();
    const { productId } = router.query;

    return (
        <CartProvider>
            <div className='relative'>
                <ProductDetails productId={productId} />

                {/* Conditionally render MapComponent based on screen size */}
                {/* {productId && (
                    <div className="hidden lg:block lg:mt-16 lg:relative lg:z-0">
                  
                        <MapComponent productId={productId} />
                    </div>
                )} */}
            </div>
        </CartProvider>
    );
}

export default SingleProduct;

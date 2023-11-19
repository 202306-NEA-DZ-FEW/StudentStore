import ProductCard from "../ProductCard/ProductCard";

export default function ProductsList({ products }) {
    return (
        <div className='w-[55%] md:w-[70%] lg:w-[80%] flex justify-center flex-wrap gap-4'>
            {products?.map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
}

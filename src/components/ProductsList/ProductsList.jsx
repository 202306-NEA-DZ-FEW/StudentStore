import ProductCard from "../ProductCard/ProductCard";

export default function ProductsList({ products }) {
    return (
        <div className='w-3/4 flex justify-center flex-wrap gap-4'>
            {products?.map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
}

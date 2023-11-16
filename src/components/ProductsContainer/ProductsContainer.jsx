import ProductsList from "../ProductsList/ProductsList";

export default function ProductsContainer({ products }) {
    return (
        <div>
            <ProductsList products={products} />
        </div>
    );
}

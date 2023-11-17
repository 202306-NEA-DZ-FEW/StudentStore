import { useEffect, useRef, useState } from "react";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";

export default function ProductsContainer({ products }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortByPriceAsc, setSortByPriceAsc] = useState(false);
    const [sortByPriceDesc, setSortByPriceDesc] = useState(false);
    // debounce functionality
    const debounceTimeout = useRef(null);
    const debounce = (func, delay) => {
        return function (...args) {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }

            debounceTimeout.current = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };
    //  min price change function
    const handleMinPriceChange = (e) => {
        const newMinPrice = e.target.value;
        setMinPrice(newMinPrice);
        debounce(filterProducts, 500)(newMinPrice, maxPrice);
    };
    // max price change function
    const handleMaxPriceChange = (e) => {
        const newMaxPrice = e.target.value;
        setMaxPrice(newMaxPrice);
        debounce(filterProducts, 500)(minPrice, newMaxPrice);
    };
    // filter price functions
    const filterProducts = (min, max) => {
        const filtered = products.filter((product) => {
            const price = parseFloat(product.price);
            const minPriceValue = parseFloat(min);
            const maxPriceValue = parseFloat(max);
            return (
                isNaN(price) ||
                ((isNaN(minPriceValue) || price >= minPriceValue) &&
                    (isNaN(maxPriceValue) || price <= maxPriceValue))
            );
        });

        setFilteredProducts(filtered);
    };
    // sorting by asc price
    const handleSortByPriceAscChange = () => {
        setSortByPriceAsc(!sortByPriceAsc);
        setSortByPriceDesc(false);
    };
    // sorting by des price
    const handleSortByPriceDescChange = () => {
        setSortByPriceDesc(!sortByPriceDesc);
        setSortByPriceAsc(false);
    };
    let sortedProducts = [...filteredProducts];

    if (sortByPriceAsc) {
        sortedProducts.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
    } else if (sortByPriceDesc) {
        sortedProducts.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
    }
    // using this useEffect to diplay all product at the firt render
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);
    return (
        <div className='flex'>
            <Filter
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPriceChange={handleMinPriceChange}
                handleMaxPriceChange={handleMaxPriceChange}
                sortByPriceAsc={sortByPriceAsc}
                sortByPriceDesc={sortByPriceDesc}
                handleSortByPriceAscChange={handleSortByPriceAscChange}
                handleSortByPriceDescChange={handleSortByPriceDescChange}
            />
            <ProductsList products={sortedProducts} />
        </div>
    );
}

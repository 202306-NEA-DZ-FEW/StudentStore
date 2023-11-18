import { useEffect, useRef, useState } from "react";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";

export default function ProductsContainer({ products, t }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortByPriceAsc, setSortByPriceAsc] = useState(false);
    const [sortByPriceDesc, setSortByPriceDesc] = useState(false);
    const [selectedType, setSelectedType] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCondition, setSelectedCondition] = useState([]);
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
    // function for type change
    const handleTypeChange = (type) => {
        if (selectedType.includes(type)) {
            setSelectedType(selectedType.filter((t) => t !== type));
        } else {
            setSelectedType([...selectedType, type]);
        }
    };
    // types to compare with
    const filterType = ["sale", "borrow"];
    if (selectedType.length > 0) {
        sortedProducts = sortedProducts.filter((product) =>
            selectedType.includes(product.type)
        );
    }

    // categories filter
    // function for category change
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category)
            );
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };
    // Categories to compare with
    const filterCategories = [
        "electronics",
        "books",
        "gaming",
        "clothes",
        "shoes",
        "food",
        "transportation",
        "furniture",
    ];
    if (selectedCategories.length > 0) {
        sortedProducts = sortedProducts.filter((product) =>
            selectedCategories.includes(product.category)
        );
    }
    // condition Filter
    // function for condition change
    const handleCondtionChange = (condition) => {
        if (selectedCondition.includes(condition)) {
            setSelectedCondition(
                selectedCondition.filter((c) => c !== condition)
            );
        } else {
            setSelectedCondition([...selectedCondition, condition]);
        }
    };
    // Conditions to compare with
    const filterCondtion = ["new", "like new", "good", "poor"];
    if (selectedCondition.length > 0) {
        sortedProducts = sortedProducts.filter((product) =>
            selectedCondition.includes(product.condition)
        );
    }
    // reset filters functionality
    const resetFilters = () => {
        setMinPrice("");
        setMaxPrice("");
        setSortByPriceAsc(false);
        setSortByPriceDesc(false);
        setSelectedType([]);
        setSelectedCategories([]);
        setSelectedCondition([]);
        setFilteredProducts(products);
    };
    // using this useEffect to diplay all product at the firt render
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);
    return (
        <div className='flex w-full'>
            <Filter
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPriceChange={handleMinPriceChange}
                handleMaxPriceChange={handleMaxPriceChange}
                sortByPriceAsc={sortByPriceAsc}
                sortByPriceDesc={sortByPriceDesc}
                handleSortByPriceAscChange={handleSortByPriceAscChange}
                handleSortByPriceDescChange={handleSortByPriceDescChange}
                selectedType={selectedType}
                handleTypeChange={handleTypeChange}
                filterType={filterType}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
                filterCategories={filterCategories}
                resetFilters={resetFilters}
                t={t}
                filterCondtion={filterCondtion}
                selectedCondition={selectedCondition}
                handleCondtionChange={handleCondtionChange}
            />
            <ProductsList products={sortedProducts} />
        </div>
    );
}

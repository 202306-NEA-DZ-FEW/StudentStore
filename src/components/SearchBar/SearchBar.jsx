import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "@/util/firebase";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        let q;
        if (searchTerm.trim() === "") {
            // If the search term is empty, do not perform a search.
            setProducts([]);
            setLoading(false);
            return;
        }
        // Use array-contains for case-insensitive search
        q = query(collection(db, "products"));

        onSnapshot(q, (snapshot) => {
            const productsArray = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                if (
                    data.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    productsArray.push({ id: doc.id, ...data });
                }
            });
            setProducts(productsArray);
            setLoading(false);
        });
    };

    useEffect(() => {
        // Call the search function when searchTerm changes
        handleSearch();
    }, [searchTerm]);

    // Determine if products not found message should be shown
    const showNoProductsMessage =
        !loading && searchTerm.trim() !== "" && products.length === 0;
    const showResultsContainer = products.length > 0;

    return (
        <div className='relative mx-auto max-w-md'>
            <div className='input-wrapper'>
                <input
                    type='text'
                    placeholder='Search here...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full border border-gray-300 rounded-full py-2 px-4 pl-8 focus:outline-none'
                />
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                    <ImSearch />
                </div>
            </div>

            {showResultsContainer && (
                <div className='product-container bg-white bg-opacity-80 rounded-lg shadow-lg p-4 absolute left-0 right-0'>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                {product.name
                                    .split(new RegExp(`(${searchTerm})`, "gi"))
                                    .map((text, index) =>
                                        text.toLowerCase() ===
                                        searchTerm.toLowerCase() ? (
                                            <span
                                                key={index}
                                                className='text-blue-500'
                                            >
                                                {text}
                                            </span>
                                        ) : (
                                            text
                                        )
                                    )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {showNoProductsMessage && (
                <p className='text-white bg-gray-500 p-2 rounded'>
                    No products found.
                </p>
            )}
        </div>
    );
};

export default SearchBar;

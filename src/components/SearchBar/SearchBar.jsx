import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/util/firebase";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        let q;
        if (searchTerm.trim() === "") {
            // If the search term is empty, do not perform a search
            setProducts([]);
            setLoading(false);
            return;
        }
        q = query(collection(db, "products"), where("name", ">=", searchTerm));
        try {
            const querySnapshot = await getDocs(q);
            const productsArray = [];
            querySnapshot.forEach((doc) => {
                productsArray.push({ id: doc.id, ...doc.data() });
            });
            setProducts(productsArray);
            setLoading(false);
        } catch (error) {
            console.error("Error getting products: ", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        // Call the search function when searchTerm changes
        handleSearch();
    }, [searchTerm]);

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

            {loading && <p>Loading...</p>}
            {!loading && products.length > 0 && (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price} -{" "}
                            {product.category}
                        </li>
                    ))}
                </ul>
            )}
            {!loading && products.length === 0 && <p>No products found.</p>}
        </div>
    );
};

export default SearchBar;

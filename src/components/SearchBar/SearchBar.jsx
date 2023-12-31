import { collection, onSnapshot, query } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";

import { db } from "@/util/firebase";

const SearchBar = ({ t }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const route = useRouter();

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
                    data.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    productsArray.push({ id: doc.id, ...data });
                }
            });
            setProducts(productsArray);
            setLoading(false);
        });
    };
    const handleResultClick = () => {
        // Reset the search term when a result is clicked
        setSearchTerm("");
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
        <div
            className='relative mx-auto max-w-sm'
            dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
        >
            <div className='input-wrapper'>
                <input
                    type='text'
                    placeholder={t("Search Here...")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full py-1 text-[#585785] px-4 border-[#585785] border-2 dark:bg-white rounded-full   font-sm  focus:outline-none'
                />
                <div
                    className={`absolute  top-1/2 transform -translate-y-1/2 ${
                        route.locale === "ar" ? "left-3" : "right-3"
                    } text-gray-500`}
                >
                    <ImSearch />
                </div>
            </div>

            {showResultsContainer && (
                <div className='product-container text-[#585785] bg-white bg-opacity-95 rounded-lg shadow-lg p-4 absolute left-0 right-0 overflow-y-auto max-h-40 '>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <Link
                                    href={`/singleproduct/${product.id}`}
                                    className='hover:bg-gray-200 block p-1 rounded-md pl-2 transition-all duration-500'
                                    onClick={handleResultClick}
                                >
                                    {product.title
                                        .split(
                                            new RegExp(`(${searchTerm})`, "gi")
                                        )
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
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {showNoProductsMessage && (
                <p className='text-white absolute bg-gray-500 p-2 rounded'>
                    {t("No products found.")}
                </p>
            )}
        </div>
    );
};

export default SearchBar;

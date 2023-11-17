import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Filter({
    minPrice,
    maxPrice,
    handleMinPriceChange,
    handleMaxPriceChange,
    sortByPriceAsc,
    sortByPriceDesc,
    handleSortByPriceAscChange,
    handleSortByPriceDescChange,
    selectedType,
    handleTypeChange,
    filterType,
    selectedCategories,
    handleCategoryChange,
    filterCategories,
    resetFilters,
    t,
}) {
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const route = useRouter();
    const toggleCategoryDropdown = () => {
        setCategoryDropdownOpen(!categoryDropdownOpen);
    };

    return (
        <div className='w-1/4' dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}>
            <div>
                <h2>{t("price")}</h2>

                <div className='ml-4'>
                    <div>
                        <input
                            type='number'
                            placeholder={t("min")}
                            className='w-1/2 h-6 border rounded-md px-2 focus:outline-none'
                            value={minPrice}
                            onChange={handleMinPriceChange}
                        />
                        <input
                            type='number'
                            placeholder={t("max")}
                            className='w-1/2 h-6 border rounded-md px-2 focus:outline-none'
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </div>
                </div>
            </div>
            <h2>{t("sort by")}</h2>

            <div className='ml-4'>
                <div>
                    <input
                        type='checkbox'
                        className='mr-2'
                        checked={sortByPriceAsc}
                        onChange={handleSortByPriceAscChange}
                    />
                    <label className='checkbox-label'>
                        {t("lowest price")}
                    </label>
                </div>
                <div>
                    <input
                        type='checkbox'
                        className='mr-2'
                        checked={sortByPriceDesc}
                        onChange={handleSortByPriceDescChange}
                    />
                    <label className='checkbox-label'>
                        {t("highest price")}
                    </label>
                </div>
            </div>
            <div>
                <h2>{t("type")}</h2>
                <div className='ml-4'>
                    {filterType?.map((type) => (
                        <div key={type} className='mb-1'>
                            <input
                                type='checkbox'
                                checked={selectedType.includes(type)}
                                onChange={() => handleTypeChange(type)}
                            />
                            <label className='label-title ml-2 mb-1 capitalize'>
                                {t(`for ${type}`)}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>
                    <button
                        onClick={toggleCategoryDropdown}
                        className='flex items-center'
                    >
                        {t("category")}
                        <IoIosArrowDown
                            className={`ml-2 ${
                                categoryDropdownOpen ? "rotate-180" : ""
                            } transition-all duration-200`}
                        />
                    </button>
                </h2>
                {categoryDropdownOpen && (
                    <div className='ml-4'>
                        {filterCategories?.map((category) => (
                            <div key={category} className='mb-1'>
                                <input
                                    type='checkbox'
                                    checked={selectedCategories.includes(
                                        category
                                    )}
                                    onChange={() =>
                                        handleCategoryChange(category)
                                    }
                                />
                                <label className='label-title ml-2 mb-1 capitalize'>
                                    {t(`${category}`)}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <button onClick={resetFilters}>{t("clear filters")}</button>
            </div>
        </div>
    );
}

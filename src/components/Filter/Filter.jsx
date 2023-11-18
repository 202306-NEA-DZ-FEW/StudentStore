import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

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
    filterCondtion,
    selectedCondition,
    handleCondtionChange,
}) {
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [conditionDropdownOpen, setConditionDropdownOpen] = useState(false);
    const route = useRouter();
    const toggleCategoryDropdown = () => {
        setCategoryDropdownOpen(!categoryDropdownOpen);
    };
    const toggleConditionDropdown = () => {
        setConditionDropdownOpen(!conditionDropdownOpen);
    };

    return (
        <div
            className={`w-[45%] md:w-[30%] lg:w-[20%] ${
                route.locale === "ar" ? "order-2" : ""
            } bg-gray-200 text-[#585785] pt-8 px-4`}
            dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
        >
            <div className='flex items-center gap-x-2 text-xl font-bold mb-4'>
                <IoFilter />
                <h1>{t("filter")}</h1>
            </div>
            <div>
                <div>
                    <h2 className='text-lg font-bold mb-2'>{t("price")}</h2>
                    <div className='mb-4 flex items-center gap-x-2'>
                        <input
                            type='number'
                            placeholder={t("min")}
                            className={`w-2/5 h-6 border rounded-md px-2 focus:outline-none ${
                                route.locale === "ar" ? "w-[50%] sm:w-2/5" : ""
                            }`}
                            value={minPrice}
                            onChange={handleMinPriceChange}
                        />
                        <input
                            type='number'
                            placeholder={t("max")}
                            className={`w-2/5 h-6 border rounded-md px-2 focus:outline-none ${
                                route.locale === "ar" ? "w-[50%] sm:w-2/5" : ""
                            }`}
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </div>
                </div>
            </div>

            <div className='mb-4'>
                <h2 className='text-lg font-bold mb-2'>{t("sort by")}</h2>
                <div className={`pl-2 ${route.locale === "ar" ? "pl-0" : ""}`}>
                    <input
                        type='checkbox'
                        className={`mr-2 ${
                            route.locale === "ar" ? "mr-0 ml-2" : ""
                        }`}
                        checked={sortByPriceAsc}
                        onChange={handleSortByPriceAscChange}
                    />
                    <label className='checkbox-label'>
                        {t("lowest price")}
                    </label>
                </div>
                <div className={`pl-2 ${route.locale === "ar" ? "pl-0" : ""}`}>
                    <input
                        type='checkbox'
                        className={`mr-2 ${
                            route.locale === "ar" ? "mr-0 ml-2" : ""
                        }`}
                        checked={sortByPriceDesc}
                        onChange={handleSortByPriceDescChange}
                    />
                    <label className='checkbox-label'>
                        {t("highest price")}
                    </label>
                </div>
            </div>
            <div className='mb-4'>
                <h2 className='text-lg font-bold mb-2'>{t("type")}</h2>
                <div
                    className={`pl-2 ${
                        route.locale === "ar" ? "pr-2 pl-0" : ""
                    }`}
                >
                    {filterType?.map((type) => (
                        <div key={type} className='mb-1 flex'>
                            <input
                                type='checkbox'
                                checked={selectedType.includes(type)}
                                onChange={() => handleTypeChange(type)}
                            />
                            <label
                                className={`label-title ml-2 ${
                                    route.locale === "ar"
                                        ? "ml-0 mr-2 mb-1"
                                        : ""
                                } capitalize `}
                            >
                                {t(`for ${type}`)}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mb-4'>
                <h2>
                    <button
                        onClick={toggleCategoryDropdown}
                        className='flex items-center justify-between w-full text-lg font-bold mb-2'
                    >
                        {t("category")}
                        <IoIosArrowDown
                            className={`${
                                categoryDropdownOpen ? "rotate-180" : ""
                            } transition-all duration-200`}
                        />
                    </button>
                </h2>
                {categoryDropdownOpen && (
                    <div
                        className={`pl-2 ${
                            route.locale === "ar" ? "pr-2 pl-0" : ""
                        }`}
                    >
                        {filterCategories?.map((category) => (
                            <div key={category} className='mb-1 flex'>
                                <input
                                    type='checkbox'
                                    checked={selectedCategories.includes(
                                        category
                                    )}
                                    onChange={() =>
                                        handleCategoryChange(category)
                                    }
                                />
                                <label
                                    className={`label-title ml-1 ${
                                        route.locale === "ar"
                                            ? "ml-0 mr-1 mb-1"
                                            : ""
                                    } capitalize`}
                                >
                                    {t(`${category}`)}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='mb-5'>
                <h2>
                    <button
                        onClick={toggleConditionDropdown}
                        className='flex items-center justify-between w-full text-lg font-bold mb-2'
                    >
                        {t("condition")}
                        <IoIosArrowDown
                            className={`${
                                conditionDropdownOpen ? "rotate-180" : ""
                            } transition-all duration-200`}
                        />
                    </button>
                </h2>
                {conditionDropdownOpen && (
                    <div
                        className={`pl-2 ${
                            route.locale === "ar" ? "pr-2 pl-0" : ""
                        }`}
                    >
                        {filterCondtion?.map((condition) => (
                            <div key={condition} className='mb-1 flex'>
                                <input
                                    type='checkbox'
                                    checked={selectedCondition.includes(
                                        condition
                                    )}
                                    onChange={() =>
                                        handleCondtionChange(condition)
                                    }
                                />
                                <label
                                    className={`label-title ml-1 ${
                                        route.locale === "ar"
                                            ? "ml-0 mr-1 mb-1"
                                            : ""
                                    } capitalize`}
                                >
                                    {t(`${condition}`)}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <button
                    onClick={resetFilters}
                    className={`text-md font-bold bg-red-500 py-1 px-2 rounded-md text-white hover:shadow-lg transition-all duration-200 ${
                        route.locale === "fr" ? "text-sm sm:text-md" : ""
                    }`}
                >
                    {t("clear filters")}
                </button>
            </div>
        </div>
    );
}

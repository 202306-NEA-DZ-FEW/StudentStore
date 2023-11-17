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
}) {
    return (
        <>
            <div className='w-1/4'>
                <div>
                    <h2>Price</h2>

                    <div className='ml-4'>
                        <div className='flex space-x-2 justify-center my-2'>
                            <input
                                type='number'
                                placeholder='Min'
                                className='w-1/2 h-6 border rounded-md px-2 focus:outline-none'
                                value={minPrice}
                                onChange={handleMinPriceChange}
                            />
                            <input
                                type='number'
                                placeholder='Max'
                                className='w-1/2 h-6 border rounded-md px-2 focus:outline-none'
                                value={maxPrice}
                                onChange={handleMaxPriceChange}
                            />
                        </div>
                    </div>
                </div>
                <h2>Sort</h2>

                <div className='ml-4'>
                    <div className='flex items-center mb-1'>
                        <input
                            type='checkbox'
                            className='mr-2'
                            checked={sortByPriceAsc}
                            onChange={handleSortByPriceAscChange}
                        />
                        <label className='checkbox-label'>
                            Price Low to High
                        </label>
                    </div>
                    <div className='flex items-center mb-1'>
                        <input
                            type='checkbox'
                            className='mr-2'
                            checked={sortByPriceDesc}
                            onChange={handleSortByPriceDescChange}
                        />
                        <label className='checkbox-label'>
                            Price High to Low
                        </label>
                    </div>
                </div>
                <div>
                    <h2>Type</h2>
                    <div className='ml-4'>
                        {filterType?.map((type) => (
                            <div key={type} className='mb-1'>
                                <input
                                    type='checkbox'
                                    checked={selectedType.includes(type)}
                                    onChange={() => handleTypeChange(type)}
                                />
                                <label className='label-title ml-2 mb-1 capitalize'>
                                    {`for ${type}`}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>Category</h2>
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
                                    {`${category}`}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

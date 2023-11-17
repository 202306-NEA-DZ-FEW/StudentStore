export default function Filter({
    minPrice,
    maxPrice,
    handleMinPriceChange,
    handleMaxPriceChange,
}) {
    return (
        <div className='w-1/4'>
            <div>
                <div>
                    <h2>Price</h2>
                </div>
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
        </div>
    );
}

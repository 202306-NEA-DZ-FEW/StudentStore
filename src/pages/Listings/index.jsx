import Image from "next/image";

const Listings = () => {
    return (
        <div className='bg-[#F1F6FA] p-6'>
            <div className='mb-8 sm:mb-12 '>
                <h1 className='text-[#7874F2]  text-[38px] mb-2 font-semibold text-center lg:text-left lg:ml-8 '>
                    List an Item/Service
                </h1>
                <hr className=' w-full border-1 border-opacity-50   border-[#7495AE] ' />
            </div>

            <div className='flex flex-col  gap-6 sm:gap-6 sm:flex-col md:flex-col  md:justify-center lg:flex-row lg:justify-between'>
                <div className='grid grid-cols-3 grid-rows-4 md:flex lg:grid lg:grid-rows-3  w-full sm:w-full md:w-full lg:w-1/2  justify-between  gap-4'>
                    <div className='col-span-3 row-span-3 md:grid-rows-2 items-center justify-center overflow-hidden w-full lg:h-80 md:w-[60%] lg:w-full bg-[#EEF2F4]  border rounded-md border-[#979797]'>
                        <Image
                            className='object-cover  w-full h-full '
                            src=''
                            width={1100}
                            height={1000}
                            alt='product image'
                        />
                    </div>
                    <div className=' col-span-3 row-span-1  md:w-[40%] lg:w-full rounded-md gap-4'>
                        <div className='flex justify-between  gap-4 md:grid md:grid-cols-2 md:grid-rows-3 sm:gap-6  lg:flex   '>
                            <div className='col-span-2 row-span-1 md:row-span-2 w-full  bg-[#EEF2F4] h-20 sm:h-28 md:h-64 lg:h-28  border rounded-md border-[#979797] overflow-hidden'>
                                <Image
                                    className='object-cover w-full h-full rounded-md '
                                    src=''
                                    width={1600}
                                    height={1000}
                                    alt='product image'
                                />
                            </div>

                            <div className='w-full col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-28  border rounded-md border-[#979797] overflow-hidden'>
                                <Image
                                    className='object-cover w-full h-full '
                                    src=''
                                    width={1600}
                                    height={1000}
                                    alt='product image'
                                />
                            </div>
                            <div className='col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-28  w-full border  rounded-md border-[#979797] overflow-hidden lg:w-full'>
                                <Image
                                    className='object-cover w-full h-full '
                                    src=''
                                    width={1600}
                                    height={1000}
                                    alt='product image'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <form className=' grid w-full sm:w-full md:w-full  lg:w-1/2  grid-cols-4 grid-rows-6 gap-4 '>
                    <div className='col-span-4 row-span-1 md:col-span-2 '>
                        <select
                            className='select select-bordered  input-style'
                            name='type'
                            value=''
                            onChange=''
                        >
                            <option value='' disabled selected>
                                Type(Product, service)
                            </option>
                            <option value='sale'>sale</option>
                            <option value='borrow'>borrow</option>
                        </select>
                    </div>
                    <div className='col-span-4 row-span-1 md:col-span-2 '>
                        <select
                            className='select select-bordered  input-style  '
                            name='category'
                            value=''
                            onChange=''
                        >
                            <option value='' disabled selected>
                                Category
                            </option>
                            <option value='electronics'>electronics</option>
                            <option value='books'>books</option>
                            <option value='gaming'>gaming</option>
                            <option value='shoes'>shoes</option>
                        </select>
                    </div>
                    <div className='col-span-4 row-span-1 '>
                        <input
                            className=' input input-bordered input-style '
                            type='text'
                            name='title'
                            value=''
                            onChange=''
                            placeholder='Product name'
                        />
                    </div>
                    <div className='col-span-4 row-span-2 '>
                        <textarea
                            type='text'
                            className='input input-bordered py-2  h-full  input-style placeholder-center placeholder:text-center'
                            placeholder='Description'
                            name='description'
                            value=''
                            onChange=''
                        />
                    </div>
                    <input
                        type='text'
                        name='location'
                        value=''
                        onChange=''
                        placeholder='Location'
                        className='input input-bordered col-span-2 row-span-1 input-style '
                    />

                    <input
                        type='number'
                        name='price'
                        value=''
                        placeholder='Price'
                        className='input input-bordered col-span-2 row-span-1 input-style '
                        onChange=''
                    />
                    <div className='col-span-4 row-span-1 flex gap-4 mt-4'>
                        <label className=' w-full h-full items-center  justify-center relative inline-flex bg-[#585785] text-white py-2  rounded-lg cursor-pointer shimmer'>
                            <span>Upload Images</span>
                            <input type='file' onChange='' className='hidden' />
                        </label>
                        <button
                            type='submit'
                            className='w-full h-full text-white bg-[#FF8A57] rounded-lg '
                        >
                            List
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Listings;

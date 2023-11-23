import classNames from "classnames";
import Image from "next/image";

const ListingImages = ({ imageFiles, handleImageDelete }) => {
    return (
        <div className='grid grid-cols-3 grid-rows-3 md:flex lg:grid lg:grid-rows-3  w-full sm:w-full md:w-full lg:w-1/2  justify-between  gap-4'>
            <div
                className={classNames(
                    "col-span-3 row-span-3 md:grid-rows-2 items-center justify-center overflow-hidden  w-full h-72 lg:h-80 md:w-[60%] lg:w-full bg-[#EEF2F4]  border rounded-md border-[#979797]",
                    { "empty-image-container": !imageFiles[0] }
                )}
            >
                {imageFiles[0] ? (
                    <div className='relative w-full h-72 lg:h-80 lg:w-full'>
                        <Image
                            className='object-cover flex-reverse  w-full h-full'
                            src={imageFiles[0]}
                            width={1200}
                            height={1000}
                            alt='product image'
                        />
                        <button
                            onClick={() => handleImageDelete(0)}
                            className='absolute top-2 right-2 p-2 h-4 w-4 grid place-content-center bg-red-500 rounded-full text-white cursor-pointer'
                        >
                            X
                        </button>
                    </div>
                ) : (
                    <div className='empty-image-container'></div>
                )}
            </div>
            <div className=' col-span-3 row-span-1    md:w-[40%] lg:w-full rounded-md gap-4'>
                <div className='flex justify-between  gap-4 md:grid md:grid-cols-2 md:grid-rows-2 sm:gap-6  lg:flex'>
                    <div
                        className={classNames(
                            "col-span-2 row-span-1 md:row-span-2 w-full h-20 sm:h-24 md:h-40 lg:h-28  bg-[#EEF2F4]   border rounded-md border-[#979797] overflow-hidden",
                            {
                                "empty-image-container bg-[#EEF2F4] lg:bg-[#D1DBE3]":
                                    !imageFiles[1],
                            }
                        )}
                    >
                        {imageFiles[1] ? (
                            <div className='relative w-full h-20 sm:h-24 md:h-40 lg:h-28'>
                                <Image
                                    className='object-cover  w-full h-full rounded-md '
                                    src={imageFiles[1]}
                                    width={1200}
                                    height={1000}
                                    alt='product image'
                                />
                                <button
                                    onClick={() => handleImageDelete(1)}
                                    className='absolute top-2 right-2 p-2 h-4 w-4 grid place-content-center bg-red-500 rounded-full text-white cursor-pointer'
                                >
                                    X
                                </button>
                            </div>
                        ) : (
                            <div className='empty-image-container'></div>
                        )}
                    </div>

                    <div
                        className={classNames(
                            "w-full col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-24 lg:h-28 border rounded-md border-[#979797] overflow-hidden",
                            {
                                "empty-image-container bg-[#EEF2F4] lg:bg-[#D1DBE3]":
                                    !imageFiles[2],
                            }
                        )}
                    >
                        {imageFiles[2] ? (
                            <div className='relative h-20 sm:h-24 lg:h-28 '>
                                <Image
                                    className='object-cover flex-reverse w-full h-full '
                                    src={imageFiles[2]}
                                    width={1200}
                                    height={1000}
                                    alt='product image'
                                />
                                <button
                                    onClick={() => handleImageDelete(2)}
                                    className='absolute top-2 right-2 p-2 h-4 w-4 grid place-content-center bg-red-500 rounded-full text-white cursor-pointer'
                                >
                                    X
                                </button>
                            </div>
                        ) : (
                            <div className='empty-image-container'></div>
                        )}
                    </div>
                    <div
                        className={classNames(
                            "col-span-1 row-span-1 bg-[#EEF2F4]  w-full h-20 sm:h-24 lg:h-28 border  rounded-md border-[#979797] overflow-hidden lg:w-full",
                            {
                                "empty-image-container bg-[#EEF2F4] lg:bg-[#D1DBE3]":
                                    !imageFiles[3],
                            }
                        )}
                    >
                        {imageFiles[3] ? (
                            <div className='relative h-20 sm:h-24 lg:h-28 w-full'>
                                <Image
                                    className='object-cover flex-reverse w-full h-full '
                                    src={imageFiles[3]}
                                    width={1200}
                                    height={1000}
                                    alt='product image'
                                />
                                <button
                                    onClick={() => handleImageDelete(3)}
                                    className='absolute top-2 right-2 p-2 h-4 w-4 grid place-content-center bg-red-500 rounded-full text-white cursor-pointer'
                                >
                                    X
                                </button>
                            </div>
                        ) : (
                            <div className='empty-image-container'></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingImages;

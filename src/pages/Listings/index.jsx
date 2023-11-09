import classNames from "classnames";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Uploading from "@/components/Uploading/Uploading";

import Layout from "@/layout/Layout";
import { db, imgDB } from "@/util/firebase";

const Listings = () => {
    const [imageFiles, setImageFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [formData, setFormData] = useState({
        type: "",
        category: "",
        title: "",
        condition: "",
        description: "",
        price: "",
        location: { city: "" },
        pictures: [],
    });

    const handleChange = (e) => {
        const { value, name, type } = e.target;
        if (type === "file") {
            const file = e.target.files[0];
            const files = e.target.files;
            // reject if the image is selected twice
            const selectedFileNames = formData.pictures.map(
                (imgFile) => imgFile.name
            );
            for (const file of files) {
                const fileName = file.name;
                // Check if the file with the same name has already been selected
                if (selectedFileNames.includes(fileName)) {
                    toast.warning(
                        "Picture with the same name has already been selected."
                    );
                    e.target.value = "";
                    return;
                }
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileUrl = event.target.result;
                setImageFiles((prevImageFiles) => [...prevImageFiles, fileUrl]);
            };
            reader.readAsDataURL(file);
            const updatedImgUrl = [...formData.pictures];
            for (let i = 0; i < files.length; i++) {
                updatedImgUrl.push(files[i]);
            }
            if (updatedImgUrl.length > 4) {
                toast.warning("You can only upload a maximum of 4 images.");
                return;
            }
            setFormData({ ...formData, pictures: updatedImgUrl });
        } else if (name.startsWith("location.")) {
            const [parentName, childName] = name.split(".");
            setFormData((prevData) => ({
                ...prevData,
                [parentName]: {
                    ...prevData[parentName],
                    [childName]: value,
                },
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUploading(true);
        // Scroll to top when loading starts
        setTimeout(() => {
            // Scroll to top when loading starts
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
        // Check if any required fields are empty
        if (
            !formData.type ||
            !formData.category ||
            !formData.title ||
            !formData.condition ||
            !formData.description ||
            !formData.price ||
            !formData.location ||
            formData.pictures.length === 0
        ) {
            toast.error("Please fill in all required fields.");
            setIsUploading(false);
            return;
        } else if (formData.pictures.length < 4) {
            toast.error("Please add all 4 pictures.");
            setIsUploading(false);
            return;
        }
        try {
            const valuesRef = collection(db, "products");
            const docData = {
                type: formData.type,
                category: formData.category,
                title: formData.title,
                condition: formData.condition,
                description: formData.description,
                price: parseFloat(formData.price),
                location: {
                    city: formData.location.city,
                    country: (formData.location.country = "Algeria"),
                    latitude: (formData.location.latitude = ""),
                    longitude: (formData.location.longitude = ""),
                },
                pictures: [],
            };
            //
            for (const imageFile of formData.pictures) {
                const imgsRef = ref(imgDB, `Images/${imageFile.name}`);
                const snapshot = await uploadBytes(imgsRef, imageFile);
                const downloadURL = await getDownloadURL(snapshot.ref);
                docData.pictures.push(downloadURL); // Push the download URL to the array
            }
            await addDoc(valuesRef, docData);
            toast.success(
                "Congratulations! Your listing has been successfully added!"
            );
            //reset form inputs after submitting
            setFormData({
                type: "",
                category: "",
                title: "",
                condition: "",
                description: "",
                price: "",
                location: { city: "" },
                pictures: [],
            });
            // Clear the image files
            setImageFiles([]);
        } catch (error) {
            toast.error("Error adding data: ", error);
            console.error("Error adding data: ", error);
        } finally {
            setIsUploading(false); // Reset loading state after request completion
        }
    };

    useEffect(() => {
        // Scroll to top when isLoading state changes
        if (isUploading) {
            window.scrollTo(0, 0);
        }
    }, [isUploading]);

    return (
        <Layout>
            <div className='bg-[#F1F6FA] mt-20 p-6'>
                <div className='mb-8 '>
                    <h1 className='text-[#7874F2] text-[38px] mb-2 font-semibold text-center lg:text-left lg:ml-8 '>
                        List an Item/Service
                    </h1>
                    <hr className=' w-full border-1 border-opacity-50   border-[#7495AE] ' />
                </div>
                {isUploading ? (
                    <Uploading text='Adding your listing...' />
                ) : (
                    <div className='flex flex-col  gap-6  sm:flex-col md:flex-col  md:justify-center lg:flex-row lg:justify-between'>
                        <div className='grid grid-cols-3 grid-rows-3 md:flex lg:grid lg:grid-rows-3  w-full sm:w-full md:w-full lg:w-1/2  justify-between  gap-4'>
                            <div
                                className={classNames(
                                    "col-span-3 row-span-3 md:grid-rows-2 items-center justify-center overflow-hidden w-full h-72 lg:h-80 md:w-[60%] lg:w-full bg-[#EEF2F4]  border rounded-md border-[#979797]",
                                    { "empty-image-container": !imageFiles[0] }
                                )}
                            >
                                {imageFiles[0] ? (
                                    <Image
                                        className='object-cover flex-reverse  w-full h-full'
                                        src={imageFiles[0]}
                                        width={1200}
                                        height={1000}
                                        alt='product image'
                                    />
                                ) : (
                                    <div className='empty-image-container'></div>
                                )}
                            </div>
                            <div className=' col-span-3 row-span-1    md:w-[40%] lg:w-full rounded-md gap-4'>
                                <div className='flex justify-between  gap-4 md:grid md:grid-cols-2 md:grid-rows-2 sm:gap-6  lg:flex   '>
                                    <div
                                        className={classNames(
                                            "col-span-2 row-span-1 md:row-span-2 w-full  bg-[#EEF2F4] h-20 sm:h-24 md:h-40 lg:h-28  border rounded-md border-[#979797] overflow-hidden",
                                            {
                                                "empty-image-container bg-[#EEF2F4] lg:bg-[#D1DBE3]":
                                                    !imageFiles[1],
                                            }
                                        )}
                                    >
                                        {imageFiles[1] ? (
                                            <Image
                                                className='object-cover  w-full h-full rounded-md '
                                                src={imageFiles[1]}
                                                width={1200}
                                                height={1000}
                                                alt='product image'
                                            />
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
                                            <Image
                                                className='object-cover flex-reverse w-full h-full '
                                                src={imageFiles[2]}
                                                width={1200}
                                                height={1000}
                                                alt='product image'
                                            />
                                        ) : (
                                            <div className='empty-image-container'></div>
                                        )}
                                    </div>
                                    <div
                                        className={classNames(
                                            "col-span-1 row-span-1 bg-[#EEF2F4] h-20 sm:h-24 lg:h-28  w-full border  rounded-md border-[#979797] overflow-hidden lg:w-full",
                                            {
                                                "empty-image-container bg-[#EEF2F4] lg:bg-[#D1DBE3]":
                                                    !imageFiles[3],
                                            }
                                        )}
                                    >
                                        {imageFiles[3] ? (
                                            <Image
                                                className='object-cover flex-reverse w-full h-full '
                                                src={imageFiles[3]}
                                                width={1200}
                                                height={1000}
                                                alt='product image'
                                            />
                                        ) : (
                                            <div className='empty-image-container'></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className=' grid w-full sm:w-full md:w-full  lg:w-1/2  grid-cols-4 grid-rows-6 gap-4 '
                        >
                            <div className='col-span-4 row-span-1 md:col-span-2 '>
                                <select
                                    className='select select-bordered  input-style'
                                    name='type'
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option value='' disabled selected>
                                        Type(Product, service)
                                    </option>
                                    <option value='sale'>Sale</option>
                                    <option value='borrow'>Borrow</option>
                                </select>
                            </div>
                            <div className='col-span-4 row-span-1 md:col-span-2 '>
                                <select
                                    className='select select-bordered  input-style  '
                                    name='category'
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option value='' disabled selected>
                                        Category
                                    </option>
                                    <option value='electronics'>
                                        Electronics
                                    </option>
                                    <option value='books'>Books</option>
                                    <option value='gaming'>Gaming</option>
                                    <option value='clothes'>Clothes</option>
                                    <option value='shoes'>Shoes</option>
                                    <option value='food'>Food</option>
                                    <option value='transportation'>
                                        Transportation
                                    </option>
                                    <option value='furniture'>Furniture</option>
                                </select>
                            </div>
                            <div className='col-span-4 row-span-1 md:col-span-2 '>
                                <input
                                    className=' input input-bordered input-style '
                                    type='text'
                                    name='title'
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder='Product name'
                                />
                            </div>
                            <div className='col-span-4 row-span-1 md:col-span-2 '>
                                <select
                                    className='select select-bordered  input-style'
                                    name='condition'
                                    value={formData.condition}
                                    onChange={handleChange}
                                >
                                    <option value='' disabled selected>
                                        Condition
                                    </option>
                                    <option value='new'>New</option>
                                    <option value='like new'>Like New</option>
                                    <option value='good'>Good</option>
                                    <option value='poor'>Poor</option>
                                </select>
                            </div>
                            <div className='col-span-4 row-span-2 '>
                                <textarea
                                    type='text'
                                    className='input input-bordered py-2  h-full  input-style placeholder-center placeholder:text-center'
                                    placeholder='Description'
                                    name='description'
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type='text'
                                name='location.city'
                                value={formData.location.city}
                                onChange={handleChange}
                                placeholder='Location(city)'
                                className='input input-bordered col-span-2 row-span-1 input-style '
                            />
                            <input
                                type='number'
                                name='price'
                                value={formData.price}
                                placeholder='Price'
                                className='input input-bordered col-span-2 row-span-1 input-style '
                                onChange={handleChange}
                            />
                            <div className='col-span-4 row-span-1 flex gap-4 mt-4'>
                                <label className=' w-full h-full items-center  justify-center relative inline-flex bg-[#585785] text-white py-2  rounded-lg cursor-pointer shimmer'>
                                    <span>Upload Images</span>
                                    <input
                                        type='file'
                                        onChange={handleChange}
                                        className='hidden'
                                    />
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
                )}

                <ToastContainer />
            </div>
        </Layout>
    );
};

export default Listings;

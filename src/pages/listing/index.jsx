import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import ListingImages from "@/components/ListingImages/ListingImages";
import Uploading from "@/components/Uploading/Uploading";

import { useAuth } from "@/context/AuthContext";
import { db, imgDB } from "@/util/firebase";

const Listing = () => {
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
    const { t } = useTranslation("listing");

    const route = useRouter();
    const { currentUser } = useAuth();
    const currentUserUid = currentUser?.uid;

    const handleChange = (e) => {
        const { value, name, type } = e.target;
        if (type === "file") {
            const file = e.target.files[0];
            if (file) {
                const files = e.target.files;
                // Check if the total number of images is greater than 4
                if (formData.pictures.length + files.length > 4) {
                    toast.warning(
                        t("You can only upload a maximum of 4 images."),
                        {
                            rtl: route.locale === "ar",
                        }
                    );
                    return;
                }
                // reject if the image is selected twice
                const selectedFileNames = formData.pictures.map(
                    (imgFile) => imgFile.name
                );
                for (const file of files) {
                    const fileName = file.name;

                    // Check if the file with the same name has already been selected
                    if (selectedFileNames.includes(fileName)) {
                        toast.warning(
                            t(
                                "Picture with the same name has already been selected."
                            ),
                            { rtl: route.locale === "ar" }
                        );
                        e.target.value = "";
                        return;
                    }
                }

                const reader = new FileReader();
                reader.onload = (event) => {
                    const fileUrl = event.target.result;
                    setImageFiles((prevImageFiles) => [
                        ...prevImageFiles,
                        fileUrl,
                    ]);
                };
                reader.readAsDataURL(file);
                const updatedImgUrl = [...formData.pictures];
                for (let i = 0; i < files.length; i++) {
                    updatedImgUrl.push(files[i]);
                }
                if (updatedImgUrl.length > 4) {
                    toast.warning(
                        t("You can only upload a maximum of 4 images."),
                        {
                            rtl: route.locale === "ar",
                        }
                    );
                    return;
                }
                setFormData({ ...formData, pictures: updatedImgUrl });
            }
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

    const handleImageDelete = (index) => {
        // Remove the image file from the array
        const updatedImageFiles = [...imageFiles];
        updatedImageFiles.splice(index, 1);
        setImageFiles(updatedImageFiles);

        // Remove the image URL from the form data
        const updatedImgUrl = [...formData.pictures];
        updatedImgUrl.splice(index, 1);
        setFormData({ ...formData, pictures: updatedImgUrl });
        // Reset the file input value
        const fileInput = document.getElementById("imageInput");
        if (fileInput) {
            fileInput.value = "";
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
            toast.error(t("Please fill in all required fields."), {
                rtl: route.locale === "ar",
            });
            setIsUploading(false);
            return;
        } else if (formData.pictures.length < 4) {
            toast.error(t("Please add all 4 pictures."), {
                rtl: route.locale === "ar",
            });
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
                currentUserUid: currentUserUid,
                createdAt: serverTimestamp(),
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
                t(
                    "Congratulations! Your listing has been successfully added!",
                    {
                        rtl: route.locale === "ar",
                    }
                )
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
            toast.error(
                t("Error adding your listing "),
                {
                    rtl: route.locale === "ar",
                },
                error
            );
        } finally {
            setIsUploading(false); // Reset loading state after request completion
        }
    };

    console.log(formData);

    useEffect(() => {
        // Scroll to top when isLoading state changes
        if (isUploading) {
            window.scrollTo(0, 0);
        }
    }, [isUploading]);
    useEffect(() => {
        // Redirect to login page if the user is not authenticated
        if (!currentUser) {
            route.push("/signin"); // Replace '/login' with the path to your login page
        }
    }, [currentUser, route]);

    return (
        <div className='bg-[#F1F6FA] pb-6 pt-3  px-6 text-center lg:text-left'>
            <div className='mb-8 '>
                <h1
                    className={`text-[#7874F2] text-[38px] mb-2 font-semibold ${
                        route.locale === "ar"
                            ? "lg:text-right"
                            : "text-center lg:text-left"
                    } lg:ml-8`}
                    dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
                >
                    {t("List an Item/Service")}
                </h1>
                <hr className=' w-full border-1 border-opacity-50   border-[#7495AE] ' />
            </div>
            {isUploading ? (
                <Uploading text={t("Adding your listing...")} />
            ) : (
                <div className='flex flex-col  gap-6  sm:flex-col md:flex-col  md:justify-center lg:flex-row lg:justify-between'>
                    <ListingImages
                        imageFiles={imageFiles}
                        handleImageDelete={handleImageDelete}
                    />
                    <form
                        onSubmit={handleSubmit}
                        className=' grid w-full sm:w-full md:w-full  lg:w-1/2  grid-cols-4 grid-rows-6 gap-4 '
                    >
                        <div className='col-span-4 row-span-1 md:col-span-2 '>
                            <select
                                className={`select select-bordered capitalize   input-style ${
                                    route.locale === "ar" ? "text-center" : ""
                                }`}
                                dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
                                name='type'
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value='' disabled selected>
                                    {t("Type (Product, Service)")}
                                </option>
                                <option value='sale'>{t("sale")}</option>
                                <option value='borrow'>{t("borrow")}</option>
                            </select>
                        </div>
                        <div className='col-span-4 row-span-1 md:col-span-2 '>
                            <select
                                className={`select select-bordered capitalize  input-style ${
                                    route.locale === "ar" ? "text-center" : ""
                                }`}
                                name='category'
                                value={formData.category}
                                onChange={handleChange}
                                dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
                            >
                                <option value='' disabled selected>
                                    {t("Category")}
                                </option>
                                <option value='electronics'>
                                    {t("electronics")}
                                </option>
                                <option value='books'>{t("books")}</option>
                                <option value='gaming'>{t("gaming")}</option>
                                <option value='clothes'>{t("clothes")}</option>
                                <option value='shoes'>{t("shoes")}</option>
                                <option value='food'>{t("food")}</option>
                                <option value='transportation'>
                                    {t("transportation")}
                                </option>
                                <option value='furniture'>
                                    {t("furniture")}
                                </option>
                                <option value='other'>{t("other")}</option>
                            </select>
                        </div>
                        <div className='col-span-4 row-span-1 md:col-span-2 '>
                            <input
                                className={`input ${
                                    route.locale === "ar" ? "text-center" : ""
                                } input-bordered input-style placeholder`}
                                type='text'
                                name='title'
                                value={formData.title}
                                onChange={handleChange}
                                placeholder={t("Product name")}
                            />
                        </div>
                        <div className='col-span-4 row-span-1 md:col-span-2 '>
                            <select
                                className={`select select-bordered capitalize input-style ${
                                    route.locale === "ar" ? "text-center" : ""
                                }`}
                                name='condition'
                                value={formData.condition}
                                onChange={handleChange}
                                dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
                            >
                                <option value='' disabled selected>
                                    {t("Condition")}
                                </option>
                                <option value='new'>{t("new")}</option>
                                <option value='like new'>
                                    {t("like new")}
                                </option>
                                <option value='good'>{t("good")}</option>
                                <option value='poor'>{t("poor")}</option>
                            </select>
                        </div>
                        <div className='col-span-4 row-span-2 '>
                            <textarea
                                type='text'
                                className='input input-bordered py-2  h-full  input-style placeholder-center placeholder '
                                placeholder={t("Description")}
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
                            placeholder={t("Location (city)")}
                            className={`input input-bordered ${
                                route.locale === "fr" ? "truncate" : ""
                            }  col-span-2 row-span-1 input-style ${
                                route.locale === "ar" ? "text-center" : ""
                            }`}
                        />
                        <input
                            type='number'
                            name='price'
                            value={formData.price}
                            placeholder={t("Price")}
                            className={`input input-bordered col-span-2 row-span-1 input-style ${
                                route.locale === "ar" ? "text-center" : ""
                            }`}
                            onChange={handleChange}
                        />
                        <div className='col-span-4 row-span-1 flex gap-4 mt-4'>
                            <label
                                className={`w-full h-full items-center  justify-center relative inline-flex bg-[#585785] text-white py-2 ${
                                    route.locale === "fr" ? "text-[14px]" : ""
                                } rounded-lg cursor-pointer shimmer`}
                            >
                                <span>{t("Upload Images")}</span>
                                <input
                                    type='file'
                                    onChange={handleChange}
                                    id='imageInput'
                                    className='hidden'
                                />
                            </label>

                            <button
                                type='submit'
                                className='w-full h-full text-white bg-[#FF8A57] rounded-lg '
                            >
                                {t("List")}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Listing;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "listing"])),
            // Will be passed to the page component as props
        },
    };
}

const ListingForm = ({ handleChange, handleSubmit, route, t, formData }) => {
    return (
        <form
            onSubmit={handleSubmit}
            className=' grid w-full sm:w-full md:w-full  lg:w-1/2  grid-cols-4 grid-rows-6 gap-4 '
        >
            <div className='col-span-4 row-span-1 md:col-span-2 '>
                <select
                    className={`select select-bordered capitalize   input-style ${
                        route?.locale === "ar" ? "text-center" : ""
                    }`}
                    dir={`${route?.locale === "ar" ? "rtl" : "ltr"}`}
                    name='type'
                    value={formData?.type}
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
                        route?.locale === "ar" ? "text-center" : ""
                    }`}
                    name='category'
                    value={formData?.category}
                    onChange={handleChange}
                    dir={`${route?.locale === "ar" ? "rtl" : "ltr"}`}
                >
                    <option value='' disabled selected>
                        {t("Category")}
                    </option>
                    <option value='electronics'>{t("electronics")}</option>
                    <option value='books'>{t("books")}</option>
                    <option value='gaming'>{t("gaming")}</option>
                    <option value='clothes'>{t("clothes")}</option>
                    <option value='shoes'>{t("shoes")}</option>
                    <option value='food'>{t("food")}</option>
                    <option value='transportation'>
                        {t("transportation")}
                    </option>
                    <option value='furniture'>{t("furniture")}</option>
                    <option value='other'>{t("other")}</option>
                </select>
            </div>
            <div className='col-span-4 row-span-1 md:col-span-2 '>
                <input
                    className={`input ${
                        route?.locale === "ar" ? "text-center" : ""
                    } input-bordered input-style placeholder`}
                    type='text'
                    name='title'
                    value={formData?.title}
                    onChange={handleChange}
                    placeholder={t("Product name")}
                />
            </div>
            <div className='col-span-4 row-span-1 md:col-span-2 '>
                <select
                    className={`select select-bordered capitalize input-style ${
                        route?.locale === "ar" ? "text-center" : ""
                    }`}
                    name='condition'
                    value={formData?.condition}
                    onChange={handleChange}
                    dir={`${route?.locale === "ar" ? "rtl" : "ltr"}`}
                >
                    <option value='' disabled selected>
                        {t("Condition")}
                    </option>
                    <option value='new'>{t("new")}</option>
                    <option value='like new'>{t("like new")}</option>
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
                    value={formData?.description}
                    onChange={handleChange}
                />
            </div>
            <input
                type='text'
                name='location.city'
                value={formData?.location.city}
                onChange={handleChange}
                placeholder={t("Location (city)")}
                className={`input input-bordered ${
                    route?.locale === "fr" ? "truncate" : ""
                }  col-span-2 row-span-1 input-style ${
                    route?.locale === "ar" ? "text-center" : ""
                }`}
            />
            <input
                type='number'
                name='price'
                value={formData?.price}
                placeholder={t("Price")}
                className={`input input-bordered col-span-2 row-span-1 input-style ${
                    route?.locale === "ar" ? "text-center" : ""
                }`}
                onChange={handleChange}
            />
            <div className='col-span-4 row-span-1 flex gap-4 mt-4'>
                <label
                    className={`w-full h-full items-center  justify-center relative inline-flex bg-[#585785] text-white py-2 ${
                        route?.locale === "fr" ? "text-[14px]" : ""
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
    );
};

export default ListingForm;

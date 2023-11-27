import React, { useState } from "react";

const Checkout = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        city: "",
        zipCode: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for handling form submission, e.g., processing order
        console.log("Form submitted:", formData);
        // Reset form after submission
        setFormData({
            fullName: "",
            address: "",
            city: "",
            zipCode: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
        });
    };

    return (
        <div className='p-20 flex flex-col'>
            <form className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'>
                <h2 className='text-2xl font-semibold mb-4'>Checkout</h2>

                {/* Delivery Information */}
                <div className='mb-4'>
                    <label
                        htmlFor='fullName'
                        className='block text-gray-700 font-medium'
                    >
                        Full Name
                    </label>
                    <input
                        type='text'
                        id='fullName'
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleChange}
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='address'
                        className='block text-gray-700 font-medium'
                    >
                        Address
                    </label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        value={formData.address}
                        onChange={handleChange}
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                    />
                </div>

                <div className='grid grid-cols-2 gap-4 mb-4'>
                    <div>
                        <label
                            htmlFor='city'
                            className='block text-gray-700 font-medium'
                        >
                            City
                        </label>
                        <input
                            type='text'
                            id='city'
                            name='city'
                            value={formData.city}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border rounded-md'
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='zipCode'
                            className='block text-gray-700 font-medium'
                        >
                            ZIP Code
                        </label>
                        <input
                            type='text'
                            id='zipCode'
                            name='zipCode'
                            value={formData.zipCode}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border rounded-md'
                            required
                        />
                    </div>
                </div>

                {/* Payment Information */}
                <div className='mb-4'>
                    <label
                        htmlFor='cardNumber'
                        className='block text-gray-700 font-medium'
                    >
                        Card Number
                    </label>
                    <input
                        type='text'
                        id='cardNumber'
                        name='cardNumber'
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                    />
                </div>

                <div className='grid grid-cols-2 gap-4 mb-4'>
                    <div>
                        <label
                            htmlFor='expiryDate'
                            className='block text-gray-700 font-medium'
                        >
                            Expiry Date
                        </label>
                        <input
                            type='text'
                            id='expiryDate'
                            name='expiryDate'
                            value={formData.expiryDate}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border rounded-md'
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='cvv'
                            className='block text-gray-700 font-medium'
                        >
                            CVV
                        </label>
                        <input
                            type='text'
                            id='cvv'
                            name='cvv'
                            value={formData.cvv}
                            onChange={handleChange}
                            className='mt-1 p-2 w-full border rounded-md'
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type='submit'
                    className='bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300'
                    onClick={handleSubmit}
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;

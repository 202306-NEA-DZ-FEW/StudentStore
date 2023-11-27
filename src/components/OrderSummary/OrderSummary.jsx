import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

import Button from "../Buttons/Button";
import Link from "next/link";

const OrderSummary = ({ cartItems, subtotal, borrowPrices, t }) => {
    const route = useRouter();
    const handleCheckout = () => {
        toast.success(t("Proceed to Checkout."), {
            autoClose: 2000,
            rtl: route.locale === "ar",
        });
    };
    return (
        <div
            className='mt-6 h-full rounded-lg border bg-white mb-2 sm:mb-0 p-6 ml-0 shadow-md md:mt-0 md:w-[40%]'
            style={{ marginLeft: 0 }}
        >
            <h2 className='text-2xl text-black font-bold text-center'>
                {t("Order Summary")}
            </h2>
            <hr className='my-4' />
            <div className='flex justify-between'>
                <p className='text-lg text-black font-semibold'>{t("Name")}</p>

                <p className='text-lg text-black font-semibold pr-3'>
                    {t("Price")}
                </p>
            </div>
            <hr className='my-2' />
            <div>
                {cartItems?.map((cartItem) => (
                    <div
                        key={cartItem.id}
                        className='mb-2 flex justify-between '
                    >
                        <p className='text-gray-700 font-medium w-2/3  truncate'>
                            {cartItem.title}
                        </p>
                        <p className='text-gray-700 font-semibold'>
                            {cartItem.type === "borrow"
                                ? borrowPrices[cartItem.productId]?.toFixed(2) +
                                  "$"
                                : cartItem.price.toFixed(2) + "$"}
                        </p>
                    </div>
                ))}
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
                <p className='text-xl text-black font-bold'>{t("Total")}</p>
                <div className=''>
                    <p className='mb-1 text-lg text-black font-bold'>
                        {subtotal?.toFixed(2)}$
                    </p>
                </div>
            </div>

            <Link href='/checkout'>
                <Button
                    onClick={handleCheckout}
                    className='mt-6 w-full  rounded-md  font-medium text-blue-50 '
                >
                    {t("Check out")}
                </Button>
            </Link>
        </div>
    );
};

export default OrderSummary;

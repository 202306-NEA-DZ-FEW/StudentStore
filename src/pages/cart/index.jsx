import debounce from "lodash.debounce";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useContext, useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import CartItem from "@/components/CartItem/CartItem";
import OrderSummary from "@/components/OrderSummary/OrderSummary";

import { useAuth } from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";

const Cart = () => {
    const { t } = useTranslation("cart");
    const route = useRouter();

    const { currentUser } = useAuth();
    if (!currentUser) {
        route.push("/signin");
    }
    const { cartItems, updateCartItem } = useContext(CartContext);
    const [borrowPrices, setBorrowPrices] = useState({});
    const calculateBorrowPrice = (item) => {
        const defaultDays = 15;
        const defaultPrice = item.price || 0; // Handle undefined price
        const pricePerDay = defaultPrice / defaultDays;
        return (item.borrowDays || 15) * pricePerDay; // Handle undefined borrowDays
    };
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            if (item.type === "borrow" && item.price && item.borrowDays) {
                return total + (item.price * item.borrowDays) / 15;
            } else if (item.price) {
                return total + item.price;
            } else {
                return total;
            }
        }, 0);
    };
    const updateBorrowPrice = (productId, newBorrowPrice) => {
        setBorrowPrices((prevPrices) => ({
            ...prevPrices,
            [productId]: newBorrowPrice,
        }));
    };
    const updateBorrowPriceDebounced = debounce(updateBorrowPrice, 100);
    useEffect(() => {
        const initialBorrowPrices = cartItems.reduce((prices, cartItem) => {
            return {
                ...prices,
                [cartItem.productId]:
                    cartItem.type === "borrow"
                        ? calculateBorrowPrice(cartItem)
                        : cartItem.price || 0,
            };
        }, {});
        setBorrowPrices(initialBorrowPrices);
    }, [cartItems]);
    return (
        <div
            className={`bg-gray-100 pb-4 relative ${
                cartItems.length > 0
                    ? "pt-20"
                    : "flex justify-center items-center pt-0 h-screen"
            }`}
            dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
        >
            {cartItems.length > 0 ? (
                <div className='mx-auto   max-w-5xl  px-6 mb-10 md:space-x-6 xl:px-0'>
                    <h1 className='text-gray-500 text-center ml-4   text-2xl font-bold  '>
                        {t("Your Cart")} ({cartItems.length})
                    </h1>
                </div>
            ) : null}
            {cartItems.length > 0 ? (
                <div className='mx-auto relative gap-8 max-w-5xl justify-center pb-8 px-6 md:flex md:space-x-6 xl:px-0'>
                    <div className='rounded-lg md:w-2/3'>
                        {cartItems.map((cartItem) => (
                            <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                                updateCart={updateCartItem}
                                updateBorrowPrice={updateBorrowPriceDebounced}
                                t={t}
                                route={route}
                            />
                        ))}
                    </div>
                    <OrderSummary
                        cartItems={cartItems}
                        subtotal={calculateSubtotal()}
                        borrowPrices={borrowPrices}
                        t={t}
                    />
                    <Link
                        href='/products'
                        className={`gap-1 font-semibold  absolute hover:underline flex items-end ${
                            route.locale === "ar"
                                ? "bottom-0 left-6 sm:left-2 justify-end"
                                : ""
                        } bottom-0 right-6  sm:right-2   text-indigo-400 text-xl hover:text-indigo-600 `}
                        style={{ marginLeft: 0 }}
                        dir={`${route.locale === "ar" ? "rtl" : "ltr"}`}
                    >
                        {t("Continue Shopping")}

                        {route.locale === "ar" ? (
                            <FaLongArrowAltLeft size={22} />
                        ) : (
                            <FaLongArrowAltRight size={22} />
                        )}
                    </Link>
                </div>
            ) : (
                <div className='flex flex-col items-center mb-6 justify-center'>
                    <Image
                        src='/images/emty cart.svg'
                        width={700}
                        height={600}
                        alt='emty cart'
                    />
                    <p className='text-gray-500 font-semibold text-lg '>
                        {t("Your cart is empty.")}
                    </p>
                    <Link
                        href='/products'
                        className='flex items-end gap-1 text-lg hover:underline font-semibold text-indigo-400 hover:text-indigo-600  text-right'
                    >
                        {t("Continue Shopping")}
                        {route.locale === "ar" ? (
                            <FaLongArrowAltLeft size={22} />
                        ) : (
                            <FaLongArrowAltRight size={22} />
                        )}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "cart"])),
            // Will be passed to the page component as props
        },
    };
}

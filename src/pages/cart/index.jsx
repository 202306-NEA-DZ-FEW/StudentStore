import React, { useContext } from "react";

import CartItem from "@/components/CartItem/CartItem";
import OrderSummary from "@/components/OrderSummary/OrderSummary";

import { CartContext } from "@/context/CartContext";

const Cart = () => {
    const { cartItems, updateCartItem } = useContext(CartContext);
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
    // Shipping cost
    const shippingCost = 4.99;

    // Calculate total (subtotal + shipping)
    const calculateTotal = () => {
        return calculateSubtotal() + shippingCost;
    };

    return (
        // <div>
        //     <div className='flex flex-col gap-4 sm:flex-row sm:justify-between  p-8 sm:p-6 '>
        //         <div className='sm:w-[65%] bg-white py-20 flex flex-col'>
        //             {cartItems.map((cartItem) => (
        //                 <CartItem
        //                     key={cartItem.id}
        //                     cartItem={cartItem}
        //                     updateCart={updateCartItem}
        //                 />
        //             ))}
        //         </div>
        //         <div className='sm:w-[30%] flex flex-col p-2 bg-white text-cyan-500 font-semibold '>
        //             <h1 className='text-center p-4 '>SUMMARY</h1>
        //             <hr />
        //             <div className='flex justify-between p-4'>
        //                 <p>SUBTOTAL</p>
        //                 <p>{calculateSubtotal().toFixed(2)}</p>
        //             </div>
        //             <hr />
        //             <div className='flex justify-between p-4'>
        //                 <p>TOTAL</p>
        //                 <p>{calculateTotal().toFixed(2)}</p>
        //             </div>
        //             <hr />
        //             <div className='p-4 text-center'>
        //                 <Button className=' mx-auto px-0 w-[80%] italic  '>
        //                     CHECKOUT
        //                 </Button>
        //             </div>
        //             <hr />
        //             <span className='italic text-center p-4'>Or</span>
        //             <hr />
        //             <div className=' p-4 md:py-4 text-center '>
        //                 <Button className='italic mx-auto px-0 w-[85%] '>
        //                     Checkout with <span>Paypal</span>
        //                 </Button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div class=' bg-gray-100 pb-4 pt-20'>
            <h1 class='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
            <div class='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
                <div class='rounded-lg md:w-2/3'>
                    {cartItems.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            updateCart={updateCartItem}
                        />
                    ))}
                </div>
                <OrderSummary />
            </div>
        </div>
    );
};

export default Cart;

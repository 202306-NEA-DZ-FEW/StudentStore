import Link from "next/link";
import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from "@/context/CartContext";

const ShoppingCartIcon = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div>
            <Link className='relative' href='/cart'>
                <FiShoppingCart className="className=' text-[28px] text-[#8685a7] hover:text-orange-500 " />
                {cartCount > 0 && (
                    <span className='absolute text-[11px] flex justify-center items-center  font-bold text-white bottom-[20px] w-5 h-5 rounded-full bg-red-500 left-5'>
                        {cartCount}
                    </span>
                )}
            </Link>
        </div>
    );
};

export default ShoppingCartIcon;

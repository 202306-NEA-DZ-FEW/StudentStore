import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const ShoppingCartIcon = ({ count }) => {
    return (
        <div>
            <Link className='relative' href='/cart'>
                <FiShoppingCart className="className=' text-[28px] text-[#8685a7] hover:text-orange-500 " />
                {count && (
                    <span className='absolute text-[11px] flex justify-center items-center  font-bold text-white bottom-[20px] w-5 h-5 rounded-full bg-red-500 left-5'>
                        {count}
                    </span>
                )}
            </Link>
        </div>
    );
};

export default ShoppingCartIcon;

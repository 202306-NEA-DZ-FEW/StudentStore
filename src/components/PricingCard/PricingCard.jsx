import { toast } from "react-toastify";

import Button from "../Buttons/Button";

const PricingCard = ({ title, amount, t }) => {
    const handleClick = () => {
        toast.success(t("thank you for donating ") + amount + "$");
    };
    return (
        <div className='p-8 md:p-4 text-black text-center border rounded-lg shadow-md bg-white'>
            <h2 className='text-xl   font-semibold'>{title}</h2>
            <p className=' text-6xl my-2 font-semibold flex justify-center'>
                <span className='text-3xl self-center'>$</span>
                {amount}
            </p>
            <Button onClick={handleClick}>{t("donate")}</Button>
        </div>
    );
};

export default PricingCard;

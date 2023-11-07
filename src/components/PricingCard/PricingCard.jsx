import { toast } from "react-toastify";

import Button from "../Buttons/Button";

const PricingCard = ({ title, amount, t, isRTL }) => {
    const handleClick = () => {
        const message = t("thank you for donating ");
        const englishFormattedAmount = amount + "$";
        const arabicFormattedAmount = "$" + amount;
        toast.success(
            isRTL
                ? `${arabicFormattedAmount} ${message}`
                : `${message} ${englishFormattedAmount}`,
            {
                style: {
                    textAlign: isRTL ? "right" : "left", // Right-align for RTL, left-align for LTR
                },
            }
        );
    };
    return (
        <div className='p-8 md:p-4 text-black text-center border rounded-lg shadow-md bg-white'>
            <h2 className='text-xl   font-semibold'>{title}</h2>
            <p className=' text-6xl my-2 font-semibold flex justify-center'>
                <span className='text-3xl self-center'>$</span>
                {amount}
            </p>
            <Button
                className='w-36 md:w-44 mx-auto px-0 '
                onClick={handleClick}
            >
                {t("donate")}
            </Button>
        </div>
    );
};

export default PricingCard;

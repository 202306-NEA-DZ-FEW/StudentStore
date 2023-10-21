import React from "react";
import { twMerge } from "tailwind-merge";
function Button({ children, className, onClick }) {
    return (
        <button
            className={twMerge(
                "bg-[#FF8A57] border-2 border-[#FF8A57] py-2 px-14 rounded-lg text-white shadow-sm text-md hover:bg-white hover:text-[#FF8A57] hover:border-2 hover:border-[#FF8A57] hover:duration-300 font-bold",
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;

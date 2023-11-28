import { GridLoader } from "react-spinners";

export default function Loader() {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen flex items-center bg-[#e5e7eb] justify-center z-[999] '>
            <GridLoader size={22} color='#FF8A57' />
        </div>
    );
}

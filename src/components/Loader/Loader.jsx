import { GridLoader } from "react-spinners";

export default function Loader() {
    return (
        <div className='min-h-[80vh] flex items-center justify-center'>
            <GridLoader size={22} color={"#FF8A57"} />
        </div>
    );
}

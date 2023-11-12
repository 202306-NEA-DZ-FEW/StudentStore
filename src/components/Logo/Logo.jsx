import Image from "next/image";

const Logo = () => {
    return (
        <div className=' flex '>
            <Image src='Logo.svg' width={48} height={48} alt='Logo' />
            <div className='w-full h-full'>
                <span className="text-indigo-500 text-sm font-bold ,  fontFamily: 'Clash Display Variable', wordWrap: 'break-word'">
                    Student
                    <br />
                </span>
                <span className="text-black  text-sm  font-bold ,  fontFamily: 'Clash Display Variable', wordWrap: 'break-word'">
                    Store
                </span>
            </div>
        </div>
    );
};
export default Logo;

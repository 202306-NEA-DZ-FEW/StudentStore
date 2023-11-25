import Image from "next/image";
export default function OurMission({ t }) {
    return (
        <div>
            <div className='flex flex-col md:flex-row-reverse'>
                <div className='w-full md:w-1/2 md:flex md:items-center'>
                    <Image
                        src='/images/aboutus.svg'
                        alt='Our Mission Photo'
                        loading='lazy'
                        width={1200}
                        height={1200}
                        layout='responsive'
                    />
                </div>
                <div className='flex flex-col justify-center items-center gap-3 w-full md:w-1/2 p-4'>
                    <h1 className='text-4xl text-[#32314D] font-bold'>
                        {t("Our Mission")}
                    </h1>
                    <p className='text-center text-[#32314D] md:text-md lg:text-lg leading-8 md:leading-5 '>
                        {t("Student Store")}
                    </p>
                </div>
            </div>
        </div>
    );
}

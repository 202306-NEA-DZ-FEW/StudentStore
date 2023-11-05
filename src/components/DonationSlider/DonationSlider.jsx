import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

const DonationSlider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='carousel w-[90%] md:w-[70%] mx-auto relative'>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <div
                        id='slide1'
                        className='carousel-item relative h-[70%] w-full'
                    >
                        <Image
                            src='/images/donation1.jpg'
                            className='mx-auto '
                            layout='responsive'
                            width={700}
                            height={700}
                            alt='donation image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        id='slide2'
                        className='carousel-item relative h-[70%] w-full'
                    >
                        <Image
                            src='/images/donation2.jpg'
                            className='mx-auto'
                            width={700}
                            height={700}
                            layout='responsive'
                            alt='donation image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        id='slide3'
                        className='carousel-item relative h-[70%] w-full'
                    >
                        <Image
                            src='/images/donation3.jpg'
                            className='mx-auto'
                            width={700}
                            height={700}
                            layout='responsive'
                            alt='donation image'
                        />
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default DonationSlider;

import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

const HeroSection = () => {
    // use Swiper props to activate Autoplay
    SwiperCore.use([Autoplay]);
    return (
        <div>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                }}
                //infinite loop
                loop={true}
            >
                <SwiperSlide>
                    <div id='slide1' className='h-[100vh] w-full'>
                        <Image
                            src='/images/Hero1.svg'
                            layout='fill'
                            alt='donation image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='slide2' className='h-[100vh] w-full'>
                        <Image
                            src='/images/Hero2.svg'
                            layout='fill'
                            alt='donation image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='slide3' className='h-[100vh] w-full'>
                        <Image
                            src='/images/Hero3.svg'
                            layout='fill'
                            alt='donation image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='slide4' className='h-[100vh] w-full'>
                        <Image
                            src='/images/Hero5.png'
                            layout='fill'
                            alt='donation image'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSection;

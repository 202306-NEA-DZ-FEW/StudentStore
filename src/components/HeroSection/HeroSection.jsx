import Image from "next/image";
import SwiperCore, { A11y, Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const HeroSection = () => {
    // use Swiper props to activate Autoplay
    SwiperCore.use([Autoplay, Pagination, A11y]);
    return (
        <div>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                }}
                //infinite loop
                loop={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div id='slide1' className='h-[100vh] w-full'>
                        <Image
                            src='/images/Hero6.svg'
                            layout='fill'
                            alt='HeroSection image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='slide3' className='h-[100vh] w-full'>
                        <Image
                            src='/images/Hero3.svg'
                            layout='fill'
                            alt='HeroSection image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='slide4' className='h-[100vh] w-full'>
                        <Image
                            src='/images/Hero4.svg'
                            layout='fill'
                            alt='HeroSection image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-1/2 h-[100vh]'>
                        <Image
                            src='/images/Hero2.svg'
                            fill={true}
                            alt='HeroSection image'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSection;

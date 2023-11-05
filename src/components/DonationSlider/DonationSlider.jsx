import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

const DonationSlider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='carousel w-full md:w-[60%] mx-auto relative'>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                }}
                loop={true}
            >
                <SwiperSlide>slide 1</SwiperSlide>
                <SwiperSlide>slide 2</SwiperSlide>
                <SwiperSlide>slide 3</SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default DonationSlider;

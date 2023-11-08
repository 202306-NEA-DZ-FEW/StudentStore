import Image from "next/image";
import { useEffect, useState } from "react";
import SwiperCore, {
    A11y,
    Autoplay,
    EffectFade,
    Pagination,
} from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const HeroSection = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 767);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // use Swiper props to activate Autoplay
    SwiperCore.use([Autoplay, Pagination, A11y, EffectFade]);
    return (
        <div className='pt-[10vh]'>
            <Swiper
                fadeEffect={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 3000,
                }}
                //infinite loop
                loop={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className='h-[90vh] w-full'>
                        <Image
                            src='/images/Hero1.svg'
                            layout='fill'
                            alt='HeroSection image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={`w-full h-[90vh]  ${
                            isSmallScreen ? "sm:hidden" : "sm:block"
                        }`}
                    >
                        <Image
                            src={
                                isSmallScreen
                                    ? "/images/globe-mobile.svg"
                                    : "/images/globe-desktop.svg"
                            }
                            fill={true}
                            alt='HeroSection image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={`w-full h-[90vh]  ${
                            isSmallScreen ? "sm:hidden" : "sm:block"
                        }`}
                    >
                        <Image
                            src={
                                isSmallScreen
                                    ? "/images/cart-mobile.svg"
                                    : "/images/cart-desktop.svg"
                            }
                            fill={true}
                            alt='HeroSection image'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={`w-full h-[90vh]  ${
                            isSmallScreen ? "sm:hidden" : "sm:block"
                        }`}
                    >
                        <Image
                            src={
                                isSmallScreen
                                    ? "/images/checkout-mobile.svg"
                                    : "/images/checkout-desktop.svg"
                            }
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

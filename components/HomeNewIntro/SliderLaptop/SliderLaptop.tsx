'use client'
import styles from "./sliderLaptop.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import {MySlide} from "@/components/HomeNewIntro/SliderLaptop/MySlide";
import {Rectangle} from "@/components/UI/Rectangle";
import {Tooltip} from "@/components/UI/Tooltip";
import {SliderLaptopContent} from "@/constants";

export const SliderLaptop = () => {
    SliderLaptopContent.dataFirstSlide.dataPicture.imageStyles = styles.image;
    SliderLaptopContent.dataSecondSlide.dataPicture.imageStyles = styles.image;
    SliderLaptopContent.dataThirdSlide.dataPicture.imageStyles = styles.image_teeth;

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                navigation={{
                    nextEl: '.laptop-button-next',
                    prevEl: '.laptop-button-prev',
                }}
            >
                <SwiperSlide>
                    <MySlide dataPicture={SliderLaptopContent.dataFirstSlide.dataPicture}>
                        <div className={styles.first_wrapper_first_slide}>
                            <Rectangle styleText={styles.first_rectangle_first_slide}/>
                            <Tooltip content={SliderLaptopContent.dataFirstSlide.tooltipFirst}
                                     stylesText={styles.first_tooltip_first_slide}/>
                        </div>
                        <div className={styles.second_wrapper_first_slide}>
                            <Rectangle styleText={styles.second_rectangle_first_slide}/>
                            <Tooltip content={SliderLaptopContent.dataFirstSlide.tooltipSecond}
                                     stylesText={styles.second_tooltip_first_slide}/>
                        </div>
                    </MySlide>
                </SwiperSlide>
                <SwiperSlide>
                    <MySlide dataPicture={SliderLaptopContent.dataSecondSlide.dataPicture}>
                        <div className={styles.first_wrapper_second_slide}>
                            <Rectangle styleText={styles.first_rectangle_second_slide}/>
                            <Tooltip content={SliderLaptopContent.dataSecondSlide.tooltipFirst}
                                     stylesText={styles.first_tooltip_second_slide}/>
                        </div>
                        <div className={styles.second_wrapper_second_slide}>
                            <Rectangle styleText={styles.second_rectangle_second_slide}/>
                            <Tooltip content={SliderLaptopContent.dataSecondSlide.tooltipSecond}
                                     stylesText={styles.second_tooltip_second_slide}/>
                        </div>
                        <div className={styles.third_wrapper_second_slide}>
                            <Rectangle styleText={styles.third_rectangle_second_slide}/>
                            <Tooltip content={SliderLaptopContent.dataSecondSlide.tooltipThird}
                                     stylesText={styles.third_tooltip_second_slide}/>
                        </div>
                    </MySlide>
                </SwiperSlide>
                <SwiperSlide>
                    <MySlide dataPicture={SliderLaptopContent.dataThirdSlide.dataPicture}>
                        <div className={styles.first_wrapper_third_slide}>
                            <Rectangle styleText={styles.first_rectangle_third_slide}/>
                            <Tooltip content={SliderLaptopContent.dataThirdSlide.tooltipFirst}
                                     stylesText={styles.first_tooltip_third_slide}/>
                        </div>
                        <div className={styles.second_wrapper_third_slide}>
                            <Rectangle styleText={styles.second_rectangle_third_slide}/>
                            <Tooltip content={SliderLaptopContent.dataThirdSlide.tooltipSecond}
                                     stylesText={styles.second_tooltip_third_slide}/>
                        </div>
                        <div className={styles.third_wrapper_third_slide}>
                            <Rectangle styleText={styles.third_rectangle_third_slide}/>
                            <Tooltip content={SliderLaptopContent.dataThirdSlide.tooltipThird}
                                     stylesText={styles.third_tooltip_third_slide}/>
                        </div>
                        <div className={styles.fourth_wrapper_third_slide}>
                            <Rectangle styleText={styles.fourth_rectangle_third_slide}/>
                            <Tooltip content={SliderLaptopContent.dataThirdSlide.tooltipFourth}
                                     stylesText={styles.fourth_tooltip_third_slide}/>
                        </div>
                    </MySlide>
                </SwiperSlide>
            </Swiper>
            <div className={styles.block_button}>
                <div className={`laptop-button-prev ${styles.button_prev}`}>
                    <i className={`icon-left ${styles.icon}`}></i>
                </div>
                <div className={`laptop-button-next ${styles.button_next}`}>
                    <i className={`icon-right ${styles.icon}`}></i>
                </div>
            </div>
        </>
    )
}
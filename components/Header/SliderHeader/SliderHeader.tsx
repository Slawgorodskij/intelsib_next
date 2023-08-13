'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import styles from './sliderHeader.module.css'
import {HeaderSliderContent} from "@/constants";

export const SliderHeader = () => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                className={styles.slider}
                modules={[Navigation, Pagination]}
                slidesPerView={3}
                spaceBetween={25}
                loop={true}
                navigation={{
                    nextEl: '.header-button-next',
                    prevEl: '.header-button-prev',
                }}
            >
                {HeaderSliderContent.map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className={styles.slide_elem}>
                            <span className={styles.title}>ТОП-3</span>
                            <span className={styles.text}>SEO</span>
                            <span className={styles.text}>Рейтинг Рунета</span>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

            <div className={`header-button-prev ${styles.button_prev}`}>
                <i className={`icon-left ${styles.icon}`}></i>
            </div>
            <div className={`header-button-next ${styles.button_next}`}>
                <i className={`icon-right ${styles.icon}`}></i>
            </div>

        </div>
    )
}
'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

import styles from './mySwiper.module.css'
import {CaseCardOfSlider} from "@/components/UI/CaseCardOfSlider";
import {FeedbackCard} from "@/components/UI/FeedbackCard";
import {IMySwiper} from "@/components/UI/MySwiper/interface";
import {useState} from "react";

export const MySwiper = ({contentCase, contentFeedback, control, type}: IMySwiper) => {
    // TODO скрытие текста знать бы как правильно
    const [handleClick, setHandleClick] = useState(false)
    const toggleHandleClick = () => {
        setHandleClick(prevState => !prevState);
    }
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: `.${control.classNameNext}`,
                    prevEl: `.${control.classNamePrev}`,
                }}
                pagination={{
                    el: control.elemPagination,
                    type: 'fraction',
                    renderFraction: function (currentClass, totalClass) {
                        return `<span class=${currentClass}></span> из <span class=${totalClass}></span>`
                    }
                }}
            >
                {(type === 'feedback') && contentFeedback?.map((item, index) =>
                    <SwiperSlide key={index}>
                        <FeedbackCard content={item} handleClick={handleClick}/>
                    </SwiperSlide>
                )}

                {type === 'case' && contentCase?.map((item, index) =>
                    <SwiperSlide key={index}>
                        <CaseCardOfSlider content={item} handleClick={handleClick}/>
                    </SwiperSlide>
                )}

            </Swiper>
            <div className={styles.block_button}>
                <div className={control.classNamePrev} onClick={toggleHandleClick}>
                    <i className={`icon-left ${styles.icon}`}></i>
                </div>
                <div className={`${control.classNameElemPagination} ${styles.numeric}`}></div>
                <div className={control.classNameNext} onClick={toggleHandleClick}>
                    <i className={`icon-right ${styles.icon}`}></i>
                </div>
            </div>
        </>
    )
}
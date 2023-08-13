'use client'
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {Picture} from "@/components/UI/Picture";
import styles from './about.module.css'
import {MobileAccordion} from "@/components/UI/MobileAccordion";
import {AboutDescriptionContent, AboutPersonContent} from "@/constants";
import {Navigation, Pagination} from "swiper/modules";


export const About = () => {
    return (
        <>
            <h2 className={styles.title}>Гарантированное продвижение сайтов в топ-10</h2>
            <p className={styles.presentation}>Intelsib — рекламное агентство результативного интернет-маркетинга.</p>
            <div>
                <MobileAccordion content={AboutDescriptionContent} flag={'about'}/>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    }
                }}
            >
                {AboutPersonContent.map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className={styles.slide_elem}>
                            <Picture address={item.image} textAlt={item.alt} valueHeight={200} valueWight={200}
                                     expansion={item.expansion} imageStyles={styles.image}/>
                            <h4 className={styles.name}>{item.name}</h4>
                            <p className={styles.rank}>{item.rank}</p>
                            <p className={styles.work_period}>{item.workPeriod}</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            <div className={styles.block_button}>
                <div className={`swiper-button-prev ${styles.button_prev}`}>
                    <i className={`icon-left ${styles.icon}`}></i>
                </div>
                <div className={`swiper-button-next ${styles.button_next}`}>
                    <i className={`icon-right ${styles.icon}`}></i>
                </div>
            </div>
        </>
    )
}
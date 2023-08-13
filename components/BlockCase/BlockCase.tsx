'use client'
import styles from './blockCase.module.css'

import {CaseContent, SelectServiceContent, SelectThemeContent} from "@/constants";
import {MySwiper} from "@/components/UI/MySwiper";
import {useEffect, useState} from "react";
import {getPlural} from "@/utils/utils";
import {MySelect} from "@/components/UI/MySelect";

export const BlockCase = () => {
    const [service, setService] = useState('')
    const [theme, setTheme] = useState('')
    const words = ['кейс', 'кейса', 'кейсов'];
    const newQuantity = 47;

    const [quantity, setQuantity] = useState(45)
    const [word, setWord] = useState('кейс')

    useEffect(() => {
        let newWord = getPlural(newQuantity, words)
        setQuantity(newQuantity);
        setWord(newWord)
    }, [])
    const handleServiceSelect = (value: string) => {
        setService(value);
    };
    const handleThemeSelect = (value: string) => {
        setTheme(value);
    };
    const selectedService = SelectServiceContent.find((item) => item.value === service);
    const selectedTheme = SelectThemeContent.find((item) => item.value === theme);

    return (
        <>
            <h2 className={`${styles.title} title`}>Кейсы</h2>
            <p className={`${styles.slogan} text`}>Без лишних слов показываем результаты, которых мы добились для наших
                клиентов. Хотите
                так же? </p>

            <form action="#" className={styles.form}>
                <div className={styles.select}>
                    <div className={`${styles.select_block} ${styles.select_top}`}>
                        <p className={styles.label}>Услуга</p>
                        <MySelect
                            mode="rows"
                            selected={selectedService || null}
                            options={SelectServiceContent}
                            placeholder="Все (43)"
                            onChange={handleServiceSelect}
                        />
                    </div>
                    <div className={styles.select_block}>
                        <p className={styles.label}>Тематика</p>
                        <MySelect
                            mode="rows"
                            selected={selectedTheme || null}
                            options={SelectThemeContent}
                            placeholder="Все (43)"
                            onChange={handleThemeSelect}
                        />
                    </div>
                </div>

                <div className={`${styles.throw} text`}>
                    <p>{quantity} {word}</p>
                    <button className={`${styles.button} text`}>
                        <i className={`${styles.icon} icon-cross`}></i>
                        Сбросить все
                    </button>
                </div>

            </form>

            <MySwiper contentCase={CaseContent}
                      control={{
                          elemPagination: '.case_numeric',
                          classNameElemPagination: 'case_numeric',
                          classNameNext: styles.case_next,
                          classNamePrev: styles.case_prev,
                      }}
                      type={'case'}/>
        </>
    )
}
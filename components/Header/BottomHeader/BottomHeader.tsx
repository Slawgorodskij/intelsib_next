"use client";
import styles from './bottomHeader.module.css';
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/UI/Button";
import {SliderHeader} from "@/components/Header/SliderHeader";
import {ButtonBurger} from "@/components/UI/ButtonBurger";
import {useState} from "react";
import {MobileMenu} from "@/components/Header/MobileMenu";

export const BottomHeader = () => {
    const [showMenu, setShowMenu] = useState(false
    )
    const handleClick = () => {
        setShowMenu(prevState => !prevState)
    }
    return (
        <>
            <div className={`${styles.bottom} show-arrows`}>
                <Link href={'/'} className={styles.logo}>
                    <Image
                        src={'/svg/logo.svg'}
                        alt={'логотип компании Intelsib'}
                        height={41}
                        width={148}
                    />
                </Link>
                <div className={styles.slider}>
                    <SliderHeader/>
                </div>

                <div className={styles.feedback}>
                    <Link href={'tel:78007753251'} className={`mb_5 ${styles.link}`}>
                        <i className={`icon-phone ${styles.icon}`}></i>
                        <span className={styles.text_top}>8 800 775-32-51</span>
                    </Link>
                    <Link href={'mailto:zakaz@intelsib.ru'}>
                        <i className={`icon-mail ${styles.icon}`}></i>
                        <span className={styles.text_bottom}>zakaz@intelsib.ru</span>
                    </Link>
                </div>

                <div className={styles.button_wrapper}>
                    <Button title={'Рассчитать стоимость услуг'} textStyles={styles.button}/>
                    <ButtonBurger active={showMenu} handleClick={handleClick}/>
                </div>
            </div>
            <MobileMenu active={showMenu}/>
        </>
    )
}
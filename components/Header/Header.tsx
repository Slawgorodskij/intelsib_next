'use client'
import {TopHeader} from "@/components/Header/TopHeader";
import {BottomHeader} from "@/components/Header/BottomHeader";
import {useEffect, useState} from "react";
import styles from './header.module.css'


export const Header = () => {
    const checkedScrollY = 10;
    const [visibleBorder, setVisibleBorder] = useState(false);

    const controlDirection = () => {
        if (window.scrollY > checkedScrollY) {
            setVisibleBorder(true);
        } else {
            setVisibleBorder(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    }, []);
    
    return (
        <header className={visibleBorder ? `${styles.show_border} ${styles.header}` : styles.header}>
            <div className='container'>
                <TopHeader/>
                <BottomHeader/>
            </div>
        </header>
    )
}
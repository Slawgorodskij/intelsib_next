'use client'
import styles from './button.module.css'
import {IButton} from "@/components/UI/Button/interface";

export const Button = ({title, textStyles}: IButton) => {
    return (
        <button
            className={`${styles.button} ${textStyles}`}
        > {title} </button>
    )
}
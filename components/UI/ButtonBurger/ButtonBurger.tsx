import styles from './buttonBurger.module.css';
import {IButtonBurger} from "@/components/UI/ButtonBurger/interface";

export const ButtonBurger = ({active, handleClick}: IButtonBurger) => {
    return (
        <button
            className={active ? `${styles.burger} ${styles.burger_active}` : styles.burger}
            onClick={handleClick}
        >
            <span className={styles.burger_line}></span>
        </button>
    )
}
import styles from './myInput.module.css'
import {IInputProps} from "@/components/UI/MyInput/interface";

export const MyInput = ({type, label, name, idInputBlock, required}: IInputProps) => {
    return (
        <>
            <div className={styles.block}>
                <input className={styles.input} type={type} name={name} id={idInputBlock} placeholder={label}/>
                <label className={styles.label} htmlFor={idInputBlock}>{label}
                    {required && <span className={styles.label_color}>*</span>}
                </label>
                <i className={`icon-eye ${styles.icon}`}></i>
            </div>
            <span className="form__helper"></span>
        </>
    )
}
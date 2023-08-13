import styles from "./rectangle.module.css";
interface IRectangle {
    styleText?: string,
}
export const Rectangle = ({styleText}:IRectangle) => {
    return (
        <svg width="35" height="35" viewBox="0 0 55 56" fill="none" className={`${styles.rectangle} ${styleText}`}>
            <rect x="1.1" y="1.12148" width="52.8" height="52.8" rx="26.4" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
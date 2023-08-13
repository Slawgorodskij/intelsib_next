import styles from './ellipseBlock.module.css'

export const EllipseBlock = () => {
    return (
        <div className={styles.block}>
            <div className={`${styles.ellipse} ${styles.ellipse_color}`}></div>
            <div className={styles.ellipse}></div>
            <div className={styles.ellipse}></div>
        </div>
    )
}
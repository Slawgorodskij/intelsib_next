import styles from './bottomFooter.module.css'

export const BottomFooter = () => {
    return (
        <div className={styles.bottom}>
            <span>&copy; 2005–2023 ООО «ИнтелСиб» — агентство интернет-маркетинга и рекламы</span>
            <span>Политика конфиденциальности</span>
            <span>Карта сайта</span>
            <div>
                <i className={`icon-vk_icon ${styles.icon} ${styles.icon_mr15}`}></i>
                <i className={`icon-youtube-icon ${styles.icon}`}></i>
            </div>
        </div>
    )
}
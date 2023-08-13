import styles from './infoBlock.module.css'
import {IInfoBlockProp} from "@/components/HomeNewIntro/InfoBlock/interface";

export const InfoBlock = ({content}: IInfoBlockProp) => {
    return (
        <div className={content.addClass ? `${styles.block} ${styles.block_border}` : styles.block}>
            <div className={styles.block_title}>
                <p className={`title ${styles.title}`}>{content.title}</p>
                <p className={styles.subtitle}>{content.subtitle}</p>
            </div>
            <p className={`text ${styles.text}`}>{content.text}</p>
        </div>
    )
}
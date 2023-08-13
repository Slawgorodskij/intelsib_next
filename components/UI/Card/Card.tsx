import styles from './card.module.css'
import {ICard} from "@/components/UI/Card/interface";
import {Button} from "@/components/UI/Button";

export const Card = ({content, titleButton}: ICard) => {
    return (
        <div className={content.active ? `${styles.card} ${styles.active}` : styles.card}>
            <div>
                <h2 className={content.active ? `${styles.title} ${styles.title_active}` : styles.title}>{content.title}</h2>
                {content.text.map(paragraph => <p className={styles.text}>{paragraph}</p>)}
            </div>
            <div>
                <div className={styles.info}>
                    <p><span className={styles.subtitle}>KPI:</span> {content.kpi}</p>
                    <p><span className={styles.subtitle}>Оплата:</span> {content.payment}</p>
                    <p><span className={styles.subtitle}>Результат:</span> {content.result}</p>
                </div>
                <p>от <span className={`title ${styles.mb_18}`}>{content.price}</span> руб. / месяц</p>
                <Button title={titleButton} textStyles={styles.card_button}/>
            </div>
        </div>
    )
}
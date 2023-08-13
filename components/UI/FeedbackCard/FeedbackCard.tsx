import {IFeedbackCard} from "@/components/UI/FeedbackCard/interface";
import styles from './feedbackCard.module.css'
import {Picture} from "@/components/UI/Picture";
import {BlockHiddenText} from "@/components/UI/BlockHiddenText";

export const FeedbackCard = ({content, handleClick}: IFeedbackCard) => {
    return (
        <div className={styles.card}>
            <BlockHiddenText
                content={content.text}
                textStyles={styles.body}
                title={content.title}
                handleClick={handleClick}
            />
            <div className={styles.customer}>
                <Picture
                    address={content.image}
                    textAlt={content.alt}
                    valueHeight={51}
                    valueWight={255}
                    expansion={content.expansion}
                />
                <p className={styles.customer_text}>{content.customer}</p>
            </div>
        </div>
    )
}
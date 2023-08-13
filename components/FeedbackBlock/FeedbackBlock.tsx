import styles from './feedbackBlock.module.css'
import {FeedbackContent} from "@/constants";
import {FeedbackCard} from "@/components/UI/FeedbackCard";

export const FeedbackBlock = () => {
    return (
        <>
            <div className={styles.block}>
                {FeedbackContent.map((item, index) =>
                    <FeedbackCard content={item}/>
                )}
            </div>
        </>
    )
}
import {FeedbackContent} from "@/constants";
import styles from './feedbackSwiper.module.css'
import {MySwiper} from "@/components/UI/MySwiper";

export const FeedbackSwiper = () => {
    return (
        <>
            <h2 className={`${styles.title} title`}>ОТЗЫВЫ</h2>
            <MySwiper contentFeedback={FeedbackContent}
                      control={{
                          elemPagination: '.feedback_numeric',
                          classNameElemPagination: 'feedback_numeric',
                          classNameNext: styles.feedback_next,
                          classNamePrev: styles.feedback_prev,
                      }}
                      type={'feedback'}/>
        </>
    )
}

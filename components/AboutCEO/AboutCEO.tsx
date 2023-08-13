import {Picture} from "@/components/UI/Picture";
import styles from './aboutCEO.module.css'
import {AboutCEOContent} from "@/constants";

export const AboutCEO = () => {
    return (
        <>
            <h2 className={`${styles.title} title`}>{AboutCEOContent.title}</h2>
            <div className={styles.block}>
                <Picture
                    address={'/person/boris'}
                    textAlt={'фотография руководителя'}
                    valueHeight={200}
                    valueWight={200}
                    expansion={'jpg'}
                    imageStyles={styles.image}
                />
                <div className={`${styles.block_text} text`}>
                    <p>{AboutCEOContent.text}</p>
                    <Picture
                        address={'/home/sign'}
                        textAlt={'образец подписи'}
                        valueHeight={50}
                        valueWight={146}
                        expansion={'png'}
                        imageStyles={styles.sign}/>
                </div>
            </div>
        </>
    )
}
import styles from './caseCardOfSlider.module.css'
import {ICaseCard} from "@/components/UI/CaseCardOfSlider/interface";
import {Picture} from "@/components/UI/Picture";
import {BlockHiddenText} from "@/components/UI/BlockHiddenText";
import Image from "next/image";

export const CaseCardOfSlider = ({content, handleClick}: ICaseCard) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>

                <h3 className={`subtitle ${styles.title}`}>{content.title}</h3>

                <div className={styles.body_title}>
                    <div className={styles.block_customer}>
                        <h4 className={styles.subtitle}>Клиент</h4>
                        <p className={styles.text}>{content.customer}</p>
                    </div>
                    <div>
                        <h4 className={styles.subtitle}>Услуга</h4>
                        <p className={styles.text}>{content.service}</p>
                    </div>
                    <div>
                        <h4 className={styles.subtitle}>Бюджет:</h4>
                        <p className={styles.text}>{content.budget}</p>
                    </div>
                    <div>
                        <h4 className={styles.subtitle}>Тип сайта</h4>
                        <p className={styles.text}>{content.typeSite}</p>
                    </div>
                </div>

                <div className={styles.body_description}>
                    <div className={styles.block_image}>
                        <Picture address={content.image} textAlt={content.alt} valueHeight={255} valueWight={320}
                                 expansion={content.expansion} imageStyles={styles.image}/>
                        <div className={`${styles.hover} flex-center`}>
                            <div className={`${styles.image_wrapper} flex-center`}>
                                <Image src={'/svg/loupe.svg'} alt={'изображение увеличительного стекла'} width={16}
                                       height={16}/>
                            </div>
                        </div>
                    </div>
                    <BlockHiddenText content={content.text} handleClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}
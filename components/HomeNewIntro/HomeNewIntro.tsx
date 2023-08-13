import styles from './homeNewIntro.module.css'
import {Button} from "@/components/UI/Button";
import {IntroInfoContent, IntroList} from "@/constants";
import {InfoBlock} from "@/components/HomeNewIntro/InfoBlock";
import {SliderLaptop} from "@/components/HomeNewIntro/SliderLaptop";

export const HomeNewIntro = () => {
    return (
        <>
            <h1 className={styles.title}>Продвижение и развитие сайта с финансовыми гарантиями по вашим целям</h1>
            <div className={styles.presentation}>
                <div className={styles.item_small}>
                    <ul className={styles.list}>
                        {IntroList.map((link, index) =>
                            <li key={index} className={styles.list_item}>{link}</li>
                        )}
                    </ul>
                    <Button title={'Получить предложение'} textStyles={styles.button}/>
                </div>
                <div className={styles.item_big}>
                    <div className={styles.wrapper}>
                        <div className={styles.slider}>
                            <SliderLaptop/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.intro_info}>
                {IntroInfoContent.map((item, index) => <InfoBlock key={index} content={item}/>)}
            </div>
        </>
    )
}
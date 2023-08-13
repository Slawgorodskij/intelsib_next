import styles from './topFooter.module.css';
import Link from "next/link";
import {helveticaBold, helveticaLight} from "@/app/styles/fonts";
import {EllipseBlock} from "@/components/UI/EllipseBlock";
import {Picture} from "@/components/UI/Picture";
import {FooterNavLinks} from "@/constants";
import {MobileAccordion} from "@/components/UI/MobileAccordion";

export const TopFooter = () => {

    return (
        <div className={styles.top}>
            <div className={styles.block_contact}>
                <Link href={'mailto:kp.zakaz@intelsib.ru'} className={styles.link}>
                    <span className={`${helveticaBold.className} subtitle`}>kp.zakaz@intelsib.ru</span>
                </Link>
                <Link href={'tel:78007753251'} className={styles.link}>
                    <span className={`${helveticaBold.className} subtitle`}>8 800 775-32-51</span>
                    <p className={`${helveticaLight.className} text`}>Бесплатный звонок по России</p>
                </Link>
                <Link href={'tel:74952660621'} className={styles.link}>
                    <span className={`${helveticaBold.className} subtitle`}>+7 495 266-06-21</span>
                </Link>
                <div className={styles.block_address}>
                    <p className={`${helveticaLight.className} text`}> Адрес: Москва, Варшавское шоссе, д. 1, стр. 6, БЦ
                        «W-Plaza», офис B203 (2) </p>
                    <EllipseBlock/>
                </div>
                <div className={styles.presentation}>
                    <span className={`${helveticaLight.className} text`}>Участник Сколково</span>
                    <div>
                        <Picture address={'/footer/scolcovo'} textAlt={'логотип Сколково'} valueHeight={40}
                                 valueWight={40} textStyles={styles.image_mr} expansion={'jpg'}/>

                        <Picture address={'/footer/scolcovo_it'} textAlt={'логотип Сколково IT'} valueHeight={40}
                                 valueWight={72} expansion={'jpg'}/>
                    </div>
                    <span className={styles.tooltip}>"Сотрудниками digital-агентства Intelsib разработан программный комплекс, который управляет ставками в системах Direct.Yandex, Ads.Google и максимизирует ROI. Для 109 рекламных кампаний, получен рост ROI от 11% до 35% по сравнению с ручным управлением."</span>
                </div>
            </div>
            <div className={styles.list}>
                <MobileAccordion content={FooterNavLinks} flag={'footer'}/>
            </div>

        </div>
    )
}
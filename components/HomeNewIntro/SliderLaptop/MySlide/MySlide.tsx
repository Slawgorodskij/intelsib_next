import styles from "./mySlide.module.css";
import {Picture} from "@/components/UI/Picture";
import {IPicture} from "@/components/UI/Picture/interface";

interface IMySlide {
    dataPicture: IPicture,
    children: React.ReactNode,
}

export const MySlide = ({ dataPicture, children,}: IMySlide) => {
    const {
        address,
        textAlt,
        valueHeight,
        valueWight,
        imageStyles,
        expansion,
    } = dataPicture;
    return (
        <div className={styles.slide}>
            <Picture address={address} textAlt={textAlt} valueHeight={valueHeight}
                     valueWight={valueWight} expansion={expansion}
                     imageStyles={imageStyles}/>
            <div className={styles.hover}>
                {children}
            </div>
        </div>
    )
}
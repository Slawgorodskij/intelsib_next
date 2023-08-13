import styles from './reviews.module.css';
import Link from "next/link";
import {FeedbackBlock} from "@/components/FeedbackBlock/FeedbackBlock";


export default function reviews() {
    return (
        <>
            <div className={`${styles.intro} container`}>
                {/*TODO сделать компонент*/}
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={'/'}>Главная</Link>
                    </li>
                    <li className="breadcrumb-item_last">Отзывы</li>
                </ul>
                <article className={styles.block_title}>
                    <h1 className={styles.title}>Отзывы</h1>
                </article>
            </div>
            <article className='bg-grey'>
                <div className='container padding'>
                    <FeedbackBlock/>

                </div>
            </article>
        </>
    )
}

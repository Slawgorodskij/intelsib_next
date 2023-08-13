import styles from './applicationBlock.module.css';
import {Picture} from "@/components/UI/Picture";
import {ApplicationListContent} from "@/constants";
import {MyForm} from "@/components/UI/MyForm";

export const ApplicationBlock = () => {
    return (
        <div className={`container ${styles.wrapper}`}>
            <h2 className={`title ${styles.title}`}>Оставьте заявку На&nbsp;продвижение и&nbsp;получите нашу книгу
                в&nbsp;подарок</h2>
            <div className={`text ${styles.block_description}`}>
                <p>Наш менеджер свяжется с вами в течение часа, уточнит детали и
                    <span className={styles.text_weight}> ваши цели</span>.
                    Затем технические специалисты подберут запросы и
                    <span className={styles.text_weight}> разработают стратегию продвижения </span>
                    вашего сайта.
                </p>
                <p>
                    <span className={styles.text_weight}>В подарок </span>
                    вы получите бумажную версию нашей книги про интернет-маркетинг и SEO-продвижение сайтов.
                </p>
            </div>
            <div className={styles.book}>
                <Picture address={'/book/book'} textAlt={'изображение книги'} valueHeight={175} valueWight={120}
                         expansion={'jpg'} textStyles={styles.image}/>
                <div className={styles.book_description}>
                    <Picture address={'/book/emblem'} textAlt={'изображение герба'} valueHeight={68} valueWight={61}
                             expansion={'jpg'} textStyles={styles.emblem}/>
                    <p className={styles.description_text}>
                        Книга одобрена Министерством образования и науки РФ и является официальным
                        пособием в 24 вузах страны, в том числе в нашем родном НГУ.
                    </p>
                </div>
                <ul className={styles.list}>
                    {ApplicationListContent.map((item, index) => <li key={index}
                                                                     className={`text ${styles.list_item}`}>{item}</li>)}
                </ul>
            </div>
            <div className={styles.block_form}>
                <MyForm/>
            </div>
        </div>
    )
};
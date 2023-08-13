import {helveticaBold, helveticaLight} from "@/app/styles/fonts";
import styles from "./accordionItem.module.css";
import Link from "next/link";
import {IAccordionItem, ILink} from "@/components/UI/MobileAccordion/interface";

export const AccordionItem = ({flag, title, content, index, selected, toggle, textStyle}: IAccordionItem) => {
    return (
        <div className={styles.border}>
            <div className={`${helveticaBold.className} ${styles.control}`} onClick={() => toggle(index)}>
                <h4 className={selected === index ? `subtitle ${styles.subtitle_active}` : 'subtitle'}>
                    {title}
                </h4>
                <i className={selected === index ? `icon-down ${styles.icon} ${styles.icon_active}` : `icon-down ${styles.icon}`}></i>
            </div>
            <div className={selected === index ? `${styles.content} ${styles.show}` : styles.content}>
                {
                    flag === 'about' && <div>
                        {content.map((paragraph: string[], indexParagraph: number) => <p
                            key={indexParagraph}>{paragraph}</p>)}
                    </div>
                }

                {
                    flag === 'footer' &&
                    <ul className={styles.nested_list}>
                        {content.map((nestedItem: ILink) =>
                            <li key={nestedItem.key}
                                className={`${helveticaLight.className} ${styles.nested_link}`}
                            >
                                <Link
                                    href={nestedItem.href}
                                    className={styles.nested_text}
                                >{nestedItem.text}</Link>
                            </li>)}
                    </ul>
                }
            </div>
        </div>
    )
}
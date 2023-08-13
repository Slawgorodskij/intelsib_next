import {helveticaBold, helveticaLight} from "@/app/styles/fonts";
import styles from "./accordionItem.module.css";
import Link from "next/link";
import {IAccordionItem, ILink} from "@/components/UI/MobileAccordion/interface";

export const AccordionItem = ({index, selected, content, toggle, textStyle}: IAccordionItem) => {
    return (
        <div className={styles.border}>
            <div className={`${helveticaBold.className} ${styles.control}`} onClick={() => toggle(index)}>
                <h4 className={selected === index ? `subtitle ${styles.subtitle_active}` : 'subtitle'}>{content.title}</h4>
                <i className={selected === index ? `icon-down ${styles.icon} ${styles.icon_active}` : `icon-down ${styles.icon}`}></i>
            </div>
            <div className={selected === index ? `${styles.content} ${styles.show}` : styles.content}>
                {
                    content.text && <div>
                        {content.text.map((paragraph: string[], indexParagraph: number) => <p
                            key={indexParagraph}>{paragraph}</p>)}
                    </div>
                }

                {
                    content.arrayLinks &&
                    <ul className={styles.nested_list}>
                        {content.arrayLinks.map((nestedItem: ILink)  =>
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
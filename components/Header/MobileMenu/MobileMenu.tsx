"use client";
import styles from './mobileMenu.module.css'
import {IMobileMenu} from "@/components/Header/MobileMenu/interface";
import {Button} from "@/components/UI/Button";
import {HeaderNavLinks} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {AccordionItem} from "@/components/UI/MobileAccordion/AccordionItem";

export const MobileMenu = ({active}: IMobileMenu) => {
    const pathname = usePathname();
    const [selected, setSelected] = useState<number | null>(0);
    const toggle = (index: number) => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index)
    }
    return (
        <div className={active ? `${styles.menu} ${styles.menu_active}` : styles.menu}>
            <Button title={'Рассчитать стоимость услуг'} textStyles={styles.button}/>
            <ul className={styles.list}>
                {HeaderNavLinks.map((item, index) =>
                    !item.nestedNavigation
                        ? <li key={item.key}>
                            <Link href={item.href}
                                  className={pathname === item.href
                                      ? `${styles.link} ${styles.link_active}`
                                      : styles.link}>
                                {item.text}
                            </Link>
                        </li>
                        : <li className={` ${styles.link}`} key={item.key} onClick={() => toggle(index)}>
                            <Link href={item.href}
                                  className={pathname === item.href
                                      ? `${styles.control} ${styles.link_active}`
                                      : `${styles.control} `}>
                                {item.text}
                                <i className={selected === index ? `icon-down ${styles.icon} ${styles.icon_active}` : `icon-down ${styles.icon}`}></i>
                            </Link>
                            <ul className={selected === index ? `${styles.content} ${styles.show}` : styles.content}>
                                {item.nestedNavigation.map(itemLink =>
                                    <li key={itemLink.key}>
                                        <Link href={itemLink.href}
                                              className={pathname === itemLink.href
                                                  ? `${styles.sub_link} ${styles.sub_link_active}`
                                                  : styles.sub_link}
                                        >{itemLink.text}</Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                )}
            </ul>
        </div>
    )
}
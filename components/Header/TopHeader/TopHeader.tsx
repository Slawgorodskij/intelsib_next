"use client";
import styles from './topHeader.module.css';
import {HeaderNavLinks} from '@/constants'
import Link from "next/link";
import {usePathname} from "next/navigation";

export const TopHeader = () => {
    const pathname = usePathname();
    return (
        <div className={styles.top}>
            <ul className={`flex-between ${styles.list}`}>
                {HeaderNavLinks.map(item =>
                    !item.nestedNavigation
                        ? <li key={item.key}>
                            <Link href={item.href}
                                  className={pathname === item.href
                                      ? `${styles.link} ${styles.link_active}`
                                      : styles.link}>
                                {item.text}
                            </Link>
                        </li>
                        : <li className={styles.tab} key={item.key}>
                            <Link href={item.href}
                                  className={pathname === item.href
                                      ? `${styles.link} ${styles.link_pd} ${styles.link_active}`
                                      : `${styles.link} ${styles.link_pd}`}>
                                {item.text}
                                <i className={`icon-up ${styles.navigate_icon}`}></i>
                            </Link>
                            <ul className={styles.sub_list}>
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
            <div className={styles.info}>
                <Link href={'#'} className={styles.book}>
                    <i className={`icon-book ${styles.icon}`}></i>
                    <span className={styles.text}>Наша книга</span>
                </Link>
            </div>
        </div>
    )
}
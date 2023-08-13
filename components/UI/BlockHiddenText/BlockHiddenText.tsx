'use client'
import styles from './blockHiddenText.module.css'
import {useEffect, useRef, useState} from "react";
import useSwipe from "@/utils/useSwipe";

interface IBlockHiddenText {
    content: string[],
    textStyles?: string,
    title?: string,
    handleClick?: boolean,
}

export const BlockHiddenText = ({content, textStyles, title, handleClick}: IBlockHiddenText) => {
    const [scrollHeightElem, setScrollHeightElem] = useState(0);
    const [clientHeightElem, setClientHeightElem] = useState(0);
    const [showText, setShowText] = useState(false)
    const elementRef = useRef<any>(null);
    const swipeHandlers = useSwipe({
        onSwipedLeft: () => hiddenText(),
        onSwipedRight: () => hiddenText()
    });

    useEffect(() => {
        setScrollHeightElem(elementRef.current.scrollHeight);
        setClientHeightElem(elementRef.current.clientHeight);
    }, []);
    const hiddenText = () => {
        setShowText(false)
    }
    const toggle = () => {
        setShowText(prevState => !prevState)
    }

    return (
        <>
            <div className={textStyles}>
                {title &&
                    <h3 className={`${styles.title} subtitle`}>{title}</h3>
                }
                <div
                    {...swipeHandlers}
                    ref={elementRef}
                    className={showText ? `${styles.text} ${styles.show_text} text` : `${styles.text} text`}
                >
                    {content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
            </div>
            {scrollHeightElem > clientHeightElem
                && <button
                    className={styles.button}
                    onClick={toggle}
                >
                    {!showText
                        ? 'Подробнее'
                        : 'Скрыть'
                    }
                </button>
            }
        </>
    )
}
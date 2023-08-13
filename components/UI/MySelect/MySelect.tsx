import {IOption, ISelectProps} from "@/components/UI/MySelect/interface";
import {MouseEventHandler, useEffect, useRef, useState} from "react";
import styles from './mySelect.module.css'
import Image from "next/image";
import {Option} from "@/components/UI/MySelect/Option";

export const MySelect = (props: ISelectProps) => {
    const {
        mode = 'rows',
        options,
        placeholder,
        status = 'default',
        selected,
        onChange,
        onClose,
    } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const {target} = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                isOpen && onClose?.();
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen, onClose]);

    const handleOptionClick = (value: IOption['value']) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className={styles.select_wrapper}
            ref={rootRef}
            data-is-active={isOpen}
            data-mode={mode}
        >
            <div
                className={`${styles.placeholder} text`}
                data-status={status}
                data-selected={!!selected?.value}
                onClick={handlePlaceHolderClick}
                role='button'
                tabIndex={0}
            >
                {selected?.title || placeholder}
                <Image
                    className={isOpen ? styles.icon_active : styles.icon}
                    src={'/svg/down.svg'}
                    alt={'стрелка вниз'}
                    width={15}
                    height={15}/>
            </div>
            <ul className={isOpen ? `${styles.select} ${styles.select_active} text` : `${styles.select} text`}>
                {options.map((option) => (
                    <Option
                        key={option.value}
                        option={option}
                        onClick={handleOptionClick}
                    />
                ))}
            </ul>
        </div>
    )
};
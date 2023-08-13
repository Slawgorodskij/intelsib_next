import {IOptionProps} from "@/components/UI/MySelect/Option/interface";
import {MouseEventHandler} from "react";
import {IOption} from "@/components/UI/MySelect/interface";
import styles from './options.module.css'

export const Option = (props: IOptionProps) => {
    const {
        option: {value, title},
        onClick,
    } = props;

    const handleClick = (clickedValue: IOption['value']): MouseEventHandler<HTMLLIElement> =>
        () => {
            onClick(clickedValue);
        };

    return (
        <li
            className={styles.option}
            value={value}
            onClick={handleClick(value)}
            tabIndex={0}
        >
            {title}
        </li>
    );
};
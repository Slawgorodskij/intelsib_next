import styles from "./tooltip.module.css";

interface ITooltip {
    stylesText?: string,
    content: IContent,
}

interface IContent {
    text: string,
    list?: string[],
}

export const Tooltip = ({stylesText, content}: ITooltip) => {
    return (
        <div className={`${styles.tooltip} ${stylesText}`}>
            <span>{content.text}</span>
            {content.list &&
                <ul className={styles.list}>
                    {content.list.map((listItem, index) =>
                        <li key={index}>{listItem}</li>
                    )}
                </ul>}
        </div>
    )
}
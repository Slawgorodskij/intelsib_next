export interface IFeedbackCard {
    content: IFeedback,
    handleClick?: boolean,
}

export interface IFeedback {
    customer: string,
    image: string,
    expansion: string,
    alt: string,
    title: string,
    text: string[],
}
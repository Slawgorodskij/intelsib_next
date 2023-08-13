export interface ICard {
    content: IContent,
    titleButton: string,
}

export interface IContent {
    title: string,
    text: string[],
    kpi: string,
    payment: string,
    result: string,
    price: string,
    active?: boolean,
}
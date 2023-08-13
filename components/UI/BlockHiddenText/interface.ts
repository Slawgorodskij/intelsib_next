export interface ICaseCard {
    content: ICase,
}

export interface ICase {
    title: string,
    customer: string,
    service: string,
    budget: string,
    typeSite: string,
    image: string,
    expansion: string,
    alt: string,
    text: string[],
}
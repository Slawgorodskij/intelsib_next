export interface IMobileAccordion {
    content: IFooterNav[] | IAboutDescription[],
    textStyle?: string,
    // contentFooter?: IFooterNav[],
    // contentAbout?: IAboutDescription[],
}

export interface IAccordionItem {
    // title: string,
    index: number,
    selected: number | null,
    content: IFooterNav | IAboutDescription,
    toggle: (index: number) => void,
    textStyle?: string,
}

interface IFooterNav {
    title: string,
    arrayLinks: ILink[]
}

export interface ILink {
    href: string,
    key: string,
    text: string,
}

export interface IAboutDescription {
    title: string,
    text: string[],
}
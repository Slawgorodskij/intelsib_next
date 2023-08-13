export interface IMobileAccordion {
    content: any[],
    flag: string,
    textStyle?: string,
    // contentFooter?: IFooterNav[],
    // contentAbout?: IAboutDescription[],
}

export interface IAccordionItem {
    title: string,
    index: number,
    selected: number | null,
    content: any[],
    flag: string,
    // contentFooter?: IFooterNav,
    // contentAbout?: IAboutDescription,
    toggle: (index: number) => void,
    textStyle?: string,
}

interface IFooterNav {
    title: string,
    text: ILink[]
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
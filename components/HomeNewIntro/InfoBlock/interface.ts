import {IntroInfoContent} from "@/constants";

export interface IInfoBlockProp {
    content: IIntroInfoContent
}

export interface IIntroInfoContent {
    title: string,
    subtitle: string,
    text: string,
    addClass: boolean,

}
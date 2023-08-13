import {IOption} from "@/components/UI/MySelect/interface";

export interface IOptionProps {
    option: IOption,
    onClick: (value: IOption['value']) => void,
}
import {ICase} from "@/components/UI/CaseCardOfSlider/interface";
import {IFeedback} from "@/components/UI/FeedbackCard/interface";

interface IControl {
    elemPagination: string,
    classNameElemPagination: string,
    classNameNext: string,
    classNamePrev: string,

}

export interface IMySwiper {
    contentCase?: ICase[],
    contentFeedback?: IFeedback[],
    control: IControl,
    type: string,
}
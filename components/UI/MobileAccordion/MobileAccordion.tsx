'use client'
import {IMobileAccordion} from "@/components/UI/MobileAccordion/interface";
import {useState} from "react";
import {AccordionItem} from "@/components/UI/MobileAccordion/AccordionItem";

export const MobileAccordion = ({content, textStyle}: IMobileAccordion) => {
    const [selected, setSelected] = useState<number | null>(0);
    const toggle = (index: number) => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index)
    }
    return content.map((item, index) =>
        <AccordionItem
            key={index}
            index={index}
            // title={item.name}
            selected={selected}
            // content={item.arrayLinks}
            content={item}
            toggle={toggle}
            textStyle={textStyle}
        />
    )
}


'use client'
import {IMobileAccordion} from "@/components/UI/MobileAccordion/interface";
import {useState} from "react";
import {AccordionItem} from "@/components/UI/MobileAccordion/AccordionItem";

export const MobileAccordion = ({flag, content, textStyle}: IMobileAccordion) => {
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
            title={item.title}
            selected={selected}
            content={item.text}
            flag={flag}
            toggle={toggle}
            textStyle={textStyle}
        />
    )
}


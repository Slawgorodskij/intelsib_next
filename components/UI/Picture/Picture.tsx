import Image from "next/image";
import {IPicture} from "@/components/UI/Picture/interface";

export const Picture = ({address, textAlt, valueHeight, valueWight, textStyles, imageStyles, expansion = 'jpg'}: IPicture) => {
    return (
        <picture className={textStyles}>
            <source srcSet={`${address}.webp`} type="image/webp"/>
            <Image
                className={imageStyles}
                src={`${address}.${expansion}`}
                alt={textAlt}
                height={valueHeight}
                width={valueWight}
            />
        </picture>
    )
}
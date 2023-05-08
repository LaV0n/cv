import React from "react";
import style from "./Title.module.scss"

type TitleDataType = {
    title:string
    description:string
}
export const Title = ({title,description}:TitleDataType) => {
    return (<div className={style.title}>
            <h2 className={style.h3_title}>{title}</h2>
            <div className={style.description}>{description}</div>
        </div>
    )

}
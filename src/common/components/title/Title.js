import React from "react";
import style from "./Title.module.css"

export const Title = (props) => {
    return (
        <h2 className={style.h3_title}>{props.title}</h2>
    )

}
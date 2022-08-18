import React from "react";
import style from "./Title.module.scss"

export const Title = (props) => {
    return (<div className={style.title}>
            <h2 className={style.h3_title}>{props.title}</h2>
            <div className={style.description}>{props.description}</div>
        </div>
    )

}
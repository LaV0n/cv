import React from 'react';
import style from "./Skill.module.scss";


export const Skill = (props) => {
    return (
        <div className={style.skillBlock}>
            <img className={style.icon} src={props.icon} alt={"0"}/>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.description}>
                <span>{props.description}</span>
            </div>
        </div>
    );
}
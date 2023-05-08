import React from 'react';
import style from "./Skill.module.scss";

type SkillDataType ={
    icon:string
    title:string
}
export const Skill = ({icon,title}:SkillDataType) => {
    return (
        <div className={style.skillBlock}>
            <img className={style.icon} src={icon} alt={"0"}/>
            <h3 className={style.title}>{title}</h3>
        </div>
    );
}
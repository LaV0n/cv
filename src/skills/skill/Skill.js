import React from 'react';
import style from "./Skill.module.scss";



export const Skill = (props) => {
    return (
        <div className={style.skillBlock}>
               <div className={style.icon}>+</div>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>
                    <span>{props.description}</span>
                </div>
        </div>
    );
}
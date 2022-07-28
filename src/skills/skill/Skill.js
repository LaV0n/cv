import React from 'react';
import style from "./Skill.module.css";



export const Skill = (props) => {
    return (
        <div className={style.skillBlock}>
               <div className={style.icon}>+</div>
                <h3>{props.title}</h3>
                <div className={style.description}>
                    <span>{props.description}</span>
                </div>
        </div>
    );
}
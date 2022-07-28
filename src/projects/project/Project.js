import React from 'react';
import style from "./Project.module.css";



export const Project = (props) => {
    return (
        <div className={style.projectBlock}>
               <a href="" className={style.icon}>LINK</a>
                <h3>{props.title}</h3>
                <div className={style.description}>
                    <span>{props.description}</span>
                </div>
        </div>
    );
}
import React from 'react';
import style from "./Project.module.css";



export const Project = (props) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.img}>
                <a href="" className={style.linkButton}>LOOK</a>
            </div>
                <h3>{props.title}</h3>
                <div className={style.description}>
                    <span>{props.description}</span>
                </div>
        </div>
    );
}
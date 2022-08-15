import React from 'react';
import style from "./Main.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import photo from '../assets/image/LavonTatry.jpg'


export const Main = () => {
    return (
        <div className={style.main}>
            < div className={`${styleContainer.container} ${style.mainContainer}`}>
                <img src={photo} className={style.photo}></img>
                <div className={style.greetings}>
                    <h1 className={style.name}>
                    <span>Leanid
                        <br/>Aliakhnovich</span>
                    </h1>
                    <div className={style.description}>
                        <span className={style.title}>Programmer</span>
                        <p>Hello! I am Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import style from "./Main.module.css";
import styleContainer from "./../common/styles/Container.module.css"


export const Main = () => {
    return (
        <div className={style.main}>
           < div className={`${styleContainer.container} ${style.mainContainer}`}>
               <div className={style.creatings}>
                   <span>Hi HH</span>
                   <h1>I'm NAME</h1>
                   <p>FrontEnd developer</p>
               </div>
               <div className={style.photo}></div>
           </div>
        </div>
    );
}
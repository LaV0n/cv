import React from 'react';
import style from "./Footer.module.css";
import styleContainer from "./../common/styles/Container.module.css"


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            < div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>LaVon</h2>
                <form className={style.block}>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </form>
                <h5>© 2022 all rights reserved </h5>
            </div>
        </div>
    );
}
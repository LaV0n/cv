import React from 'react';
import style from "./Footer.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import gitIcon from "../assets/icon/github-svgrepo-com.svg"
import codewarsIcon from  "../assets/icon/codewars-svgrepo-com.svg"
import {Link} from "./link/link";
import Slide from 'react-reveal/Slide'
import linkedinIcon from "../assets/icon/linkedin-logo-svgrepo-com.svg"
import telegramIcon from "../assets/icon/telegram-svgrepo-com.svg"


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            < div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Slide bottom>
                    <h3>LaVon</h3>
                    <form className={style.block}>
                        <Link icon={gitIcon} link='https://github.com/LaV0n'/>
                        <Link icon={codewarsIcon} link={'https://www.codewars.com/users/LaV0n'}/>
                        <Link icon={linkedinIcon} link={'https://www.linkedin.com/in/alekhnovich-leanid'}/>
                        <Link icon={telegramIcon} link={'https://t.me/lavon_by'}/>
                    </form>
                    <h5>© 2022 all rights reserved </h5>
                </Slide>
            </div>
        </div>
    );
}
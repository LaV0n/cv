import React from 'react';
import style from "./Footer.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import gitIcon from "../assets/icon/github-svgrepo-com.svg"
import codewarsIcon from  "../assets/icon/codewars-svgrepo-com.svg"
import instaIcon from "../assets/icon/instagram-social-network-logo-of-photo-camera-svgrepo-com.svg"
import fbIcon from  "../assets/icon/facebook-svgrepo-com.svg"
import {Link} from "./link/link";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            < div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>LaVon</h3>
                <form className={style.block}>
                    <Link icon={gitIcon} link='https://github.com/LaV0n'/>
                    <Link icon={codewarsIcon} link={'https://www.codewars.com/users/LaV0n'}/>
                    <Link icon={instaIcon} link={'https://www.instagram.com/lavon_by/'}/>
                    <Link icon={fbIcon} link={'https://www.facebook.com/alekhnovich'}/>
                </form>
                <h5>© 2022 all rights reserved </h5>
            </div>
        </div>
    );
}
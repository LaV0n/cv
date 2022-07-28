import React from 'react';
import style from "./Navbar.module.css";

export const Navbar=()=> {
    return (
        <div className={style.nav}>
            <a href="">main </a>
            <a href="">skills</a>
            <a href="">projects</a>
            <a href="">contacts</a>

        </div>
    );
}



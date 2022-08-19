import React from 'react';
import styles from "./link.module.scss";

export const Link = (props) => {
    return (
        <a href={props.link}>
            <img src={props.icon} alt={"0"} className={styles.img}/>
        </a>
    )
}
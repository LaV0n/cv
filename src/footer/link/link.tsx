import React from 'react';
import styles from "./link.module.scss";

type LinkDataType = {
    link:string
    icon:string
}
export const Link = ({link,icon}:LinkDataType) => {
    return (
        <a href={link}>
            <img src={icon} alt={"0"} className={styles.img}/>
        </a>
    )
}
import React from 'react';
import styles from "./Project.module.css";



export const Project = (props) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.img} style={props.style}>
                <a href="" className={styles.linkButton}>LOOK</a>
            </div>
                <h3>{props.title}</h3>
                <div className={styles.description}>
                    <span>{props.description}</span>
                </div>
        </div>
    );
}
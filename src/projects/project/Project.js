import React from 'react';
import styles from "./Project.module.scss";



export const Project = (props) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.img} style={props.style}>
                <a href={props.link} className={styles.linkButton}>
                    <div className={styles.linkBack}>
                        LOOK
                    </div>
                        </a>
            </div>
                <h3 className={styles.h3_project}>{props.title}</h3>
                <div className={styles.description}>
                    <span>{props.description}</span>
                </div>
        </div>
    );
}
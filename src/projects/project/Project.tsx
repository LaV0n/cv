import React from 'react';
import styles from "./Project.module.scss";

type ProjectDataType ={
    style:{backgroundImage:string}
    link:string
    title:string
    description:string
}

export const Project = ({style,link,title,description}:ProjectDataType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.img} style={style}>
                <a href={link} className={styles.linkButton}>
                    <div className={styles.linkBack}>
                        LOOK
                    </div>
                </a>
            </div>
            <h3 className={styles.h3_project}>{title}</h3>
            <div className={styles.description}>
                <span>{description}</span>
            </div>
        </div>
    );
}
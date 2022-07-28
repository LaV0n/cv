import React from 'react';
import style from "./Projects.module.css";
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/Project";



export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            < div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2>Projects</h2>
                <div className={style.projects}>
                    <Project title="first" description="11111111"/>
                    <Project title="second" description="2222222"/>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import style from "./Projects.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import image1 from "./../assets/image/triss.jpg"
import image2 from "./../assets/image/gu.jpeg"



export const Projects = () => {
    const project1Img = {
        backgroundImage: `url(${image1})`,
    }
    const project2Img = {
        backgroundImage: `url(${image2})`,
    }

    return (
        <div className={style.projectsBlock}>
            < div className={`${styleContainer.container} ${style.projectsContainer}`}>
              <Title title="Projects"/>
                <div className={style.projects}>
                    <Project style = {project1Img} title="first" description="11111111"/>
                    <Project style = {project2Img} title="second" description="2222222"/>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import style from "./Projects.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import image1 from "./../assets/image/network.jpg"
import image2 from "./../assets/image/todolist.jpg"
import Slide from 'react-reveal/Slide'


export const Projects = () => {
    const project1Img = {
        backgroundImage: `url(${image1})`,
    }
    const project2Img = {
        backgroundImage: `url(${image2})`,
    }

    return (
        <div id='projects' className={style.projectsBlock}>
            < div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Slide bottom>
                    <Title title="Projects" description={"LATEST WORKS"}/>
                    <div className={style.projects}>
                        <Project style={project2Img} title="todolist" description="lists for yours tasks"/>
                        <Project style={project1Img} title="social network" description="connect with your friends"/>
                    </div>
                </Slide>
            </div>
        </div>

    );
}
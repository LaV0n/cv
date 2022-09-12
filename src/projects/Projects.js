import React from 'react';
import style from "./Projects.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import image1 from "./../assets/image/network.jpg"
import image2 from "./../assets/image/todolist.jpg"
import Slide from 'react-reveal/Slide'
import shelterImg from './../assets/image/shelter.jpg'
import memoryGameImg from '../assets/image/memoryGame.png'


export const Projects = () => {
    const projectImg ={
      first:{
          backgroundImage: `url(${image1})`,
      },
        second:{
            backgroundImage: `url(${image2})`,
        },
        third:{
            backgroundImage: `url(${shelterImg})`,
        },
        fourth:{
            backgroundImage: `url(${memoryGameImg})`,
        },
    }


    return (
        <div id='projects' className={style.projectsBlock}>
            < div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Slide bottom>
                    <Title title="Projects" description={"LATEST WORKS"}/>
                    <div className={style.projects}>
                        <Project style={projectImg.second}
                                 title="todolist"
                                 description="lists for yours tasks"
                                 link={''}
                        />
                        <Project style={projectImg.first}
                                 title="social network"
                                 description="connect with your friends"
                                 link={''}
                        />
                        <Project style={projectImg.third}
                                 title="Pet's Shelter"
                                 description="task with responsive web design on  vanilla JS"
                                 link={'https://lav0n.github.io/Shelter/'}
                        />
                        <Project style={projectImg.fourth}
                                 title="Memory card game"
                                 description="card game on  vanilla JS"
                                 link={'https://lav0n.github.io/memory-game/'}
                        />
                    </div>
                </Slide>
            </div>
        </div>

    );
}
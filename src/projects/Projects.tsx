import React from 'react';
import style from "./Projects.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import image1 from "./../assets/image/socialNetwork.png"
import image2 from "./../assets/image/todolists.png"
import fridayPJ from "./../assets/image/friday.png"
import shelterImg from './../assets/image/shelter.jpg'
import memoryGameImg from '../assets/image/memoryGame.png'
import coffeeShopImg from '../assets/image/coffeeshop.png'
import lineGameImg from '../assets/image/lineGame.png'
import chatImg from '../assets/image/chat.png'
import weatherImg from '../assets/image/weatherAPP.png'
import rockGameImg from '../assets/image/rockGame.png'
import { Slide } from 'react-awesome-reveal';

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
        fifth:{
            backgroundImage: `url(${fridayPJ})`,
        },
        sixth:{
            backgroundImage:  `url(${coffeeShopImg})`,
        },
        seventh:{
            backgroundImage:  `url(${lineGameImg})`,
        },
        eighth:{
            backgroundImage:  `url(${chatImg})`,
        },
        ninth:{
            backgroundImage:  `url(${weatherImg})`,
        },
        tenth:{
            backgroundImage:  `url(${rockGameImg})`,
        }
    }

    return (
        <div id='projects' className={style.projectsBlock}>
                < div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title="Projects" description={"Pets Apps"}/>
                    <div className={style.projects}>
                        <Slide direction={'up'} cascade  triggerOnce damping={0.1}>
                        <Project style={projectImg.first}
                                 title="social network"
                                 description="SPA with REST API"
                                 link={'https://lav0n.github.io/social-network/'}
                        />
                        <Project style={projectImg.fifth}
                                 title="Learning cards"
                                 description="learning cards with individual account"
                                 link={'https://lav0n.github.io/project1/'}
                        />
                        <Project style={projectImg.ninth}
                                 title="Weather APP"
                                 description="App with responsive design, unit and integration tests."
                                 link={'https://github.com/LaV0n/weather-app'}
                        />
                        <Project style={projectImg.seventh}
                                 title="3 browser games"
                                 description="Simple games for Browsers on TypeScript"
                                 link={'https://github.com/LaV0n/game'}
                        />
                        <Project style={projectImg.eighth}
                                 title="Web Chat"
                                 description="Chat on socket-io with own server"
                                 link={'https://github.com/LaV0n/chat-websocket-front'}
                        />
                        <Project style={projectImg.second}
                                 title="todolist"
                                 description="personal todo lists"
                                 link={'https://lav0n.github.io/it-incubator-todolist/'}
                        />
                        <Project style={projectImg.sixth}
                                 title="Coffee Shop APK"
                                 description="APK for mobile on React Native"
                                 link={'https://github.com/LaV0n/coffee_shop'}
                        />
                        <Project style={projectImg.tenth}
                                 title="Rock Paper Scissors Game"
                                 description="easy mobile game on React Native with 3 difficult level"
                                 link={'https://github.com/LaV0n/rock-paper-scissors'}
                        />
                        <Project style={projectImg.fourth}
                                 title="Memory card game"
                                 description="card game on  vanilla JS"
                                 link={'https://lav0n.github.io/memory-game/'}
                        />
                        <Project style={projectImg.third}
                                 title="Pet's Shelter"
                                 description="task with responsive web design on  vanilla JS"
                                 link={'https://lav0n.github.io/Shelter/'}
                        />
                        </Slide>
                        <div>
                        </div>
                    </div>
                </div>
        </div>

    );
}
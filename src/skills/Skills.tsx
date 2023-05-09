import React from 'react';
import style from "./Skills.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import htmlIcon from "../assets/icon/html-svgrepo-com.svg"
import cssIcon from "../assets/icon/css-svgrepo-com.svg"
import reactIcon from "../assets/icon/react-svgrepo-com.svg"
import tsIcon from "../assets/icon/typescript-svgrepo-com.svg"
import JSIcon from '../assets/icon/java-script.png'
import apiIcon from '../assets/icon/api.png'
import sassIcon from '../assets/icon/sass-svgrepo-com.svg'
import nodeIcon from '../assets/icon/icons8-node-js-96.svg'
import mongodbIcon from '../assets/icon/mongodb-svgrepo-com.svg'
import githubIcon from '../assets/icon/icons8-github.svg'
import photoIcon from '../assets/icon/icons8-adobe-photoshop.svg'
import reduxIcon from '../assets/icon/icons8-redux.svg'
import { Slide } from 'react-awesome-reveal';

export const Skills = () => {
    return (
        <div id='skills' className={style.skillsBlock}>
            < div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'Skills'} description={'DEVELOPING ON'}/>
                    <div className={style.skills}>
                        <Slide direction={'up'} cascade  triggerOnce damping={0.1}>
                        <Skill title="React" icon={reactIcon}/>
                        <Skill title="TypeScript" icon={tsIcon} />
                        <Skill title="JavaScript" icon={JSIcon}/>
                        <Skill title='React Native' icon={reactIcon}/>
                        <Skill title='Redux' icon={reduxIcon}/>
                        <Skill title="HTML" icon={htmlIcon}/>
                        <Skill title="CSS" icon={cssIcon}/>
                        <Skill title="SASS" icon={sassIcon}/>
                        <Skill title="REST API" icon={apiIcon}/>
                        <Skill title="Node JS" icon={nodeIcon}/>
                        <Skill title="MongoDB" icon={mongodbIcon}/>
                        <Skill title="GitHub" icon={githubIcon}/>
                        <Skill title="Photoshop" icon={photoIcon}/>
                        </Slide>
                    </div>
            </div>
        </div>
    );
}
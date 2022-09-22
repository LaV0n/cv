import React from 'react';
import style from "./Skills.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import htmlIcon from "../assets/icon/html-svgrepo-com.svg"
import cssIcon from "../assets/icon/css-svgrepo-com.svg"
import reactIcon from "../assets/icon/react-svgrepo-com.svg"
import tsIcon from "../assets/icon/typescript-svgrepo-com.svg"
import Slide from 'react-reveal/Slide'
import JSIcon from '../assets/icon/java-script.png'
import apiIcon from '../assets/icon/api.png'


export const Skills = () => {
    return (
        <div id='skills' className={style.skillsBlock}>
            < div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Slide bottom>
                    <Title title={'Skills'} description={'DEVELOPING ON'}/>
                    <div className={style.skills}>
                        <Skill title="React" icon={reactIcon}/>
                        <Skill title="TypeScript" icon={tsIcon} />
                        <Skill title="JavaScript" icon={JSIcon}/>
                        <Skill title="HTML" icon={htmlIcon}/>
                        <Skill title="CSS" icon={cssIcon}/>
                        <Skill title="REST API" icon={apiIcon}/>

                    </div>
                </Slide>
            </div>
        </div>
    );
}
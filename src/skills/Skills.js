import React from 'react';
import style from "./Skills.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import htmlIcon from "../assets/icon/html-svgrepo-com.svg"
import jsIcon from "../assets/icon/jsx-svgrepo-com.svg"
import cssIcon from "../assets/icon/css-svgrepo-com.svg"
import reactIcon from "../assets/icon/react-svgrepo-com.svg"
import tsIcon from "../assets/icon/typescript-svgrepo-com.svg"


export const Skills = () => {
    return (
        <div id ='skills' className={style.skillsBlock}>
            < div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'} description={'DEVELOPING ON'}/>
                <div className={style.skills}>
                    <Skill title="JS"
                           description="sometimes I press a button and some miracle happens"
                           icon={jsIcon}
                    />
                    <Skill title="HTML"
                           description="words come step by step"
                           icon={htmlIcon}
                    />
                    <Skill title="CSS"
                           description="big pictures don't run away anymore"
                           icon={cssIcon}
                    />
                    <Skill title="React"
                           description="many smart things in one place"
                           icon={reactIcon}
                    />
                    <Skill title="TypeScript"
                           description="in this js code you wont make mistakes. DON'T USE ':any'"
                           icon={tsIcon}
                    />
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import style from "./Skills.module.css";
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            < div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'} description = {'DEVELOPING ON'}/>
                <div className={style.skills}>
                   <Skill title="JS" description ="11111111 1111 1111111 11111111 1111111 1111111111111111 1111 11111 11111111 11111 1111 "/>
                   <Skill title="HTML" description="2222222222 22222222 2222222 222222 2 2 222222222 222  222  2222  2222222  2 2 2222"/>
                   <Skill title="CSS" description="33333333 33333 3 3 33333333 3 333333 3333 333333333 333 33333333 333333333 3333333 33333"/>
                </div>
            </div>
        </div>
    );
}
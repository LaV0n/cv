import React from 'react';
import style from "./Main.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import photo from '../assets/image/LavonTatry.jpg'
import Slide from 'react-reveal/Slide'
import ReactTypingEffect from 'react-typing-effect';


export const Main = () => {
    return (
        <div id='main' className={style.main}>
            < div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Slide bottom>
                    <img src={photo} className={style.photo} alt='0'/>
                    <div className={style.greetings}>
                        <h1 className={style.name}>
                    <span>Leanid
                        <br/>Aliakhnovich</span>
                        </h1>
                        <div className={style.description}>
                            <span className={style.title}>
                                <ReactTypingEffect text={['FRONTEND DEVELOPER']}/>
                                </span>
                            <p>I'm an ambitious and motivated
                                Frontend Developer. I'm ready to
                                work in a team but don't afraid of
                                looking for the solutions on my own.
                                I would like to work in a dynamic
                                company where I could develop as a
                                specialist and develop skills in field of
                                backend and AI.</p>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
}
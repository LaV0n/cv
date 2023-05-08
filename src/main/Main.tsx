import style from "./Main.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import photo from '../assets/image/LavonTatry.jpg'
import { Slide } from "react-awesome-reveal";
import Typed from "react-typed"

export const Main = () => {
    return (
        <div id='main' className={style.main}>
            < div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <img src={photo} className={style.photo} alt='0'/>
                    <div className={style.greetings}>
                        <h1 className={style.name}>
                    <span>Leanid
                        <br/>Aliakhnovich</span>
                        </h1>
                        <div className={style.description}>
                            <span className={style.title}>
                                <Typed
                                    strings={[
                                        'Hello Word',
                                       "I'm FRONTEND DEVELOPER"
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={80}
                                    loop/>
                                </span>
                            <p>I'm an ambitious and motivated
                                Frontend Developer with experience
                                in creating SPA using React, Redux,
                                TypeScript. I'm ready to work in a
                                team but don't afraid of looking for
                                the solutions on my own. I would
                                like to work in a dynamic company
                                where I could develop as a specialist
                                and develop skills in field of backend
                                and AI.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
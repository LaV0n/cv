import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "./../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            < div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'} description ={'LET\'S TALK'}/>
                <h2>Contacts</h2>
                <form className={style.form}>
                    <input placeholder="<input>"/>
                    <input placeholder="<input>"/>
                    <textarea placeholder="<textarea>"/>
                </form>
                <button type='submit'>send</button>
            </div>
        </div>
    );
}
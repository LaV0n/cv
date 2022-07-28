import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "./../common/styles/Container.module.css"


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            < div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={style.contacts}>
                    <input placeholder="<input>"/>
                    <input placeholder="<input>"/>
                    <textarea placeholder="<texarea>"/>
                </form>
                <button>send</button>
            </div>
        </div>
    );
}
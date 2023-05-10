import React, {useEffect, useState} from 'react';
import style from "./Header.module.scss";
import {Navbar} from "../navbar/Navbar";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

type HeaderDataType ={
    darkMode:boolean
    setDarkMode:(value:boolean)=>void
}

export const Header = ({setDarkMode,darkMode}:HeaderDataType) => {

    const handleChange=()=>{
        setDarkMode(!darkMode)
    }

    return (
        <div className={style.header} >
            {darkMode
                ?<ModeNightIcon onClick={handleChange} style={{color:style.activeColor,cursor:'pointer',marginLeft:15}}/>
                :<LightModeIcon onClick={handleChange} style={{cursor:'pointer',marginLeft:15}}/>
            }
            <Navbar/>
        </div>
    );
}



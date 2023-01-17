import React, {useEffect, useState} from 'react';
import style from "./Header.module.scss";
import {Navbar} from "../navbar/Navbar";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export const Header = () => {

    let root = document.documentElement;
    const [checked,setChecked]=useState(true)

    const handleChange=()=>{
        setChecked(!checked)
    }

    useEffect(()=>{
        root.style.setProperty('--thirdColor', checked ?  'rgb(89, 93, 101)': '#a4c3b2');
        root.style.setProperty('--mainColor', checked ? 'rgb(43,50,58)': '#cce3de');
        root.style.setProperty('--secondColor', checked ? 'rgb(55, 60, 64)': '#eaf4f4');
        root.style.setProperty('--activeColor', checked ? 'rgb(0, 223, 206)': '#cce3de');
        root.style.setProperty('--textColor', checked ? '#fff': '#000');
    },[checked])

    return (
        <div className={style.header} >
            {checked
                ?<ModeNightIcon onClick={handleChange} style={{color:style.activeColor}}/>
                :<LightModeIcon onClick={handleChange}/>
            }
            <Navbar/>
        </div>
    );
}



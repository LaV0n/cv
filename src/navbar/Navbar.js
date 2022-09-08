import React from 'react';
import style from "./Navbar.module.scss";
import {  IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const options = [
    <a className={style.link} href="#main">main </a>,
    <a className={style.link} href="#skills">skills</a>,
    <a className={style.link} href="#projects">projects</a>,
    <a className={style.link} href="#contacts">contacts</a>
];

export const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (<>
            <div className={style.nav}>
                <a href="#main">main </a>
                <a href="#skills">skills</a>
                <a href="#projects">projects</a>
                <a href="#contacts">contacts</a>
            </div>
            <div className={style.burgerMenu}>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    color={"inherit"}
                >
                 <MenuIcon/>
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            width: '100%',
                            backgroundColor:'#373C40FF'
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option}
                                  onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </>
    );
}



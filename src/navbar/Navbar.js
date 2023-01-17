import React from 'react';
import style from "./Navbar.module.scss";
import {IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-scroll";


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
                <Link activeClass={style.active}
                      to="main"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                >main</Link>
                <Link activeClass={style.active}
                      to='skills'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                >skills</Link>
                <Link activeClass={style.active}
                      to='projects'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                >projects</Link>
                <Link activeClass={style.active}
                      to='contacts'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                >contacts
                </Link>
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
                            backgroundColor: '#373C40FF'
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
    )
        ;
}



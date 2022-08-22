import React from 'react';
import style from "./Navbar.module.scss";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from "@mui/material";

export const Navbar = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (<>

            {/*<div className={style.nav}>
                <a href="">main </a>
                <a href="">skills</a>
                <a href="">projects</a>
                <a href="">contacts</a>
            </div>*/}

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                          MENU
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className={style.nav}>
                            <a href="">main </a>
                            <a href="">skills</a>
                            <a href="">projects</a>
                            <a href="">contacts</a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

        </>
    );
}



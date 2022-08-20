import React from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title";
import {createMuiTheme,  ThemeProvider} from '@mui/material/styles';
import {Button, styled, TextField} from "@mui/material";

const theme = createMuiTheme({
    status: {
        danger: 'primary',
    },
    palette: {
        button: {
            main: '#00ddce',
        },
        personal: {
            main: '#00ddce',
        },
        typography: {
            fontSize: '100',
            fontFamily: 'Poppins',
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(253,253,253,0.4)'
        },

    }
});
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#00ddce',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#00ddce',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(253,253,253,0.4)',
        },
        '&:hover fieldset': {
            borderColor: 'fff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#00ddce',
        },
    },
});

export const Contacts = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className={style.contactsBlock}>
                < div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={'Contacts'} description={'LET\'S TALK'}/>
                    <div className={style.block}>
                        <form className={style.form}>
                            <CssTextField id="nameInput"
                                       label="FULL NAME *"
                                       variant="outlined"
                                       margin="normal"
                            />
                            <CssTextField id="mailInput"
                                       label="EMAIL ADDRESS *"
                                       variant="outlined"
                                       margin="normal"
                            />
                            <CssTextField id="massageInput"
                                          label="MESSAGE *"
                                          variant="outlined"
                                          multiline
                                          rows={4}
                                          margin="normal"
                                          />
                        </form>
                        <Button type='submit'
                                variant="outlined"
                                color="button"
                                size="large"
                        >send</Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
import style from "./Contacts.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Button, styled, TextField} from "@mui/material";
import axios from "axios";
import { Slide } from 'react-awesome-reveal';
import {FormEvent, useEffect, useState } from "react";

const CssTextField = styled(TextField)({
    '& input':{
        color: style.textColor
    },
    '& label.Mui-focused': {
        color: style.activeColor,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: style.activeColor,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: style.thirdColor,
        },
        '&:hover fieldset': {
            borderColor: style.textColor,
        },
        '&.Mui-focused fieldset': {
            borderColor: style.activeColor,
        },
    },
});

export const Contacts = () => {

    const [disButton,setDisButton]=useState(true)

    const onSubmitHandler=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if (event.currentTarget.nameInput.value && event.currentTarget.mailInput.value && event.currentTarget.massageInput.value){
            axios.post('https://carnation-pointy-dime.glitch.me/sendMail',{
                name:event.currentTarget.nameInput.value,
                email:event.currentTarget.mailInput.value,
                data:event.currentTarget.massageInput.value
            })
                    alert('your message has been send')
        }else{
            alert('all fields are required')
        }
    }

    return (
            <div id='contacts' className={style.contactsBlock}>
                <Slide direction={'up'}  triggerOnce>
                < div className={`${styleContainer.container} ${style.contactsContainer}`}>
                        <Title title={'Contacts'} description={'LET\'S TALK'}/>
                        <div className={style.block}>
                            <form className={style.form} onSubmit={onSubmitHandler}>
                                <CssTextField name="nameInput"
                                              label="FULL NAME *"
                                              variant="outlined"
                                              margin="normal"
                                />
                                <CssTextField name="mailInput"
                                              type='email'
                                              label="EMAIL ADDRESS *"
                                              variant="outlined"
                                              margin="normal"
                                />
                                <CssTextField name="massageInput"
                                              label="MESSAGE *"
                                              variant="outlined"
                                              multiline
                                              rows={4}
                                              margin="normal"
                                />
                                <Button type="submit"
                                        variant="outlined"
                                        sx={{color:style.activeColor, borderColor:style.activeColor}}
                                        size="large"
                                >send</Button>
                            </form>
                        </div>
                </div>
                </Slide>
            </div>
    );
}

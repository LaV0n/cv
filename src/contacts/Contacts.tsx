import style from "./Contacts.module.scss";
import styleContainer from "./../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Button, styled, TextField} from "@mui/material";
import axios from "axios";
import { Slide } from 'react-awesome-reveal';

const theme = createTheme({
    palette: {
        info: {
            main: '#00ddce',
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

    const onSubmitHandler=(event:any)=>{
        event.preventDefault();
        axios.post('https://carnation-pointy-dime.glitch.me/sendMail',{
            name:event.target.nameInput.value,
            email:event.target.mailInput.value,
            data:event.target.massageInput.value
        })
            .then(()=>alert('your message has been send'))

    }

    return (
        <ThemeProvider theme={theme}>
            <div id='contacts' className={style.contactsBlock}>
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
                                        color="info"
                                        size="large"
                                >send</Button>
                            </form>
                        </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

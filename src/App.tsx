import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div id="App" className={darkMode?'dark':'light'}>
            <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
            <Main/>
            <Skills />
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

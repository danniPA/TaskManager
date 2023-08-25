import UpMenu from "../Main/UpMenu"
import exitImg from '../../img/close.png'
import { useNavigate } from "react-router-dom";
import SettingsStyle from "./css/Settings.module.css"
import CustomButton from "./CustomButton";

import { useSelector, useDispatch } from "react-redux";
import { themeSwitch,languageSwitch } from "../../redux/Slices/settingsSlice";

import react from 'react'

function Settings(){
    const navigate = useNavigate() 
    const dispatch = useDispatch()

    return(
        <div>
            <UpMenu logoText="Settings" altText="Back" img={exitImg} onClickEvent={() => navigate('/')} />

            <div className={SettingsStyle.logo}>Theme</div>
            <div className={SettingsStyle.settings_container}>
                <CustomButton title="Light" type="theme" onClickEvent={()=>dispatch(themeSwitch("Light"))}/>
                <CustomButton title="Dark" type="theme" onClickEvent={()=>dispatch(themeSwitch("Dark"))}/>
            </div>

            <div className={SettingsStyle.logo}>Language</div>
            <div className={SettingsStyle.settings_container}>
                <CustomButton title="English" type="lang" onClickEvent={()=>dispatch(languageSwitch("English"))}/>
                <CustomButton title="Українська" type="lang" onClickEvent={()=>dispatch(languageSwitch("Українська"))}/>
                <CustomButton title="Polska" type="lang" onClickEvent={()=>dispatch(languageSwitch("Polska"))}/>
            </div>
        </div>
    );
}

export default Settings;
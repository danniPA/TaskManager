import SettingsStyle from "./css/Settings.module.css"

import { useSelector } from "react-redux";
import react from 'react'

function CustomButton({title,onClickEvent,type}){
    let theme = useSelector((state) => state.settings.theme);
    let lang = useSelector((state) => state.settings.language);

    const value = {
        "theme": theme,
        "lang":lang,
    }

    return(
        <div className={`${SettingsStyle.table_button} button ${title===value[`${type}`] ? 'button-picked' :''}`} onClick={onClickEvent}>
            {title}
        </div>
    );
}

export default CustomButton;
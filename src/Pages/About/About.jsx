import UpMenu from "../Main/UpMenu"
import exitImg from '../../img/close.png'
import { useNavigate } from "react-router-dom";

import AboutStyle from "./css/About.module.css"

import { useSelector } from "react-redux";
import react from 'react'

function About(){
    const navigate = useNavigate() 
    return(
        <div className={`${""}`}>
            <UpMenu logoText="About" altText="Back" img={exitImg} onClickEvent={() => navigate('/')} />
            <div className={`${AboutStyle.textContainer}`}>
                <div className={`${AboutStyle.paragraph}`}>
                    Task Manager is a web application that will help to you manage your tasks in easy way
                </div>
            </div>
            <div className={`${AboutStyle.textContainer} ${AboutStyle.margin} `}>
                <div className={`${AboutStyle.paragraph} ${AboutStyle.nonmainText}`}>
                    Created by Dan Panov
                </div>
                <div className={`${AboutStyle.paragraph} ${AboutStyle.nonmainText}`}>
                    Idea Dan Panov
                </div>
            </div>
        </div>
    );
}

export default About;
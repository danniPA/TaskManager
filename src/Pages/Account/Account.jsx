
import { useNavigate } from "react-router-dom";

import AccountStyle from "./css/Account.module.css"

import { useEffect } from "react";

import { useSelector } from "react-redux";
import react from 'react'

function Account(){
    const navigate = useNavigate() 
    let {login,premium,id} = useSelector((state) => state.user)
    
    useEffect(() => {
        !login?navigate("/Account/Login"):navigate("/Account/Profile")
    }, [])
    return (
    <div>
        
        {
            
        }

    </div>
    );
}

export default Account;
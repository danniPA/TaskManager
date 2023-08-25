import UpMenu from "../../Main/UpMenu"
import exitImg from '../../../img/close.png'

import { useSelector,useDispatch } from "react-redux";
import { logOutAccount } from "../../../redux/Slices/userSlice";

import AccountStyle from ".././css/Account.module.css"

import { useNavigate } from "react-router-dom";

import React from 'react'

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let user  = useSelector((state) => state.user);
    let tablesData = useSelector((state) => state.table);

    if (user.name==="") {
        navigate("/Account/Login")
        return null;
    }
    
    function logout(){
        dispatch(logOutAccount())
    }
    
    return (
        <div>
            <UpMenu
                logoText="Account"
                altText="Back"
                img={exitImg}
                onClickEvent={() => navigate("/")}
            />
            <div className={`${AccountStyle.text}`}>
                Name: {user.name}<br />
                Username: {user.username}<br/>
                Id: {user.id}<br/>
                Available tables: {user.availableTables}<br/>
                Created tables: {tablesData.tables.length}
            </div>
            <div className={`${AccountStyle.specButton} button`} onClick={logout}>Log out</div>
        </div>
    );
};


export default Profile

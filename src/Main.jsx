import React from 'react';

import Error404 from './Pages/Error404/Error404';
import App from './Pages/Main/App';
import Settings from './Pages/Settings/Settings';
import About from './Pages/About/About';
import Account from './Pages/Account/Account';
import Login from './Pages/Account/Subpage/Login'
import Register from './Pages/Account/Subpage/Register';
import Profile from './Pages/Account/Subpage/Profile';


import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNewTable } from "./redux/Slices/tableSlice";

import axios from "axios";

import loadingGif from './img/loading.gif'

function Main(){
    let dispatch = useDispatch();
    let {theme} = useSelector((state) => state.settings);
    let user = useSelector((state) => state.user);
    

    return (
        <div className={`wrapper ${theme}`}>
                <Routes>
                    <Route path="*" element={<Error404 />} />
                    <Route path="/" element={<App />} />
                    <Route path="/Settings" element={<Settings />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Account" element={<Account />} />
                    <Route path="/Account/Login" element={<Login />} />
                    <Route path="/Account/Register" element={<Register />} />
                    <Route path="/Account/Profile" element={<Profile />} />
                </Routes>
        </div>
    );
}

export default Main;

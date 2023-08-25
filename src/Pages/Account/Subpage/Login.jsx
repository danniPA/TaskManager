import UpMenu from "../../Main/UpMenu"
import exitImg from '../../../img/close.png'
import loadingGif from '../../../img/loading.gif'

import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logInAccount } from "../../../redux/Slices/userSlice";

import AccountStyle from ".././css/Account.module.css"

import React from 'react'
import axios from "axios";

function Login(){
    const navigate = useNavigate() 
    const dispatch = useDispatch()

    let [usernameValue, setUsername] = React.useState("");
    let [passwordValue, setPassword] = React.useState("");

    let [loading, setLoading] = React.useState(false);

    const url = 'https://64cfa39effcda80aff520eef.mockapi.io/UserData'; // Replace with your actual URL
    let enterAccount = async ()=>{
        try {
            const resp = await axios.get(url)
            let accData = resp.data;
            if(accData.length===0){
                return false;
            }
            else{
                const foundUser = accData.find(elem => elem.username === usernameValue && elem.password === passwordValue);
                if(foundUser){
                    dispatch(logInAccount({name:foundUser.name,username:foundUser.username,login:true,id:foundUser.id}))
                }
                return foundUser;
            }
        } catch (error) {
            alert('Server error')
            return false;
        }
    }

    async function login() {
        if (usernameValue.trim().length >= 3 && passwordValue.trim().length >= 3) {
            setLoading(true);
            if(await enterAccount()){
                alert("Entering...")
                navigate("/Account/Profile")
            }
            else{
                alert("Username or password is wrong")
            }
            setUsername("");
            setPassword("");
            setLoading(false);
        } else {
            alert("Username or password is too short");
        }
    }

    const handleKeyUp = (event) => {
    if (event.key === "Enter") {
        login();
    }
    };
    return (
    <div>
        <UpMenu logoText="Log In" altText="Back"img={exitImg} onClickEvent={() => navigate("/")}/>
        <div className={`${AccountStyle.main}`}>
            <div className={`${AccountStyle.loginContainer}`}>
                <div className={`${AccountStyle.text}`}>Enter your username:</div>
                <input
                    value={usernameValue}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username..."
                    className={`${AccountStyle.input}`}
                />
                <div className={`${AccountStyle.text}`}>Enter your password:</div>
                <input value={passwordValue}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyUp={handleKeyUp}
                    type="password"
                    placeholder="Password..."
                    className={`${AccountStyle.input}`}
                />
                <div className={`${AccountStyle.buttonContainer}`}>
                    <div className={`${AccountStyle.button} button`} onClick={login}>
                        LogIn
                    </div>
                    {loading?<img src={loadingGif} alt="Loading..." draggable={false} className="home-image"/>:""}
                    
                </div>
                <div className={`${AccountStyle.buttonContainer}`}>
                    Don't have an account?
                    <div className={`${AccountStyle.button} button`} onClick={()=>navigate("/Account/Register")}>Create an account</div>
                </div>
            </div>
        </div>  
    </div>
    );
}

export default Login;
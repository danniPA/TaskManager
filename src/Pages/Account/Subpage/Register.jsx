import UpMenu from "../../Main/UpMenu"
import exitImg from '../../../img/close.png'
import loadingGif from '../../../img/loading.gif'

import { useNavigate } from "react-router-dom";

import AccountStyle from ".././css/Account.module.css"

import { useSelector } from "react-redux";
import react from 'react'

import axios from "axios";

function Register(){
    const navigate = useNavigate() 
    let [nameValue, setName] = react.useState("");
    let [usernameValue, setUsername] = react.useState("");
    let [passwordValue, setPassword] = react.useState("");
    let [loading, setLoading] = react.useState(false);

    const url = 'https://64cfa39effcda80aff520eef.mockapi.io/UserData';

    let createAccount = async ()=>{
        try {
            const resp = await axios.get(url)
            let accData = resp.data;

            const foundUser = accData.find(elem => elem.username === usernameValue);
            if(!foundUser){
                const resp = await axios.post(url,{name:nameValue,username:usernameValue,password:passwordValue} )
            }
            return !foundUser;
            
        } catch (error) {
            alert('Server error')
            return false;
        }
    }

    async function register() {
        if (nameValue.trim().length >= 2 && usernameValue.trim().length >= 3 && passwordValue.length >= 8) {
            setLoading(true);
            if(await createAccount()){
                alert("Creating...")
                navigate("/Account/Login")
                setName("");
                setUsername("");
                setPassword("");
            }
            else{
                alert("Username is already used")
            }
            setLoading(false);
        } else {
            alert("Name, username or password is too short");
        }
    }

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            Register();
        }
    };
    return (
    <div>
        <UpMenu logoText="Create an account" altText="Back"img={exitImg} onClickEvent={() => navigate("/")}/>
        <div className={`${AccountStyle.main}`}>
            <div className={`${AccountStyle.loginContainer}`}>
                <div className={`${AccountStyle.text}`}>Enter your name:</div>
                <input
                    value={nameValue}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name..."
                    className={`${AccountStyle.input}`}
                />
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
                    <div className={`${AccountStyle.button} button`} onClick={register}>Create an account</div>
                    {loading?<img src={loadingGif} alt="Loading..." draggable={false} className="home-image"/>:""}
                </div>
                <div className={`${AccountStyle.buttonContainer}`}>
                    Already have an account?
                    <div className={`${AccountStyle.button} button`} onClick={()=>navigate("/Account/Login")}>LogIn</div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './Login.css'
import { useStateValue } from './StateProvider';


function Login(loggedinuser) {
    // const [{ userin }, dispatch] = useStateValue();
    const history = useHistory();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user , setUser] = useState()

    const login = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/signIn", {email, password}, {
            withCredentials: true
        })
            .then( res => {
            console.log(res.data.user);
            console.log(typeof(res.data.user));
            if(res.data.loggedIn) {
                setUser(res.data.user)
                localStorage.setItem('userName', user.name)
                localStorage.setItem('userEmail', user.email)
                history.push("/");
            } else {
                setErrorMessage("Invalid login attempt!");
            }
        }).catch( err => console.log(err) );
    }

    return (
        <div className="login">
            <div className="container">
                <h3>Sign in</h3>
                <form className="login_form">
                    <div className="inputbox inputbox1">
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} required/>
                        <label>Email</label>
                    </div>
                    <div className="inputbox inputbox2">
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                        <label>Password</label>
                    </div>
                    <button type="submit" onClick={login}>Sign-In</button>
                </form>
                <a href="/signup">don't have an account?</a>
            </div>
        </div>
    )
}

export default Login

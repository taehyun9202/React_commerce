import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './Signup.css'
import { useStateValue } from './StateProvider';

function Signup() {
    const [{ }, dispatch] = useStateValue();
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const register = e => {
        e.preventDefault();
        const user = { name, email, password, confirmPassword };
        axios.post("http://localhost:8000/api/signUp", user, {
        withCredentials: true
        })
        .then( res => {
            console.log(res);
            if(res.data.loggedIn) {
                history.push("/");
            } else {
                setErrorMessage(res.data.errors);
            }
        }).catch( err => console.log(err) );
    }

    return (
        <div className="signup">
            <div className="container">
                <h3>Sign up</h3>
                <form className="signup_form">
                    <div className="inputbox inputbox1">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required/>
                        <label>Full name</label>
                    </div>
                    <div className="inputbox inputbox2">
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} required/>
                        <label>Email</label>
                    </div>
                    <div className="inputbox inputbox3">
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                        <label>Password</label>
                    </div>
                    <div className="inputbox inputbox4">
                        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                        <label>Confirm password</label>
                    </div>
                    <button type="submit" onClick={register}>Sign-Up</button>
                </form>
                <a href="/login">already have an account?</a>
            </div>
        </div>
    )
}

export default Signup

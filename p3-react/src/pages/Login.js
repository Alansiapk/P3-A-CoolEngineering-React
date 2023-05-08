import React from 'react'
import { useState, useCallback } from 'react';
import {useNavigate} from 'react-router-dom'; //change current path

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const signUpFrom= ()=>{
        navigate("/signup")
    }


    return (<>
        <h1>Member Login</h1>
        <h2>Please enter your email and password to access your account</h2>
        <div>
            <label>Email:</label>
            <input type="text" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="form-control"/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="form-control"/>
        </div>
        <button className = "btn btn-primary mt-3">Submit</button>

        <button className="btn btn-primary mt-3" onClick={signUpFrom}>SignUp</button>
        
    </>)

}
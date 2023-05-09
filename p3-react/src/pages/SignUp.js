import React from 'react'
import { useState, useCallback } from 'react';
import {useNavigate} from 'react-router-dom'; //change current path

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    return(<>
       <h2 className='text-center'>Sign Up</h2>
        <p className='text-center'>Create your account. It's free and only takes a minute.</p>
        <div>
            <label>Name:</label>
            <input type="text" 
            value={name} 
            onChange={e => setName(e.target.value)}
            className="form-control"/>
        </div>
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
        <button className = "btn btn-primary mt-3">Sign Up</button>
    </>)
    
}
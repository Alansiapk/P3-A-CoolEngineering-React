import React from 'react'
import { useState, useCallback } from 'react';
import {useNavigate} from 'react-router-dom'; //change current path

export default function Login() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [formState, setFormState] = useState ({
        name:"",
        email:"",
        password:""
    })

    // const updateFormField=(e)=>{
    //     setFormState({
    //         [e.target.name]:e.target.value
    //     })
    // }

    const updateFormField = useCallback((e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    },[formState])

    const signUpForm= ()=>{
        navigate("/signup")
    }

    const successLogin = useCallback(()=>{
        navigate("/profile",{
            "state":{
            formState
            }
        })
    },[formState,navigate])
    // const successLogin = ()=>{
    //     navigate("/profile",{
    //         "state":{
    //         name,email,password
    //         }
    //     })
    // }

    return (<>
        <h1>Member Login</h1>
        <h2>Please enter your email and password to access your account</h2>
        <div>
            <label>Name:</label>
            <input type="text" 
            value={formState.name} 
            name="name"
            // onChange={e => setName(e.target.value)}
            onChange={updateFormField}
            className="form-control"
            />
        </div>
        <div>
            <label>Email:</label>
            <input type="text" 
            value={formState.email} 
            name="email"
            // onChange={e => setEmail(e.target.value)}
            onChange={updateFormField}
            className="form-control"/>
            
        </div>
        <div>
            <label>Password:</label>
            <input type="password" 
            value={formState.password}
            name="password" 
            // onChange={e => setPassword(e.target.value)}
            onChange={updateFormField}
            className="form-control"/>
        </div>
        <button className = "btn btn-primary mt-3" onClick={successLogin}>Submit</button>
        <p className="mt-3">Don't have account? Please sign up for to receive latest news</p>
        <button className="btn btn-primary mt-3" onClick={signUpForm}>SignUp</button>
        
    </>)

}
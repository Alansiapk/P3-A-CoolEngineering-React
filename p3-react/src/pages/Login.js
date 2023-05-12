import React, { useState, useContext, useCallback } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';

const BASE_URL = "https://3000-alansiapk-p3acoolengine-17bu1ep0dew.ws-us97.gitpod.io"

export default function Login() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        // name: "",
        email: "",
        password: ""
    })

    const value = useContext(UserContext);

    // const updateFormField=(e)=>{
    //     setFormState({
    //         [e.target.name]:e.target.value
    //     })
    // }

    const updateFormField = useCallback((e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }, [formState])

    const signUpForm = () => {
        navigate("/signup")
    }

    async function doLogin() {
        console.log('do login');
        let response = await axios.post(BASE_URL + '/api/users/login', {
            email: formState.email,
            password: formState.password
        });
        console.log(response)
        if (response.status == 200 && response.data.accessToken) {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            localStorage.setItem("id", response)
            // navigate("/profile")
        } else {
            alert('Login failed.');
        }
    }
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
        {/* <div>
            <label>Name:</label>
            <input type="text"
                value={formState.name}
                name="name"
                // onChange={e => setName(e.target.value)}
                onChange={updateFormField}
                className="form-control"
            />
        </div> */}
        <div>
            <label>Email:</label>
            <input type="text"
                value={formState.email}
                name="email"
                // onChange={e => setEmail(e.target.value)}
                onChange={updateFormField}
                className="form-control" />

        </div>
        <div>
            <label>Password:</label>
            <input type="password"
                value={formState.password}
                name="password"
                // onChange={e => setPassword(e.target.value)}
                onChange={updateFormField}
                className="form-control" />
        </div>
        <button className="btn btn-primary mt-3" onClick={doLogin}>SIGN IN</button>
        <p className="mt-3">Don't have account? Please sign up for to receive latest news</p>
        <button className="btn btn-primary mt-3" onClick={signUpForm}>SignUp</button>

    </>)

}
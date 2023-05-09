import React from 'react'
import{useLocation} from "react-router-dom";
import { useState, useCallback } from 'react';
import {useNavigate} from 'react-router-dom'; 

export default function Profile (){
    const location = useLocation();
    

    // const name= location.state.name;
    // const email = location.state.email;
    // const password= location.state.password;
    
   const{name, email} = location.state.formState

    return(<>
    <h1>Profile</h1>
    <div className="alert alert-success bm-3">
        Welcome to A-Cool Engineering
    </div>
    <div>
        Here is your profile details
        <ul className = "list-group">
        <li className = "list-group-item">
            Name:{name}
        </li>
        <li className = "list-group-item">
            Email:{email}
        </li>
        </ul>
    
    </div>

    </>)
    
}
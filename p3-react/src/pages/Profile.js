import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';

const BASE_URL = "https://acoolengineering-express.onrender.com"

export default function Profile() {

    // const name= location.state.name;
    // const email = location.state.email;
    // const password= location.state.password;

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    //load current user
    useEffect(() => {

        // localStorage.getItem('id')
        if (localStorage.getItem('accessToken') !== null) {
            console.log(localStorage.getItem('accessToken'));
            const fetchProfile = async () => {
                let response = await axios.get(BASE_URL + "/api/users/profile", {
                    headers: {
                        authorization: "Bearer " + localStorage.getItem('accessToken')
                    }
                });

                console.log(response.data)

                setFirstName(response.data.first_name)
                setLastName(response.data.last_name)
                setEmail(response.data.email)
                localStorage.setItem("id", response.data.id)
            }
            fetchProfile();
            setLoggedIn(true)
        }
    }, [])

    // logout
    const logout = async () => {
        const response = await axios.post(BASE_URL + "/api/users/logout", {
            'refreshToken': localStorage.getItem('refreshToken')
        })

        if (response.data) {
            localStorage.clear()
        }
        setLoggedIn(false)
    }


    return (<>
        <div>
            {loggedIn === true ?
                <Container className="pt-5 mt-5">
                    <div className='text-center pt-5 mt-5'>
                        <h2>Welcome {firstName} {lastName}</h2>
                        <h2>Email: {email}</h2>
                        <Button className="mt-3 me-2" variant="dark"><Link className="text-decoration-none text-reset" to="/orders">View Past Orders</Link></Button>
                        <Button variant="outline-dark" className="mt-3" onClick={logout}><Link className="text-decoration-none text-reset" to="/login">Log Out</Link></Button>
                    </div>
                </Container>

                :
                null
            }

        </div>

    </>)

}
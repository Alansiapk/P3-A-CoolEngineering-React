import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap';

const BASE_URL = "https://acoolengineering-express.onrender.com"

export default function SignUp() {

    const [formState, setFormState] = useState({
        'email': '',
        'username': '',
        'password': '',
        'confirm_password': ''
    })

    const navigate = useNavigate();

    // form validation
    const [invalidName, setInvalidName] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false)

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const signup = async () => {
        let errors = [];

        if (!formState.username.match(/^[A-Za-z]+( [A-Za-z]+)*$/)) {
            setInvalidName(true);
            errors.push('first_name');
        }
        if (!formState.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            setInvalidEmail(true);
            errors.push('email');
        }
        if (!formState.password.match(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/)) {
            setInvalidPassword(true);
            errors.push('password');
        }
        if (formState.confirm_password !== formState.password) {
            setInvalidConfirmPassword(true);
            errors.push('confirm_password');
        }
        console.log(errors)

        if (errors.length === 0) {
            const response = await axios.post(BASE_URL + '/api/users/signup', formState)
            navigate('/login')
        }

    }
    return (<>
        <div>
            <Container>
                <div className="mt-5 pt-5 px-3 form-input mx-auto">
                    <h2 className='text-center'>SIGN UP</h2>
                    <p className='text-center'>Create your account to receive special promotion!</p>

                    <Form className="pt-3">
                        <div className="d-flex">
                            <Form.Control className="me-2"
                                type="text"
                                name="username"
                                value={formState.first_name}
                                onChange={updateFormField}
                                placeholder="username" />
                        </div>
                        {invalidName === true ? <Form.Text style={{ color: 'red' }}>Please enter a valid first and last name</Form.Text> : null}

                        <Form.Control className="mt-3"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formState.email}
                            onChange={updateFormField}
                        />
                        {invalidEmail === true ? <Form.Text style={{ color: 'red' }}>Please enter a valid email</Form.Text> : null}

                        <Form.Control className="mt-3"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onChange={updateFormField}
                        />
                        {invalidPassword === true ? <Form.Text style={{ color: 'red' }}>Please enter a valid password</Form.Text> : null}

                        <Form.Control className="mt-3"
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={formState.confirm_password}
                            onChange={updateFormField}
                        />
                        {invalidConfirmPassword === true ? <Form.Text style={{ color: 'red' }}>Please make sure your passwords match</Form.Text> : null}

                        <div className="d-grid mt-3">
                            <Button variant="dark" onClick={signup}>SIGN UP</Button>
                        </div>
                        <p className="text-center pt-5">Already have an account? <Link to="/login">Login now</Link></p>
                    </Form>

                </div>
            </Container>
        </div>


    </>)

}
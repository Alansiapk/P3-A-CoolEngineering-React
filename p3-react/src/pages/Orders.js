import React, { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = "https://3000-alansiapk-p3acoolengine-17bu1ep0dew.ws-us97.gitpod.io"

useEffect(() => {
    if (localStorage.getItem("id") !== null) {
        fetch();
    } else {
        setLoggedIn(false)
    }
}, [])

const fetch = async () => {
    const response = await axios.get(BASE_URL + "/api/orders", {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    });

    setOrderItems(response.data)
    console.log(response.data)
}
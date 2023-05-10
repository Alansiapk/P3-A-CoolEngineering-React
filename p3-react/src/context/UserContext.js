import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const BASE_URL = "https://3000-alansiapk-p3acoolengine-17bu1ep0dew.ws-us97.gitpod.io"

const UserContext = React.createContext({});

export default UserContext;


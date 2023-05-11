import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation, } from "react-router-dom";
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Form, Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";

const BASE_URL = "https://3000-alansiapk-p3acoolengine-17bu1ep0dew.ws-us97.gitpod.io"

export default function ProductListings() {

    const location = useLocation();
    const [applications, setApplications] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [tags, setTags] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            let response = await axios.get(BASE_URL + "/api/products");
            setProducts(response.data);

        }
        fetchProducts()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            let response = await axios.get(BASE_URL + "/api/products/applications");
            setApplications(response.data);
            console.log(response.data);
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            let response = await axios.get(BASE_URL + "/api/products/brands");
            setBrands(response.data);
            console.log(response.data)
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            let response = await axios.get(BASE_URL + "/api/products/categories");
            setCategories(response.data);
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            let response = await axios.get(BASE_URL + "/api/products/tags");
            setTags(response.data);
        }
        fetch()
    }, [])

    return (<>
        <div>
            <Container>
                {/* header */}
                <div className="text-center pt-5 pb-3">
                    <h5>Shop</h5>
                    <h2>Aircon Products</h2>
                </div>

                <Col lg={9}>
                    <Row className="g-5">
                        {products.map(p => <React.Fragment key={p.id}>
                            <Col xs={12} md={6} lg={6} xl={4}>
                                <Card id="card-animation" className="h-100 rounded-3 shadow">

                                    <Link to={"/product-details/" + p.id} className="text-reset text-decoration-none" >

                                        <Card.Img variant="top" src={p.image_url} />
                                        <div id="card-cta">
                                            <p className="text-center p-1" style={{ color: "white" }}>QUICK VIEW</p>
                                        </div>
                                        <Card.Body className="pt-0">
                                            <Card.Title>{p.name}</Card.Title>
                                            <Card.Text>
                                                <p>SGD {p.cost}</p>
                                                <p>Indoor Unit: {p.indoor_unit}</p>
                                                <p>Outdoor Unit: {p.outdoor_unit}</p>
                                            </Card.Text>

                                        </Card.Body>

                                    </Link>
                                </Card>
                            </Col>
                        </React.Fragment>)}
                    </Row>
                </Col>
            </Container>

        </div>

    </>)

}
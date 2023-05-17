import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation, } from "react-router-dom";
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiSearch, FiFilter } from "react-icons/fi";
import { Form, Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";

const BASE_URL = "https://acoolengineering-express.onrender.com"


export default function ProductListings() {

    const location = useLocation();
    const [applications, setApplications] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [tags, setTags] = useState([]);
    const [products, setProducts] = useState([]);

    const [nameSearch, setNameSearch] = useState("");
    const [categorySearch, setCategorySearch] = useState("");
    const [brandSearch, setBrandSearch] = useState("");
    const [applicationSearch, setApplicationSearch] = useState("");
    const [minCostSearch, setMinCostSearch] = useState("");
    const [maxCostSearch, setMaxCostSearch] = useState("");
    const [tagSearch, setTagSearch] = useState([]);


    const updateApplication = (e) => {
        setApplicationSearch(e.target.value)
    }

    const updateBrand = (e) => {
        setBrandSearch(e.target.value)
    }

    const updateCategory = (e) => {
        setCategorySearch(e.target.value)
    }

    const updateTag = (e) => {
        if (tagSearch.includes(e.target.value)) {
            let index = tagSearch.indexOf(e.target.value)
            // clone the array
            let cloned = tagSearch.slice()
            // modify the array
            cloned.splice(index, 1)
            setTagSearch(cloned)
        } else {
            let cloned = tagSearch.slice()
            cloned.push(e.target.value)
            setTagSearch(cloned)
        }
    }
    const search = async () => {
        let getSearch = {};

        if (nameSearch) {
            getSearch.name = nameSearch
        }

        if (minCostSearch) {
            getSearch.min_cost = minCostSearch
        }

        if (maxCostSearch) {
            getSearch.max_cost = maxCostSearch
        }

        if (applicationSearch && applicationSearch !== '0') {
            getSearch.application_id = applicationSearch
        }

        if (brandSearch && brandSearch !== '0') {
            getSearch.brand_id = brandSearch
        }

        if (categorySearch && categorySearch !== '0') {
            getSearch.category_id = categorySearch
        }

        if (tagSearch && tagSearch.length !== 0) {
            getSearch.tags = tagSearch
        }

        console.log(tags);
        console.log(tagSearch);
        console.log(products)

        const response = await axios.post(BASE_URL + "/api/products/search", getSearch)
        setProducts(response.data)
    }

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

    const resetSearch = async () => {
        setNameSearch("")
        setApplicationSearch("")
        setBrandSearch("")
        setCategorySearch("")
        setTagSearch([])
        setMinCostSearch("")
        setMaxCostSearch("")
      

        const response = await axios.get(BASE_URL + "/api/products")
        setProducts(response.data)
    }

    return (<>
        <div>
            <Container>

                {/* header */}
                <div className="text-center pt-5 pb-3">
                    <h5>Shop</h5>
                    <h2>Aircon Products</h2>
                </div>

                {/* Search bar */}
                <Col lg={3}>
                    <div className="input-box d-flex flex-row align-items-center ps-3 rounded mb-3">
                        
                        <button onClick={search}><FiSearch className="ms-1"/></button>

            
                        <Form.Control type="text" name="nameSearch" value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} placeholder="Search Aircon" className="py-2 border-0 bg-transparent rounded-0" />
                    </div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><FiFilter className="me-1" />Filter</Accordion.Header>
                            <Accordion.Body>

                                <div className="d-flex justify-content-between d-lg-block">
                                    <Form.Group className="mb-2 me-3 me-lg-0 search-box">
                                        <Form.Label>Min Cost</Form.Label>
                                        <Form.Control type="text" name="minCostSearch" value={minCostSearch} onChange={(e) => setMinCostSearch(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-2 search-box">
                                        <Form.Label>Max Cost</Form.Label>
                                        <Form.Control type="text" name="maxCostSearch" value={maxCostSearch} onChange={(e) => setMaxCostSearch(e.target.value)} />
                                    </Form.Group>
                                </div>

                                <div className="d-flex justify-content-between d-lg-block">
                                    <Form.Group className="mb-2 me-3 me-lg-0 search-box">
                                        <Form.Label>Application</Form.Label>
                                        <Form.Select value={applicationSearch} onChange={updateApplication}>
                                            {applications.map((m, index) =>
                                                <option key={m[index]} name="applicationSearch" value={m[0]}>
                                                    {m[1]}
                                                </option>
                                            )}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-2 search-box">
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Select value={brandSearch} onChange={updateBrand}>
                                            {brands.map((b) =>
                                                <option key={b[0]} name="brandSearch" value={b[0]}>
                                                    {b[1]}
                                                </option>
                                            )}
                                        </Form.Select>
                                    </Form.Group>
                                </div>

                                <div className="d-flex justify-content-between d-lg-block">
                                    <Form.Group className="mb-2 me-3 me-lg-0 search-box">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Select value={categorySearch} onChange={updateCategory}>
                                            {categories.map((c) =>
                                                <option key={c[0]} name="categorySearch" value={c[0]}>
                                                    {c[1]}
                                                </option>
                                            )}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3 search-box">
                                        <Form.Label>Features</Form.Label>
                                        {tags.map((f) =>
                                            <Form.Check key={f[0]}
                                                checked={tagSearch.includes(f[0].toString())}
                                                label={f[1]}
                                                value={f[0]}
                                                onChange={updateTag} />
                                        )}
                                    </Form.Group>
                                </div>
                                <div className="text-end">
                                    <Button onClick={search}>Search</Button>
                                    <Button onClick={resetSearch} className="ms-2">Reset</Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>


                <Col lg={9}>
                    <Row className="g-5">
                        {products.map(p => <React.Fragment key={p.id}>
                            <Col xs={12} md={6} lg={6} xl={4}>
                                <Card id="card-animation" className="h-100 rounded-3 shadow">

                                    <Link to={"/product-details/" + p.id} className="text-reset text-decoration-none" >

                                        <Card.Img variant="top" src={p.image_url} />
                                        {/* <div id="card-cta">
                                            <p className="text-center p-1" style={{ color: "white" }}>QUICK VIEW</p>
                                        </div> */}
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
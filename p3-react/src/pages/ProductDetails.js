import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const BASE_URL = "https://3000-alansiapk-p3acoolengine-17bu1ep0dew.ws-us97.gitpod.io"

export default function ProductDetails() {

    const [currentProduct, setCurrentProduct] = useState('');

    let { product_id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            let response = await axios.get(BASE_URL + '/api/products/detail/' + product_id);
            console.log(response.data)
            setCurrentProduct(response.data)
        }
        fetchProduct()
    }, [product_id])

    const addToCart = async () => {
        if (localStorage.getItem("accessToken")) {
             console.log(localStorage.getItem("accessToken"))
            // let accessToken = localStorage.getItem("accessToken")

            console.log(product_id)
            try {

                console.log(`/api/cart/${product_id}/add`)
                let response = await axios.post(BASE_URL + `/api/cart/${product_id}/add`,
                    {
                        "quantity": 1,
                        "product_id": product_id,
                        "user_id": localStorage.getItem("id")
                    },
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        }
                    })
                console.log(response.data);
                toast.success("Successfully added to cart");
                return true;
            } catch (error) {
                console.log(error)
                toast.error("You can't add anymore quantity");
                return false;
            }
        } else {
            toast.error('You have to log in to add to cart')
        }
    }



    return (<>
        <h1>Product Details</h1>
        <div>
            <Container className="p-5">
                <div className="mx-auto">
                    <nav aria-label="breadcrumb d-flex justify-content-center mb-2">
                        <ol className="breadcrumb d-flex justify-content-center">
                            <li className="breadcrumb-item text-secondary"><a className="text-reset text-decoration-none" href="/">Air-conditioning</a></li>
                            <li className="text-dark breadcrumb-item active" aria-current="page">{currentProduct.product?.name}</li>
                        </ol>
                    </nav>
                </div>

                {currentProduct.product?.map((a) =>
                    <img className="img-fluid" src={a.image_url} />
                )}
                <h2>{currentProduct.name}</h2>
                <p>SGD:{currentProduct.cost}</p>
                <p>Brand:{currentProduct.brand?.name}</p>
                <p>Category:{currentProduct.category?.name}</p>
                <p>Application:{currentProduct.application?.name}</p>
                <p>Features:{currentProduct.tag?.map((p, index) =>
                                    index === currentProduct.tag?.length - 1 ? <span>{p.name}</span> : <span>{p.name}, </span>
                                )}</p>
                <p>Description{currentProduct.description}</p>
                <p>Warranty:{currentProduct.warranty}</p>
               
                <div className="d-grid mt-3 mb-4">
                    <Button onClick={() => { addToCart() }}>ADD TO CART</Button>
                </div>
            </Container>
        </div>
    </>)

}
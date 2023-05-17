import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const BASE_URL = "https://acoolengineering-express.onrender.com"

export default function ShoppingCart() {

    const [loggedIn, setLoggedIn] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    // const [orderTotal, setOrderTotal] = useState(0);
    const [quantity, setQuantity] = useState({});

    useEffect(() => {
        if (localStorage.getItem("id") !== null) {
            fetch();
        } else {
            setLoggedIn(false)
        }
    }, [])

    const user_id = localStorage.getItem("id");
    const fetch = async () => {

        // const response = await axios.get(BASE_URL + "/api/cart",
        // {
        //     "user_id": user_id
        // },
        // {
        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem("accessToken")}`
        //     }
        // });

        let response = await axios.get(BASE_URL + `/api/cart/${user_id}`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })

        const quantity = {}
        for (let r of response.data) {
            quantity[r.product_id] = r.quantity
        }
        setQuantity(quantity)

        setCartItems(response.data)
        console.log(response.data)
        // console.log(orderSubTotal);
    }

    const deleteCartItem = async (productId) => {
        const response = await axios.post(BASE_URL + `/api/cart/${productId}/delete`, {"user_id": localStorage.getItem("id")}, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        if (response) {
            toast.success('Item removed from cart');
            await fetch();
            return true
        } else {
            toast.error('Something went wrong')
            return false;
        }
    }
    const updateFormField = (e) => {
        setQuantity({
            [e.target.name]: e.target.value
        })
    }

    const updateCartItem = async (productId, quantity) => {

        // const variantId = e.target.name
        // const quantity = quantit
        console.log('update', productId, quantity)
        const response = await axios.post(BASE_URL + `/api/cart/${productId}/update`, { "quantity": quantity, "user_id": localStorage.getItem("id") }, 
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        if (response) {
            toast.success('Product updated in cart');
            await fetch();
            return true
        } else {
            toast.error('Something went wrong')
            return false;
        }
    }

    return (<>
        <h1>Shopping Cart</h1>
        <div>
            <h2 className="display-5 text-center mt-4">My Cart</h2>
            {loggedIn ?
                <React.Fragment>
                    {cartItems && cartItems.length !== 0 ?

                        <Container className="p-5">
                            <div>
                                <hr />

                                {cartItems.map((c) => {
                                    return (
                                        <React.Fragment>
                                            <div className="d-flex">
                                                <div>
                                                    <img src={c.product?.image_url} className="cart-img" />
                                                </div>
                                                <div className="ps-5">
                                                    <h4 className="mb-4">{c.product?.name} ({c.color?.name})</h4>
                                                    <div style={{ maxWidth: '100px' }} className=" d-flex align-items-center">
                                                        <h6>Quantity: </h6><Form.Control size="sm" onChange={updateFormField} name={c.product_id} type="text" value={quantity[c.product_id]} style={{ width: '30px' }} />
                                                        <Button onClick={() => { updateCartItem(c.product_id, quantity[c.product_id]) }} name={c.product_id} size='sm' className="ms-2 ms-md-4">Update</Button>
                                                    </div>
                                                    <Button onClick={() => { deleteCartItem(c.product_id) }} variant='danger' size='sm' className="mt-3">Delete</Button>
                                                    <h6 className="mt-4">Price: S${c.product.cost * c.quantity} (S${c.product.cost} / item)</h6>
                                                </div>
                                            </div>
                                            <hr />
                                            <a className="btn btn-dark btn-outline-light btn-block"
                                                href={BASE_URL + "/api/checkout/" + user_id + '/checkout'}
                                            >Checkout</a>
                                        </React.Fragment>
                                    )
                                })}
                            </div>

                            <ToastContainer />
                        </Container>

                        :
                        <p className="py-4 lead text-center">There are no items in your shopping cart</p>
                    }
                </React.Fragment>
                :
                <p className="py-4 text-center">Please <Link to="/login">log in</Link> to view or add items in your shopping cart.</p>


            }

        </div>
    </>)

}
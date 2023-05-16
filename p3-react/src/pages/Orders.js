import React, { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../constant/Constant";

//d


export default function Orders() {

    const [loggedIn, setLoggedIn] = useState(true);
    const [orderItems, setOrderItems] = useState([]);
    
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

    return (
        <React.Fragment>
            <Container className="py-5 px-sm-0 px-lg-5">
                <h2 className="text-center">My Orders</h2>
                {loggedIn ?
                    <Table variant='dark' striped bordered hover>
                        <thead>
                            <tr>
                                <th>#Order ID</th>
                                <th>Order Date</th>
                                <th>Shipping Address</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        {orderItems.length ?
                            <tbody>
                                {orderItems.map(o => (
                                    <tr>
                                        <td>{o.id}</td>
                                        <td>{o.order_date.slice(0, 10)}</td>
                                        <td>{o.shipping_address_line_1}<br />{o.shipping_address_line_2}<br />{o.shipping_postal}</td>
                                        <td>{o.order_status_id.name}</td>

                                    </tr>
                                ))}
                            </tbody>
                            :
                            <p className="py-4 lead text-center">You have no order items</p>
                        }
                    </Table>
                    :
                    <p className="py-4 lead text-center">Please log in to view your Order History</p>
                }


            </Container>
        </React.Fragment>
    )

}
import React, { useContext } from 'react'
import {  Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { CartContext } from '../context/cartContext'
import '../css/styles.css'
import { products } from '../data/productsData'
const Home = () => {
    const cart = useContext(CartContext); 
    console.log(cart.items);
return (
    <>
        <Row className="justify-content-center my-card mt-3">
            {products.map((item,index) => {
                const { id, title, price } = item;
                return(
                    <>
                        <Col key={index} lg={3} md={4} sm={6} className="shadow p-3  d-flex flex-column">
                            <h4>{title}</h4>
                            <Row className="align-items-center">
                                <Col sm={6}>
                                    <h6>${price}</h6>
                                    <p className="text-secondary">
                                        In Cart: {cart.getTotalQuantity(id)}
                                    </p>
                                </Col>
                                <Col className="d-flex justify-content-between mb-3" sm={6}>
                                    <Button onClick={()=>cart.addOneToCart(id)} variant="info">+</Button>
                                    <Button onClick={()=>cart.removeOneFromCart(id)} variant="danger">-</Button>
                                </Col>
                            </Row>
                        </Col>
                    </>
                )
            })}
        </Row>
    </>
)   
}
export default Home
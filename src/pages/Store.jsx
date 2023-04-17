import React, { useContext } from 'react'
import {  Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { CartContext } from '../context/cartContext'
import '../css/styles.css'
import { products } from '../data/productsData'
const Home = () => {
    const data = useContext(CartContext); 
    console.log(data.items);
return (
    <>
        <Row className="justify-content-center my-card mt-3">
            {products.map((item,index) => {
                const { id, title, price } = item;
                return(
                    <>
                        <Col key={index} lg={3} className="shadow p-3 justifi-content-center align-items-center d-flex flex-column">
                            <h4>{title}</h4>
                            <h6>${price}</h6>
                            <Button onClick={()=>data.addOneToCart(id)} variant="success">Add to Cart</Button>
                        </Col>
                    </>
                )
            })}
        </Row>
    </>
)   
}
export default Home
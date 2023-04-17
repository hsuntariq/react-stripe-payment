import Button  from 'react-bootstrap/Button'
import React, { useContext, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Col, Modal, Nav, NavLink, Row } from 'react-bootstrap'
import { CartContext } from '../context/cartContext'
import { getProductData, products } from '../data/productsData'
const Header = () => {
    const [show, setShow] = useState(false);
    const cart = useContext(CartContext);
    // get the toal Quantity
    const productCount = cart.items.reduce((sum,product)=>sum + product.quantity, 0 )
return (
    <>
        <Navbar expand="sm" bg="light">
            <Navbar.Brand>Cart</Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse>
                    <Button onClick={()=>setShow(true)} className='ms-auto' variant="primary">Cart {productCount} item</Button>
                </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
                <h2>Your Cart</h2>
            </Modal.Header>
            <Modal.Body>
                {cart.items.length > 0 ? (
                    <>
                        {cart.items.map((item) => {
                            const { id, quantity } = item;
                            const prod = getProductData(id);
                            return (
                                <>
                                    <Row className="align-items-center">
                                        <Col sm={6}>
                                            <img style={{width:'60%'}} src={prod.image} alt="" />
                                        </Col>
                                    <Col sm={6}>
                                    <h4>{prod.title}</h4>
                                    <h6 className="text-secondary">
                                        total items: {quantity}
                                    </h6>
                                    <Button className="me-2" onClick={()=>cart.addOneToCart(id)} variant="info">+</Button>
                                    <Button onClick={()=>cart.removeOneFromCart(id)} variant="danger">-</Button>
                                    </Col>
                                    </Row>
                                </>
                                )
                        })}
                        <h4 className="text-success">
                            Subtotal:${cart.getTotalCost().toFixed(2)}
                        </h4>
                    </>
                ) : (
                        <>
                            <h3 className="text-danger">
                                Your cart is empty
                            </h3>
                        </>
                )
            }
            </Modal.Body>
        </Modal>
    </>
)
}

export default Header

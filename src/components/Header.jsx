import Button  from 'react-bootstrap/Button'
import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Modal, Nav, NavLink } from 'react-bootstrap'
const Header = () => {
    const [show, setShow] = useState(false);
return (
    <>
        <Navbar expand="sm" bg="light">
            <Navbar.Brand>Cart</Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse>
                    <Button onClick={()=>setShow(true)} className='ms-auto' variant="primary">Cart 0 item</Button>
                </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
                <h2>this is the header</h2>
            </Modal.Header>
            <Modal.Body>
                <h3>this is the modal body</h3>
            </Modal.Body>
        </Modal>
    </>
)
}

export default Header

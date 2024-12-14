import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false} sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">REACT<span style={{color:"red"}}>CRAFT</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={show}
              onHide={handleClose}
            >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3" onClick={handleClose}>
            <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
            <Nav.Link as={Link} to="/showinput">Show Input</Nav.Link>
            <Nav.Link as={Link} to="/toggleswitch">Toggle Switch</Nav.Link>
            <Nav.Link as={Link} to="/todolist">To Do App</Nav.Link>
            <Nav.Link as={Link} to="/fetchdata">Fetch Data</Nav.Link>
            <Nav.Link as={Link} to="/colorchanger">Color Changer</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      </Navbar>
    </>
  );
};

export default Header;


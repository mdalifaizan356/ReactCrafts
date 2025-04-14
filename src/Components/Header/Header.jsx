import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from "react-bootstrap";
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
          <Navbar.Brand as={Link} to="/">REACT<span style={{ color: "red" }}>CRAFT</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" show={show} onHide={handleClose} className="mt-5">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Project List</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-danger">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown title="Individual React Concepts" id="react-concepts-dropdown">
                <NavDropdown title="JSX" drop="end" id="useState-dropdown">
                  <NavDropdown.Item as={Link} to="/profilecard" onClick={handleClose}>ProfileCard</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Props" drop="end" id="useState-dropdown">
                  <NavDropdown.Item as={Link} to="/propsimplimentation" onClick={handleClose}>Props Implimentation</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Hooks" drop="end" id="useState-dropdown">
                  <NavDropdown title="useState" drop="end" id="useState-dropdown">
                    <NavDropdown.Item as={Link} to="/counter" onClick={handleClose}>Counter</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/showinput" onClick={handleClose}>Show Input</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/toggleswitch" onClick={handleClose}>Toggle Switch</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/todolist" onClick={handleClose}>To Do App</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/colorchanger" onClick={handleClose}>Color Changer</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="useEffect" drop="end" id="useEffect-dropdown">
                    <NavDropdown.Item as={Link} to="/fetchdata" onClick={handleClose}>Fetch Data</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/wheartherapp" onClick={handleClose}>Whearther App</NavDropdown.Item>
                  </NavDropdown>  
                </NavDropdown>

                <NavDropdown title="Events" drop="end" id="useState-dropdown">
                  <NavDropdown.Item as={Link} to="/profilecard" onClick={handleClose}>ProfileCard</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Conditional Rendring" drop="end" id="useState-dropdown">
                  <NavDropdown.Item as={Link} to="/profilecard" onClick={handleClose}>ProfileCard</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Props" drop="end" id="useState-dropdown">
                  <NavDropdown.Item as={Link} to="/profilecard" onClick={handleClose}>ProfileCard</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>


              <NavDropdown title="Combined React Concepts" id="react-concepts-dropdown">
                <NavDropdown title="Mini Projects" drop="end" id="useState-dropdown">
                  <NavDropdown.Item as={Link} to="/counter" onClick={handleClose}>Counter</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </>
  );
};
export default Header;

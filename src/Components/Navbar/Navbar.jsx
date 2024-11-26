import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ColorChanger from './../../Pages/ColorChanger/ColorChanger';

const VerticalNavbar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
            {/* <Nav.Link as={Link} to="/itemlist">Item List</Nav.Link> */}
            <Nav.Link as={Link} to="/showinput">Show Input</Nav.Link>
            <Nav.Link as={Link} to="/toggleswitch">Toggle Switch</Nav.Link>
            <Nav.Link as={Link} to="/colorchanger">Color Changer</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}; 

export default VerticalNavbar;

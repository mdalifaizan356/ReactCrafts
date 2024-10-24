import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Container fluid>
            <Row>
                <Col className="bg-secondary text-white p-3">
                <h1 className="text-center">Work Under Construction By Faizan</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;

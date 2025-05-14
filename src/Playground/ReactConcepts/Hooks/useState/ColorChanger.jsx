import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectInfo from '../../../../Components/ProjectInfo/ProjectInfo';

const ColorChanger = () => {
  const [color, setColor] = useState('');

  return (
    <Container fluid>
      <Row>
        <Col>
        <ProjectInfo projectId="useStateColorChanger" />
        </Col>
      </Row>
      <Row className='mt-5 w-50 d-flex justify-content-center align-items-center mx-auto'>
          <Col className="text-center p-4" style={{ backgroundColor: color, height: '50vh'}}>
            <Form.Control
              type="text"
              placeholder="Enter a color name"
              onChange={(e) => setColor(e.target.value)}
            />
            <p className="mt-3">Background color: {color}</p>
          </Col>
      </Row>
    </Container>
  );
};

export default ColorChanger;

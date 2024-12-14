import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectInfo from './../../Components/ProjectInfo/ProjectInfo';

const ColorChanger = () => {
  const [color, setColor] = useState('white');
  const projectDescription ="This is a simple counter project where you can increment, decrement, and reset the count.";


  return (
    <Container fluid>
      <Row>
        <Col>
          <ProjectInfo
          projectName="Color Changer"
          projectDescription={projectDescription}
        />
        </Col>
      </Row>
      <Row className='mt-5'>
          <Col className="text-center p-4" style={{ backgroundColor: color, height: '50vh' }}>
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

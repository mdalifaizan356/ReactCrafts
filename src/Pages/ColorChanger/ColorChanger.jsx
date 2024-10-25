import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ColorChanger = () => {
  const [color, setColor] = useState('white');

  return (
    <Container className="text-center p-4" style={{ backgroundColor: color, height: '50vh' }}>
      <Row>
        <Col>
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

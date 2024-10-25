import { useState } from 'react';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Counter = () => {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    setNumber(number - 1);
  }

  function reset() { 
    setNumber(0);
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="bg-danger text-white text-center p-3">
          <h1>{number}</h1>
          <Button variant="outline-primary" className="m-2" onClick={increment}>Increment</Button>
          <Button variant="outline-primary" className="m-2" onClick={decrement}>Decrement</Button>
          <Button variant="outline-primary" className="m-2" onClick={reset}>Reset</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;

import { useState } from "react";
import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectInfo from '../../../../Components/ProjectInfo/ProjectInfo';

function Counter() { 
  const [count, setCount] = useState(0);
  const [continueIncreement, setIncreement] = useState(true);
  const [continueDecreement, setDecreement] = useState(true);
  
  function increment() {
    if (continueIncreement) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      if (continueDecreement) {
        setCount(count - 1);
      }
    } else {
      alert("Count cannot go below 0");
    }
  }

  function reset() {
    setCount(0);
  }

  function increementFlow() {
    setIncreement(!continueIncreement);
  }

  function decreementFlow() {
    setDecreement(!continueDecreement);
  }

  return (
    <Container fluid>
    <Row>
      <Col>
      <ProjectInfo projectId="counter" />
      </Col>
    </Row>
      
      <Row className="mt-5">
        <Col>
          <h1 style={{ textAlign: "center" }}>{count}</h1>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
            <Button variant="outline-warning" className="m-2" onClick={increment}>Increment</Button>
            <Button variant="outline-warning" className="m-2" onClick={reset}>Reset</Button>
            <Button variant="outline-warning" className="m-2" onClick={decrement}>Decrement</Button><br/>
          </div>
          
          <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
            <Button className="m-2" style={{ backgroundColor: continueIncreement ? "red" : "", color: continueIncreement ? "white" : "",}}onClick={increementFlow}>
              {continueIncreement ? "Stop Increment" : "Continue Increment"}
            </Button><br/>
            <Button className="m-2" style={{ backgroundColor: continueDecreement ? "red" : "", color: continueDecreement ? "white" : "",}}onClick={decreementFlow}>
              {continueDecreement ? "Stop Decrement" : "Continue Decrement"}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;

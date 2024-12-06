import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowInput = () => {
    const [currentInput, setInput] = useState("");
    const [show, setShow] = useState(false);

    const viewHandler = () => {
        setShow(true);
      };
    
      const handleClose = () => {
        setShow(false);
      };

    return (
        <Container fluid>
        <Row>
        <Col>
        {(
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Advance Counter</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
        </Col>
      </Row>
      <Row>
        <Col className="p-2" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white" }}>Show Input</h1>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col md={12} className="p-3">
          <Button style={{width:"100%"}} onClick={viewHandler}>Click For Description</Button>
        </Col>
      </Row>
      <Row>
            <Col md={10} className="p-3 border mt-0" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            padding: "10px",
                            minHeight: "50px",
                            marginBottom: "10px",
                            backgroundColor: "#f9f9f9",
                            color: "#333",
                            whiteSpace: "pre-line"
                        }}
                    >
                        {currentInput || "Your output will appear here"}
                    </div>
                    
                    <textarea
                        rows="3"
                        cols="30"
                        placeholder="Type Here"
                        value={currentInput}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default ShowInput;

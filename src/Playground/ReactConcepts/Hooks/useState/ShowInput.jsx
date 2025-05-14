import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectInfo from '../../../../Components/ProjectInfo/ProjectInfo';


const ShowInput = () => {
    const [currentInput, setInput] = useState("");
    const [show, setShow] = useState(false);
    const projectDescription ="This is a simple counter project where you can increment, decrement, and reset the count.";

    return (
        <Container fluid>
        <Row>
      <Col>
        <ProjectInfo projectId="useStateShowInput" />
      </Col>
    </Row>
    <Row className="mt-5">
            <Col className="p-3  mt-0" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
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

import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const ShowInput = () => {
  const [currentInput, setInput]=useState("");
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="bg-dark text-white text-center p-3">
        <textarea rows="5" cols="30" type='textarea' placeholder='Type Here' value={currentInput} onChange={(e)=>setInput(e.target.value)}/>
        <textarea rows="5" cols="30" type='textarea' placeholder='See Here' value={currentInput}/>
        </Col>
      </Row>
    </Container>
   
  ) 
}

export default ShowInput





//  <>
//       <textarea rows="2" cols="100" type='textarea' placeholder='Type Here' value={currentInput} onChange={(e)=>setInput(e.target.value)}/>
//       <p></p>
//     </>
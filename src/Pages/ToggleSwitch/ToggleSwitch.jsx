import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import offBulb from "../../../public/offBulb.png"
import onBulb from "../../../public/onBulb.png"



const ToggleSwitch = () => {
  const [isOff, isOn]=useState(false);
  const [BtnOff, BtnOn]=useState("Off");

  const handleButton =()=>{
    isOn(!isOff);
    BtnOn (isOff? "Off" : "On");
  }


  return (
    <Container fluid>
    <Row>
      <Col className="p-2" style={{textAlign:"center"}}>
        <h1 style={{color:"white"}}>Toggle Switch</h1>
      </Col>
    </Row>
    <Row className="mt-2">
      <Col md={2} className="p-3" >
        <h3>Description</h3>
      </Col>
      <Col md={10} className="p-3" style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img src = {isOff ? offBulb : onBulb}  width="20%" />
        <Button variant="outline-primary" className="m-2" type='button' onClick={handleButton}>{BtnOff}</Button>
      </Col>
    </Row>
  </Container>

  )
}

export default ToggleSwitch;
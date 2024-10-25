import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
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
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="bg-danger text-white text-center p-3">
        <img src = {isOff ? offBulb : onBulb}  width="50%" />
        <Button variant="outline-primary" className="m-2" type='button' onClick={handleButton}>{BtnOff}</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ToggleSwitch



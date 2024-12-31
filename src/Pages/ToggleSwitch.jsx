import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import offBulb from "../../public/offBulb.png"
import onBulb from "../../public/onBulb.png"
import ProjectInfo from '../Components/ProjectInfo/ProjectInfo';



const ToggleSwitch = () => {

  const [isOff, isOn]=useState(false);
  const [BtnOff, BtnOn]=useState("Off");
  const projectDescription ="This is a simple counter project where you can increment, decrement, and reset the count.";


  const handleButton =()=>{
    isOn(!isOff);
    BtnOn (isOff? "On" : "Off");
  }


  return (
    <Container fluid>
    <Row>
      <Col>
        <ProjectInfo
        projectName="Toggle Button"
        projectDescription={projectDescription}
      />
      </Col>
    </Row>
    <Row className="mt-5  d-flex justify-content-center align-items-center mx-auto">
      <Col md={10} className="p-3" style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img src = {isOff ? offBulb : onBulb}  width="15%" />
        <Button variant="outline-primary" className="m-2 bg-danger w-25 " type='button' onClick={handleButton}>{BtnOff}</Button>
      </Col>
    </Row>
  </Container>

  )
}

export default ToggleSwitch;
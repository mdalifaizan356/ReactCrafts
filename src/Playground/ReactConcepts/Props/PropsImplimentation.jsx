import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectInfo from "../../../Components/ProjectInfo/ProjectInfo";
import Parent from "../../../Components/PropsComponent/Parent";

const PropsImplimentation = ({products}) => {
  return (
    <Container fluid>
    <Row>
      <Col>
      <ProjectInfo projectId="propsimplimentation" />
      </Col>
    </Row>
      
      <Row className="mt-5">
        <Col>
          <Parent/>
        </Col>
      </Row>
    </Container>
  )
}

export default PropsImplimentation
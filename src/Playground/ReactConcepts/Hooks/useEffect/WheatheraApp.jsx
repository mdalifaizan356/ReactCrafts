import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import axios from "axios";
import ProjectInfo from "../../../../Components/ProjectInfo/ProjectInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const WheartherApp = () => {
  const [search, setSearch] = useState("")

  return (
    <>
      <Container fluid>
        <Row>
            <Col>
                <ProjectInfo projectId="wheatherApp" />
            </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-5">
            <input type="search" placeholder="Enter City" className="form-control flex-grow-1" value={search} style={{ minWidth: "50px" }} readOnly />
          </Col>
        </Row>

        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WheartherApp;
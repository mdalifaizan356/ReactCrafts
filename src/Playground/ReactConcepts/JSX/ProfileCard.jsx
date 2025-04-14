import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectInfo from '../../../Components/ProjectInfo/ProjectInfo';

const ProfileCard = () => {
  return (
    <Container fluid>
        <Row>
          <Col>
          <ProjectInfo projectId="profilecard" />
          </Col>
        </Row>
          
          <Row className="mt-5">
            <Col>
              <h1 style={{ textAlign: "center" }}>Profile Card</h1>
            </Col>
          </Row>
        </Container>
  )
}

export default ProfileCard
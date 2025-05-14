import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectInfo from '../../../Components/ProjectInfo/ProjectInfo';

const ProfileCard = () => {
  return (
    <Container fluid>
        <Row>
          <Col>
          <ProjectInfo projectId="JSX" />
          </Col>
        </Row>
          
          <Row className="mt-5">
            <Col className="d-flex justify-content-center vh-50">
              <div className="card shadow" style={{ width: "22rem", borderRadius: "20px"}}>

                <div className="card-header bg-danger text-white text-center position-relative" style={{ height: "80px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
                  <img src="../../../../public/faizan.jpg" alt="Profile" className="rounded-circle border border-white position-absolute top-100 start-50 translate-middle" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                </div>

                <div className="card-body text-center mt-5">
                  <h5 className="card-title fw-bold">MERN Stack Developer</h5>
                  <p className="text-muted">Tech Job-Seeker</p>
                  <div className="d-flex justify-content-center gap-3 fs-4 my-3">
                    <a href="#" className="text-primary"><i className="bi bi-linkedin">Hii</i></a>
                    <a href="#" className="text-dark"><i className="bi bi-github"></i>Helo</a>
                    <a href="#" className="text-danger"><i className="bi bi-envelope-fill">Bolo</i></a>
                  </div>
                  <button className="btn btn-primary px-4 rounded-pill">Message</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
  )
}

export default ProfileCard
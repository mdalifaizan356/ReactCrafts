import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { descriptions } from "../../Data/Description";

const ProjectInfo = ({ projectId }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const project = descriptions.find(item => item.id === projectId);
  if (!project) return <div>Project description not found.</div>;

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      {/* <h2>{project.title}</h2> */}
      <Button variant="primary" onClick={handleShow} style={{ width: "20%" }}>
        {/* Click for Description */}
        {project.title}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>{project.conceptSummry}</p>
          <p>{project.description}</p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ProjectInfo;

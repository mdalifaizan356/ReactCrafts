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
      <h2>{project.DemoName}</h2>
      <Button variant="primary" onClick={handleShow} style={{ width: "100%" }}>
        Click for Description
        {/* {project.title} */}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{project.UseConcept}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{ whiteSpace: 'pre-wrap'}}>{project.ConceptSummry}</p>
          <p style={{ whiteSpace: 'pre-wrap'}}>{project.DemoSummry}</p>
        </Modal.Body> 
      </Modal>
    </div>
  );
};

export default ProjectInfo;

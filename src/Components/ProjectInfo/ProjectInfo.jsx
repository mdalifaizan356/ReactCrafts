import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ProjectInfo({ projectName, projectDescription }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{projectName}</h2>
      <Button variant="primary" onClick={handleShow} style={{width:"100%"}}>Click for Description</Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{projectName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{projectDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectInfo;

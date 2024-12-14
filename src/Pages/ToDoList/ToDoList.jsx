import { useState } from "react";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ProjectInfo from "./../../Components/ProjectInfo/ProjectInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoList = () => {
  const projectDescription = "TO DO APP";
  const currentTime = new Date();

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addToDo=(e)=>{
    e.preventDefault();
    setTask([...task, newTask]);
    setNewTask(" ")
    console.log(task);
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <ProjectInfo
            projectName="Task Tracker"
            projectDescription={projectDescription}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <Form onSubmit={addToDo} className="w-100">
            <Form.Group className="mb-3 d-flex " controlId="formTask">
              {/* <Form.Label>Enter New Task</Form.Label> */}
              <Form.Control
              style={{ padding: "10px 20px", border:"none"}}
                type="txt"
                placeholder="Enter New Task"
                name="Email"
                value={newTask}
                onChange={(e)=>(setNewTask(e.target.value))}
                required
              />
              <button type="submit" style={{ padding: "10px 20px", border:"none"}}>Add</button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mt-2">
      <Col className="d-flex flex-column align-items-center justify-content-center">
      {task.map((item, index)=>(
        <div key={index} className=" w-100 d-flex align-items-center flex-column justify-content-center mt-1 border border-dark p-1">
          <div style={{alignContent:"center"}}>
            <h3 style={{ padding: "10px 20px", border:"none"}}>{item}</h3> 
            <p>{(currentTime.toLocaleTimeString())}</p>
          </div>
          <div className=" d-flex align-items-center  justify-content-center mt-1 border border-dark">
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}}>Edit</button>
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}}>Save</button>
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}}>Complete</button>
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}}>Panding</button>
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}}>Delete</button>
          </div>
        </div>
      ))}
      </Col>
      </Row>
    </Container>
  );
};

export default ToDoList;

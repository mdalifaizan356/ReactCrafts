import { useState } from "react";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ProjectInfo from "../../../../Components/ProjectInfo/ProjectInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoList = () => {
  const projectDescription = "TO DO APP";
  const currentTime = new Date();

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask=(e)=>{
    e.preventDefault();
    const taskItems = {name: newTask, completed: false, pending: null}
    setTasks([...tasks, taskItems]);
    setNewTask("")
  }

  const editTask = (e, indexToEdit) => {
    e.preventDefault();
    const taskItems = {name: newTask, completed: false, pending: null}
    const updatedTasks = tasks.map((task, index)=>{
      if(index===indexToEdit){
        return { ...task, taskItems };
      }
      else{
        return task;
      }
    });
    setTasks(updatedTasks);
    alert("Task is completed");
  };

  const completeTask = (indexToComplete) => {
    const updatedTasks = tasks.map((task, index)=>{
      if(index===indexToComplete){
        return { ...task, completed: true, pending:false };
      }
      else{
        return task;
      }
    });
    setTasks(updatedTasks);
    alert("Task is completed");
  };

  const pendingTask = (indexToPending) => {
    const updatedTasks = tasks.map((task, index)=>{
      if(index===indexToPending){
        return { ...task, pending: true, completed:false };
      }
      else{
        return task;
      }
    });
    setTasks(updatedTasks);
    alert("Task is completed");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index)=>{
    return index !== indexToDelete;
    });
    setTasks(updatedTasks);
    alert("Task is Delete");
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <ProjectInfo
            projectId="useStateToDoList"/>
        </Col>
      </Row>

      <Row className="mt-5 w-100">
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <Form onSubmit={addTask} className="w-100">
            <Form.Group className="mb-3 d-flex align-items-center justify-content-center" controlId="formTask">
              <Form.Control
              className="w-25"
              style={{ padding: "10px 20px", color:"black", backgroundColor:"white", border:"none", borderRadius: "0 0 0 0"}}
                type="txt"
                placeholder="Enter New Task"
                value={newTask}
                onChange={(e)=>(setNewTask(e.target.value))}
                required

              />
              <button type="submit" style={{padding: "10px 20px", border: "none", backgroundColor: "crimson", color: "white", position: "relative", overflow: "hidden", }}>
                  <span style={{position: "absolute", top: 0, bottom: 0,left: "-10px", width: "20px", height: "100%", backgroundColor: "white",border: "2px solid white ", borderRadius: "50%"}}></span>
                  Add
                </button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mt-2">
      <Col className="d-flex align-items-center justify-content-center flex-wrap">
      {tasks.map((item, index)=>(
        <div key={index}  className={`w-30 d-flex align-items-center flex-column justify-content-center m-1 border border-dark p-1 rounded ${item.pending ? "bg-danger" : item.completed ? "bg-success" : "bg-primary"}`}>
          <div style={{alignContent:"center"}}>
            {/* <h3 style={{ padding: "10px 20px", border:"none"}}>{item.name}</h3>  */}

            <Form onSubmit={editTask} className="w-100">
            <Form.Group className="mb-3 d-flex align-items-center justify-content-center" controlId="formTask">
              <Form.Control
              className="w-100"
              style={{ padding: "10px 20px", color:"black", backgroundColor:"white", border:"none", borderRadius: "0 0 0 0"}}
                type="txt"
                placeholder={item.name}
                value=""
                onChange={(e)=>(setTask(e.target.value))}
                required

              />
            {/* <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}} onClick={() => editTask(index)}>Edit</button> */}
              
            </Form.Group>
          </Form>
          
            <p>{(currentTime.toLocaleTimeString())}</p>
          </div>
          <div className=" d-flex align-items-center  justify-content-center mt-1">
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}} onClick={() => editTask(index)}>Edit</button>
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}} disabled={item.completed} onClick={() => completeTask(index)}>{item.completed ? "Completed" : "Complete"}</button>
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}} disabled={item.pending||item.completed} onClick={() => pendingTask(index)}>Panding</button>
            <button type="submit" style={{ padding: "5px 10px", margin:"2px", border:"none"}} onClick={() => deleteTask(index)} >Delete</button>
          </div>
        </div>
      ))}
      </Col>
      </Row>
    </Container>
  );
};

export default ToDoList;


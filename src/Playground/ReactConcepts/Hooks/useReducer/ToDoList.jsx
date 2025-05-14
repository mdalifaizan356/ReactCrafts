// ToDoListWithUseReducer.jsx
import React, { useReducer, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectInfo from "../../../../Components/ProjectInfo/ProjectInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { name: action.payload, completed: false, pending: null }];

    case "EDIT_TASK":
      return state.map((task, index) =>
        index === action.index ? { ...task, name: action.payload } : task
      );

    case "COMPLETE_TASK":
      return state.map((task, index) =>
        index === action.index ? { ...task, completed: true, pending: false } : task
      );

    case "PENDING_TASK":
      return state.map((task, index) =>
        index === action.index ? { ...task, pending: true, completed: false } : task
      );

    case "DELETE_TASK":
      return state.filter((_, index) => index !== action.index);

    default:
      return state;
  }
};

const ToDoListWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const currentTime = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      dispatch({ type: "EDIT_TASK", index: editIndex, payload: newTask });
      setEditIndex(null);
    } else {
      dispatch({ type: "ADD_TASK", payload: newTask });
    }
    setNewTask("");
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <ProjectInfo projectId="useReducerToDoList" />
        </Col>
      </Row>

      <Row className="mt-5 w-100">
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group className="mb-3 d-flex align-items-center justify-content-center" controlId="formTask">
              <Form.Control
                className="w-25"
                style={{ padding: "10px 20px", color: "black", backgroundColor: "white", border: "none" }}
                type="text"
                placeholder="Enter Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                required
              />
              <button
                type="submit"
                style={{ padding: "10px 20px", border: "none", backgroundColor: "crimson", color: "white" }}
              >
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col className="d-flex align-items-center justify-content-center flex-wrap">
          {state.map((item, index) => (
            <div
              key={index}
              className={`w-30 d-flex align-items-center flex-column justify-content-center m-1 border border-dark p-1 rounded ${
                item.pending ? "bg-danger" : item.completed ? "bg-success" : "bg-primary"
              }`}
            >
              <div>
                <h4>{item.name}</h4>
                <p>{currentTime.toLocaleTimeString()}</p>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-1">
                <button
                  style={{ padding: "5px 10px", margin: "2px", border: "none" }}
                  onClick={() => {
                    setNewTask(item.name);
                    setEditIndex(index);
                  }}
                >
                  Edit
                </button>
                <button
                  style={{ padding: "5px 10px", margin: "2px", border: "none" }}
                  disabled={item.completed}
                  onClick={() => dispatch({ type: "COMPLETE_TASK", index })}
                >
                  {item.completed ? "Completed" : "Complete"}
                </button>
                <button
                  style={{ padding: "5px 10px", margin: "2px", border: "none" }}
                  disabled={item.pending || item.completed}
                  onClick={() => dispatch({ type: "PENDING_TASK", index })}
                >
                  Pending
                </button>
                <button
                  style={{ padding: "5px 10px", margin: "2px", border: "none" }}
                  onClick={() => dispatch({ type: "DELETE_TASK", index })}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoListWithUseReducer;

import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ExpenceTraker = () => {
    const [expences, setExpense] = useState([])
    const [exName, setExName]=useState("");
    const [exAmount, setExAmount]=useState("");
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleSubmit = (e)=>{
        e.preventDefault();
        if(exName && exAmount){
            setExpense([...expences, {exName, exAmount}]);
            setExName("");
            setExAmount("");
        }
    };
    console.log(expences)
  return (
    <>
    <Container>
        <Row>
            <Col><Button variant="primary" onClick={handleShow} className='mt-5 mb-2'>Add Expense</Button></Col>
            <Col>
                <h1>Card</h1>
                {
                    expences &&
                    expences.map((data, index)=>(
                    <Card className='mb-2' style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Product : {data.exName}</Card.Title>
                    <Card.Title>Amount : {data.exName}</Card.Title>
                    </Card.Body>
                    </Card>
                    ))
                }
            </Col>
            <Col>
            <h1>Table</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl/No</th>
          <th>Expence Name</th>
          <th>Expence Amount</th>
        </tr>
      </thead>
      <tbody>
      {
        expences &&
        expences.map((data, index)=>(
            <>
        <tr>
          <td>{index + 1}</td>
          <td>{data.exName}</td>
          <td>{data.exAmount}</td>
        </tr>
        </>
      ))}
      </tbody>
    </Table>
            </Col>
        </Row>
    </Container>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='mb-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expence Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Expence Name" value={exName} onChange={(e)=>setExName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Expence Amount</Form.Label>
        <Form.Control type="number" placeholder="Enter Amount" value={exAmount} onChange={(e)=>setExAmount(e.target.value)}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Add Expense</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ExpenceTraker



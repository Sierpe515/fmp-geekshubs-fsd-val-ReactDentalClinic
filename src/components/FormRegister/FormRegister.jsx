import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const FormRegister = () => {

  const [valor, setValor] = useState({
    name: "",
    surname: "",
    email: "",
    password: ""
  });
  
  const {name, surname, email, password} = valor;

  const newValue = ({target})=>{
    const {name, value}=target
    setValor({
        ...valor,
        [name]:value
        }
    )
  }

const checkValue = (event)=>{
  event.preventDefault();
}

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={newValue} />
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter surname" name="surname" value={surname} onChange={newValue} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={newValue} />
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={newValue} />
        </Form.Group>
      </Row>

      <div className="d-grid gap-2">
      <Button variant="primary" type="submit" className="logRegButton" onClick={checkValue}>
        Submit
      </Button>
      </div>
    </Form>
    
  )
}
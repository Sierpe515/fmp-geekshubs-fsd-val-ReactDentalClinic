import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormLogin = () => {

  let user = {
    email: "",
    password: ""
}

  const [valor, setValor] = useState(user);
  const {email, password} = valor;

  const newValue = ({target})=>{
    console.log(valor);
    const {name, value}=target
    setValor({
        ...valor,
        [name]:value
        }
    )
}

const checkValue = (event)=>{
  event.preventDefault();
  console.log(valor)
}

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={newValue} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={newValue} />
      </Form.Group>
      
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" className="logRegButton" onClick={checkValue}>
            Submit
        </Button>
      </div>
    </Form>
  )
}
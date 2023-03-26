import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormLogin = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const newCredentials = (e)=>{
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
}

const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const credentialsValidate = (e) => {
  switch (e.target.name) {
    case "email":

      if (!credentials.email.match(emailRegex)) {
        setCredentialsError((prevState) => ({
              ...prevState,
              emailError : "Enter a valid email",
            }))
      } else {
        setCredentialsError((prevState) => ({
              ...prevState,
              emailError : "",
            }))
      }

      break;

    case "password":

      if (credentials.password.length < 8) {
        setCredentialsError((prevState) => ({
          ...prevState,
          passwordError : "The password must have at least eight characters",
        }));
      } else if (!credentials.password.match(lowerCaseLetters)) {
        setCredentialsError((prevState) => ({
          ...prevState,
          passwordError : "The password must have at least one lowercase letter",
        }));
      } else if (!credentials.password.match(upperCaseLetters)) {
        setCredentialsError((prevState) => ({
          ...prevState,
          passwordError : "The password must have at least one uppercase letter",
        }));
      } else if (!credentials.password.match(numbers)) {
        setCredentialsError((prevState) => ({
          ...prevState,
          passwordError : "The password must have at least one number",
        }));
      }
      else {
          setCredentialsError((prevState) => ({
              ...prevState,
              passwordError : "",
            }));
      }

      break;

    default:
  }
};

const checkValue = (event)=>{
  event.preventDefault();
}

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          placeholder="Enter email" 
          onChange={(e) => newCredentials(e)}
          onBlur={(e) => credentialsValidate(e)} />
        <Form.Text>{credentialsError.emailError}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={(e) => newCredentials(e)} 
          onBlur={(e) => credentialsValidate(e)} />
        <Form.Text>{credentialsError.passwordError}</Form.Text>
      </Form.Group>
      
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" className="logRegButton" onClick={checkValue}>
            Submit
        </Button>
      </div>
    </Form>
  )
}
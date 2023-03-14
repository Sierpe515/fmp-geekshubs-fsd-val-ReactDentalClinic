import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Z2 from "../../image/z2.png";
import "./Register.css";

export const Register = () => {
  const [dataUser, setDataUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [dataUserError, setDataUserError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    passwordError: "",
  });

  const newDataUser = (e) => {
    setDataUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const dataUserValidate = (e) => {
    switch (e.target.name) {
      case "name":
        if (dataUser.name.length < 1) {
          setDataUserError((prevState) => ({
            ...prevState,
            nameError: "The name field cannot be empty",
          }));
        } else {
          setDataUserError((prevState) => ({
            ...prevState,
            nameError: "",
          }));
        }

        break;

      case "surname":
        if (dataUser.surname.length < 1) {
          setDataUserError((prevState) => ({
            ...prevState,
            surnameError: "The surname field cannot be empty",
          }));
        } else {
          setDataUserError((prevState) => ({
            ...prevState,
            surnameError: "",
          }));
        }

        break;

      case "email":
        if (!dataUser.email.match(emailRegex)) {
          setDataUserError((prevState) => ({
            ...prevState,
            emailError: "Enter a valid email",
          }));
        } else {
          setDataUserError((prevState) => ({
            ...prevState,
            emailError: "",
          }));
        }

        break;

      case "password":
        if (dataUser.password.length < 8) {
          setDataUserError((prevState) => ({
            ...prevState,
            passwordError: "The password must have at least eight characters",
          }));
        } else if (!dataUser.password.match(lowerCaseLetters)) {
          setDataUserError((prevState) => ({
            ...prevState,
            passwordError:
              "The password must have at least one lowercase letter",
          }));
        } else if (!dataUser.password.match(upperCaseLetters)) {
          setDataUserError((prevState) => ({
            ...prevState,
            passwordError:
              "The password must have at least one uppercase letter",
          }));
        } else if (!dataUser.password.match(numbers)) {
          setDataUserError((prevState) => ({
            ...prevState,
            passwordError: "The password must have at least one number",
          }));
        } else {
          setDataUserError((prevState) => ({
            ...prevState,
            passwordError: "",
          }));
        }

        break;

      default:
        console.log("Something has gone wrong");
    }
  };

  const checkValue = (event) => {
    event.preventDefault();
    console.log(dataUser);
  };

  return (
    <Container fluid className="homeContainer">
      <Row className="d-flex justify-content-center">
        <Col xxl={4} xl={5} sm={7} className="my-3">
          <img src={Z2} alt="Z2" className="z2" />
          <div className="logRegContainer">
            <h1 className="text-center">Register</h1>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    onBlur={(e) => dataUserValidate(e)}
                  />
                  <Form.Text>{dataUserError.nameError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter surname"
                    name="surname"
                    onChange={newDataUser}
                    onBlur={(e) => dataUserValidate(e)}
                  />
                  <Form.Text>{dataUserError.surnameError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={newDataUser}
                    onBlur={(e) => dataUserValidate(e)}
                  />
                  <Form.Text>{dataUserError.emailError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={newDataUser}
                    onBlur={(e) => dataUserValidate(e)}
                  />
                  <Form.Text>{dataUserError.passwordError}</Form.Text>
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="logRegButton"
                  onClick={checkValue}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

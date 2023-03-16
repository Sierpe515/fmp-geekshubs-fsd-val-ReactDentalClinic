import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Z1 from "../../image/z1.png";
import "./Login.css";
import { logMe } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { useJwt } from "react-jwt";

export const Login = () => {

  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const newCredentials = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const credentialsValidate = (e) => {
    // switch (e.target.name) {
    //   case "email":
    //     if (!credentials.email.match(emailRegex)) {
    //       setCredentialsError((prevState) => ({
    //         ...prevState,
    //         emailError: "Enter a valid email",
    //       }));
    //     } else {
    //       setCredentialsError((prevState) => ({
    //         ...prevState,
    //         emailError: "",
    //       }));
    //     }

    //     break;

    //   case "password":
    //     if (credentials.password.length < 8) {
    //       setCredentialsError((prevState) => ({
    //         ...prevState,
    //         passwordError: "The password must have at least eight characters",
    //       }));
    //     } else if (!credentials.password.match(lowerCaseLetters)) {
    //       setCredentialsError((prevState) => ({
    //         ...prevState,
    //         passwordError:
    //           "The password must have at least one lowercase letter",
    //       }));
    //     } else if (!credentials.password.match(upperCaseLetters)) {
    //       setCredentialsError((prevState) => ({
    //         ...prevState,
    //         passwordError:
    //           "The password must have at least one uppercase letter",
    //       }));
    //     } else if (!credentials.password.match(numbers)) {
    //       setCredentialsError((prevState) => ({
    //         ...prevState,
    //         passwordError: "The password must have at least one number",
    //       }));
    //     } else {
    //       setCredentialsError((prevState) => ({
    //         ...prevState,
    //         passwordError: "",
    //       }));
    //     }

    //     break;

    //   default:
    //     console.log("Something has gone wrong");
    // }
  };

  // const checkValue = (event) => {
  //   event.preventDefault();
  //   console.log(credentials);
  // };

  const logIn = () => {

    logMe(credentials)
        .then(
            respuesta => {

              //HACER CONSOLE.LOG PARA VER QUÉ DEVUELVE MI BACKEND

              // let decodificado = decodeToken(respuesta.data)
              // (respuesta.data) si mi repuesta devuelve eso

                let datosBackend = {
                    token: respuesta.data.token,
                // EN NUESTRO CASO SERÍA: token: respuesta.data (se guarda el token codificado
                // para usarlo en otras llamadas del fronted)
                    usuario: respuesta.data.data.user
                // EN NUESTRO CASO SERÍA: usuario: decodificado (se guarda el token decodificad
                // para poder acceder a sus elementos, como user o role)
                }

                console.log(datosBackend);
                dispatch(login({credentials: datosBackend}));
            }
        )
        .catch(error => console.log(error))

  }

  return (
    <Container
      fluid
      className="homeContainer d-flex flex-column justify-content-between"
    >
      <Row className="d-flex justify-content-center">
        <Col xxl={4} xl={5} sm={7} className="my-3">
          <img src={Z1} alt="Z1" className="z1" />
          <div className="logRegContainer">
            <h1 className="text-center">Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) => newCredentials(e)}
                  onBlur={(e) => credentialsValidate(e)}
                />
                <Form.Text>{credentialsError.emailError}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => newCredentials(e)}
                  onBlur={(e) => credentialsValidate(e)}
                />
                <Form.Text>{credentialsError.passwordError}</Form.Text>
              </Form.Group>

              {/* <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="logRegButton"
                  onClick={()=> logIn()}
                >
                  Submit
                </Button>
              </div> */}
              <div className="logButton" onClick={()=> logIn()}>Submit</div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

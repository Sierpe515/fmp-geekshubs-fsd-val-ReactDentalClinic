import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Z1 from "../../image/z1.png";
import "./Login.css";
import "../../components/InputBox/InputBox.css"
import { logMe } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { validate } from "../../helpers/useful";
import ZGIF from '../../image/ZGIF.gif'

export const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
    messageButton: ""
  });

  const [welcome, setWelcome] = useState("");

  const [btnMessage, setBtnMessage] = useState("")

  useEffect(() => {
    if (credentialsRdx.credentials.token) {
      navigate("/");
    }
  }, []);

  const newCredentials = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError2 = (e) => {
    let error = "";
    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const logIn = () => {

    logMe(credentials)
        .then(
            respuesta => {
              let decodificado = decodeToken(respuesta.data.token)

              console.log(decodificado);

              let dateBackend = {
                token: respuesta.data.token,
                userName: decodificado.nameUser,
                userRole: decodificado.roleId
              }

              console.log("dateBackend: ",dateBackend.userRole);
              dispatch(login({credentials: dateBackend}));

                setWelcome(`Welcome again ${dateBackend.userName}`);

                console.log(welcome);

                setTimeout(() => {
                  navigate("/");
                }, 3000);
            }
        )
        .catch(error => {
          console.log(error)
          setBtnMessage("Email or password invalid")
        })

  }

  return (
    <Container
      fluid
      className="homeContainerMin d-flex flex-column justify-content-between"
    >
      <Row className="d-flex justify-content-center">
        <Col xxl={4} xl={5} sm={7} className="my-3">
          <img src={Z1} alt="Z1" className="z1" />
          <div className="logRegContainer">
            <h1 className="text-center">Login</h1>
            <Form>
              {welcome !== "" ? (
                <div className="welcomeBox1 d-flex flex-column align-items-center justify-content-center text-center"><h3>{welcome}</h3>
                  <div><img className="welcomeGIF" src={ZGIF} alt="" /></div>
                </div>
              ) : (
                <>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className={
                    btnMessage === ""
                      ? "inputBasicDesign"
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) => newCredentials(e)}
                  onBlur={(e) => checkError2(e)}
                />
                <Form.Text className="errorMessage">{credentialsError.emailError}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={
                    btnMessage === ""
                      ? "inputBasicDesign"
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => newCredentials(e)}
                  onBlur={(e) => checkError2(e)}
                />
                <Form.Text className="errorMessage">{credentialsError.passwordError}</Form.Text>
              </Form.Group>
              <Form.Text className="errorMessage">{btnMessage}</Form.Text>
              <div className="logButton" name="button" onClick={()=> logIn()}>Submit</div>
              </>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

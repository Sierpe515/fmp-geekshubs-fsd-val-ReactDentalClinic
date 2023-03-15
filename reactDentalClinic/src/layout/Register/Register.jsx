import React, { useState, useEffect } from "react";
import { InputBox } from "../../components/InputBox/InputBox";
import { validate } from "../../helpers/useful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Z2 from "../../image/z2.png";
import "./Register.css";
import { ButtonSubmit } from "../../components/ButtonSubmit/ButtonSubmit";


// HOOKS

export const Register = () => {
  const [dataUser, setDataUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [dataUserValidation, setDataUserValidation] = useState({
    nameValidation: false,
    surnameValidation: false,
    emailValidation: false,
    passwordValidation: false
  })

  const [dataUserError, setDataUserError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    passwordError: ""
  });

  const [registerAct, setRegisterAct] = useState(false);

  // HANDLERS

  const newDataUser = (e) => {
    setDataUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //USEEFFECT

  useEffect(() => {
 
    for(let error in dataUserError){
      if(dataUserError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let vacio in dataUser){
      if(dataUser[vacio] === ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let validated in dataUserValidation){
      if(dataUserValidation[validated] === false){
        setRegisterAct(false);
        return;
      }
    }
  
    setRegisterAct(true);
  });


  const checkError = (e) => {


    let error = "";

    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;

    console.log("dataUser",dataUserValidation)

    setDataUserValidation((prevState) => ({
      ...prevState,
      [e.target.name + "Validation"]: checked.validated,
    }));

    setDataUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
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
                  <InputBox
                    className={
                      dataUserError.nameError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"name"}
                    placeholder={"Enter your name"}
                    required={true}
                    changeFunction={(e) => {newDataUser(e); checkError(e)}}
                    // blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserError.nameError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname</Form.Label>
                  <InputBox
                    className={
                      dataUserError.surnameError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"surname"}
                    placeholder={"Enter your surname"}
                    required={true}
                    changeFunction={(e) => {newDataUser(e); checkError(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserError.surnameError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <InputBox
                    className={
                      dataUserError.emailError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"email"}
                    name={"email"}
                    placeholder={"Enter email"}
                    required={true}
                    changeFunction={(e) => {newDataUser(e); checkError(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserError.emailError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <InputBox
                    className={
                      dataUserError.passwordError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"password"}
                    name={"password"}
                    placeholder={"Enter password"}
                    required={true}
                    changeFunction={(e) => {newDataUser(e); checkError(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserError.passwordError}</Form.Text>
                </Form.Group>
              </Row>

              {/* <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  // className="logRegButton"
                  className={
                    registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
                  }
                  onClick={
                    registerAct
                      ? () => {
                        checkValue();
                        }
                      : () => {}
                  }
                >
                  Submit
                </Button>
              </div> */}
              <ButtonSubmit
                className={registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"}
                onClick={
                  registerAct
                    ? () => {
                      checkValue();
                      }
                    : () => {}
                }
                name="Register"
              />
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

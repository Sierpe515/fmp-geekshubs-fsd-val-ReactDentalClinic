import React, { useState, useEffect } from "react";
import { InputBox } from "../../components/InputBox/InputBox";
import { validate } from "../../helpers/useful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import Z2 from "../../image/z2.png";
import "../Register/Register.css";
import { updateProfile } from "../../services/apiCalls";
import { ButtonSubmit } from "../../components/ButtonSubmit/ButtonSubmit";
import { useSelector } from "react-redux";
import { userData } from '../../layout/userSlice';
import dayjs from 'dayjs';


// HOOKS

export const ProfileUpdate = () => {

  const dataCredentialsRdx = useSelector(userData);

  let token = dataCredentialsRdx.credentials.token;

  const [dataUserUpdate, setDataUserUpdate] = useState({
    name: "",
    surname: "",
    nif: "",
    birth_date: (dayjs("").format('YYYY-MM-DD')),
    direction: "",
    email: "",
    phone: "",
    password: "",
  });

  const [dataUserUpdateValidation, setDataUserUpdateValidation] = useState({
    nameValidation: false,
    surnameValidation: false,
    nifValidation: false,
    birth_dateValidation: false,
    directionValidation: false,
    emailValidation: false,
    phoneValidation: false,
    passwordValidation: false
  })

  const [dataUserUpdateError, setDataUserUpdateError] = useState({
    nameError: "",
    surnameError: "",
    nifError: "",
    birth_dateError: "",
    directionError: "",
    emailError: "",
    phoneError: "",
    passwordError: ""
  });

  const [registerAct, setRegisterAct] = useState(false);

  // HANDLERS

  const newDataUserUpdate = (e) => {
    setDataUserUpdate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //USEEFFECT


  useEffect(()=>{
    console.log(dataCredentialsRdx.credentials.token);
  })

  useEffect(() => {
 
    for(let error in dataUserUpdateError){
      if(dataUserUpdateError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let vacio in dataUserUpdate){
      if(dataUserUpdate[vacio] === ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let validated in dataUserUpdateValidation){
      if(dataUserUpdateValidation[validated] === false){
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

    console.log("dataUserUpdate",dataUserUpdateValidation)
    console.log(dataUserUpdate);

    setDataUserUpdateValidation((prevState) => ({
      ...prevState,
      [e.target.name + "Validation"]: checked.validated,
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

    setDataUserUpdateError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const UpdateUser = () => {
    updateProfile(dataUserUpdate, token)
      .then(
        action => {
        console.log("registered user")
        setTimeout(() => {
          navigate("/register");
        }, 500);
    })
      .catch(error => console.log(error))
  }

  
  return (
    <Container fluid className="homeContainer">
      <Row className="d-flex justify-content-center">
        <Col xxl={4} xl={5} sm={7} className="my-3">
          {/* <img src={Z2} alt="Z2" className="z2" /> */}
          <div className="logRegContainer">
            <h1 className="text-center">Update Profile</h1>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <InputBox
                    className={
                      dataUserUpdateError.nameError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"name"}
                    placeholder={"Enter your name"}
                    required={true}
                    changeFunction={(e) => {newDataUserUpdate(e); checkError(e)}}
                    blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserUpdateError.nameError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname</Form.Label>
                  <InputBox
                    className={
                        dataUserUpdateError.surnameError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"surname"}
                    placeholder={"Enter your surname"}
                    required={true}
                    changeFunction={(e) => {newDataUserUpdate(e); checkError(e)}}
                    blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserUpdateError.surnameError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <InputBox
                    className={
                        dataUserUpdateError.emailError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"email"}
                    name={"email"}
                    placeholder={"Enter email"}
                    required={true}
                    changeFunction={(e) => {newDataUserUpdate(e); checkError(e)}}
                    blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserUpdateError.emailError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridNIF">
                  <Form.Label>NIF</Form.Label>
                  <InputBox
                    className={
                        dataUserUpdateError.nifError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"nif"}
                    placeholder={"Enter your NIF"}
                    required={false}
                    changeFunction={(e) => {newDataUserUpdate(e); checkError(e)}}
                    blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserUpdateError.nifError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridDirection">
                  <Form.Label>Direction</Form.Label>
                  <InputBox
                    className={
                        dataUserUpdateError.directionError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"direction"}
                    placeholder={"Enter your Direction"}
                    required={false}
                    changeFunction={(e) => {newDataUserUpdate(e); checkError(e)}}
                    blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserUpdateError.directionError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridDirection">
                  <Form.Label>Birth Date</Form.Label>
                  <InputBox
                    className={
                        dataUserUpdateError.birth_dateError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"date"}
                    name={"birth_date"}
                    placeholder={"Enter your Birth Date"}
                    required={false}
                    changeFunction={(e) => {newDataUserUpdate(e); checkError(e)}}
                    blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserUpdateError.birth_dateError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridDirection">
                  <Form.Label>Phone</Form.Label>
                  <InputBox
                    className={
                        dataUserUpdateError.phoneError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    name={"phone"}
                    placeholder={"Enter your Phone"}
                    required={false}
                    changeFunction={(e) => {newDataUserUpdate(e); checkError(e)}}
                    blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserUpdateError.phoneError}</Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <InputBox
                    className={
                        dataUserUpdateError.passwordError === ""
                        ? "inputBasicDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"password"}
                    name={"password"}
                    placeholder={"Enter password"}
                    required={true}
                    changeFunction={(e) => {newDataUserUpdate(e); checkError(e)}}
                    blurFunction={(e) => {checkError2(e)}}
                  />
                  <Form.Text className="errorMessage">{dataUserUpdateError.passwordError}</Form.Text>
                </Form.Group>
              </Row>
              <ButtonSubmit
                className={registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"}
                onClick={
                  registerAct
                    ? () => {
                        console.log(dataUserUpdate);
                        UpdateUser()
                      }
                    : () => {}
                }
                name="Update"
              />
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
